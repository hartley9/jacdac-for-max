process.on('uncaughtException', (err) => {
    try { require("max-api").post(`jacdac error: ${err.message}`); } catch (_) {}
    console.error(err);
    process.exit(1);
});
process.on('unhandledRejection', (reason) => {
    try { require("max-api").post(`jacdac unhandled rejection: ${reason}`); } catch (_) {}
    console.error(reason);
});

const maxApi = require("max-api");
const {serviceMap} = require('./services/serviceMap')
const {ControlReg, CONNECTION_STATE, DEVICE_ANNOUNCE, DISCONNECT, createNodeUSBOptions, createNodeWebSerialTransport, createUSBBus, DEVICE_RESTART, DEVICE_DISCONNECT, DEVICE_CONNECT, createWebSerialTransport, JDBus} = require("jacdac-ts");

let WebUSB, SerialPort;
try {
    ({ WebUSB } = require("usb"));
    ({ SerialPort } = require("serialport"));
} catch (err) {
    maxApi.post(`jacdac: failed to load native modules — did you run setup.bat? (${err.message})`);
    process.exit(1);
}
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

rl.on("line", async line => {
  // This will be posted to the Max console
  const items = line.split(' ');
  maxApi.post(line)
  maxApi.post(items)
  if (items[0].includes('identify')){
    maxApi.post(line[0])
    await identify(items[1].split('_')[0]);
  }
})

// TODO: add web serial transport
//const bus = new JDBus([createNodeWebSerialTransport(SerialPort)]);
//const serialport = require("serialport");

let bus;
try {
    const options = createNodeUSBOptions(WebUSB);
    bus = createUSBBus(options);
} catch (err) {
    maxApi.post(`jacdac: USB bus init failed — ${err.message}`);
    process.exit(1);
}

const devices = bus.devices();

let devDescriptions = []
let deviceList = [];
let qualNameMap = {}

try {
    bus.connected ? bus.disconnect() : bus.connect();
} catch (err) {
    maxApi.post(`jacdac: bus connect failed — ${err.message}`);
}

// am i connected?
// track connection state
bus.on(CONNECTION_STATE, () => {
    console.log(`connected: ${bus.connected}`)
	if (bus.connected === true){
    console.clear(); 
  }
})

// Qualtified name --> service mapper
bus.on(DEVICE_RESTART, () => {
  generateQualNameMap()
})


// device joins
bus.on(DEVICE_ANNOUNCE, (device) => {  
  deviceList.push(device);

  devDescriptions.push(JSON.parse(JSON.stringify(device.describe())));

  const services = bus.services();

  for (const service of services){
    service.maxID = service.qualifiedName.replace('[', '_').replace(']','');

    
    maxApi.outlet('devDesc', JSON.stringify(devDescriptions))
    const servMap = serviceMap(service);
    
  }
  
  for (const service of services){
    maxApi.outlet('qualifiedName', service.qualifiedName);
    let convQualName = service.qualifiedName.replace('[', '_').replace(']','')
    qualNameMap[convQualName] = service.name 
    
    maxApi.outlet('qualNameMap', qualNameMap);
  }
})


// Resolve service, can i find service for existing service index
// bus.services()
// bus.device(deviceID)

// RoleManager -> maps name to serviceID, look into this
// 

bus.on(DEVICE_CONNECT, (device) => {
  console.log('DEVICE CONNECTED');
  console.log(device.name);

  generateQualNameMap();
})

bus.on(DEVICE_DISCONNECT, (device) => {
  console.log('DEVICE DISCONNECTED');
  console.log(device.name);

  generateQualNameMap();
})
bus.on(DISCONNECT, evt => {

	console.log('DISCONNECT');
	console.log(evt);
})


function generateQualNameMap(){

  qualNameMap = {};
  const services = bus.services();
  for (const service of services){
  //if ()
  maxApi.outlet('qualifiedName', service.qualifiedName);
  
  var convQualName = service.qualifiedName.replace('[', '_').replace(']','')
  qualNameMap[convQualName] = service.name;
  
  maxApi.outlet('qualNameMap', qualNameMap)
  //const devices = bus.devices();
  

  }
}

maxApi.addHandler("identify", () => {identify()})
function identify(devFriendlyName){

  console.log(devFriendlyName)
  const devices = bus.devices();
  devices.forEach(dev =>{
    console.log(dev.friendlyName)
    if (dev.friendlyName === devFriendlyName){
      console.log('found service')
      console.log(JSON.stringify(dev.qualifiedName))
      //await ControlReg.sendSetPackedAsync()

      dev.identify();
    }
  })
}




maxApi.addHandler("descriptions", () => {returnDeviceDescriptions()})
function returnDeviceDescriptions(){
  
  let deviceDescriptionDict = new Object();

  for (const device of devices){
    deviceDescriptionDict[`${device.id}`] = device.describe();
  }

  maxApi.outlet("DeviceDescriptions", deviceDescriptionDict)
}
