const maxApi = require("max-api");
const {serviceMap} = require('./services/serviceMap')
const {CONNECTION_STATE, DEVICE_ANNOUNCE, DISCONNECT, createNodeUSBOptions, createUSBBus, DEVICE_RESTART, DEVICE_DISCONNECT, DEVICE_CONNECT} = require("jacdac-ts");
const {WebUSB} = require("usb")


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

    console.log('name: ', service.name)
    maxApi.outlet('devDesc', JSON.stringify(devDescriptions))
    const servMap = serviceMap(service);
    console.log('servMap: ', servMap)
  }
  
  for (const service of services){
    maxApi.outlet('qualifiedName', service.qualifiedName);
    let convQualName = service.qualifiedName.replace('[', '_').replace(']','')
    qualNameMap[convQualName] = service.name 
    console.log('service: ', service.name)
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
  console.log('service here: ', service.name)
  maxApi.outlet('qualNameMap', qualNameMap)

  console.log('qualNameMap: ')
  console.log(qualNameMap)

  //const devices = bus.devices();
  console.log('devices');
  console.log(devices)

  }
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
