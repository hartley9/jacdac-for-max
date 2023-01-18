const maxApi = require("max-api");
const {serviceMap} = require('./services/serviceMap')
const {ControlReg, CONNECTION_STATE, DEVICE_ANNOUNCE, DISCONNECT, createNodeUSBOptions, createUSBBus, DEVICE_RESTART, DEVICE_DISCONNECT, DEVICE_CONNECT} = require("jacdac-ts");
const {WebUSB} = require("usb")

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



// console.clear();

const options = createNodeUSBOptions(WebUSB)
const bus = createUSBBus(options);

const devices = bus.devices();

let devDescriptions = []
let deviceList = [];
let qualNameMap = {}

bus.connected ? bus.disconnect() : bus.connect();

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
//

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

  console.log('in device')
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
  //const devices = bus.devices();

  let stringToReturn = '';

  let deviceDescriptionDict = new Object();


  for (const device of devices){
    deviceDescriptionDict[`${device.id}`] = device.describe();
  }

  maxApi.outlet("DeviceDescriptions", deviceDescriptionDict)
}
