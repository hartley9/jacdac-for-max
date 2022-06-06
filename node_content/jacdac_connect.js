const maxApi = require("max-api");
const {serviceMap} = require('./services/serviceMap')
const {CONNECTION_STATE, DEVICE_ANNOUNCE, DISCONNECT, createNodeUSBOptions, createUSBBus, DEVICE_RESTART, DEVICE_DISCONNECT, DEVICE_CONNECT} = require("jacdac-ts");



// console.clear();
const options = createNodeUSBOptions()
const bus = createUSBBus(options);

let devDescriptions = []
let devices = [];
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

bus.on(DEVICE_RESTART, () => {
  generateQualNameMap()
})


// module joins
bus.on(DEVICE_ANNOUNCE, (device) => {  
  devices.push(device);

  devDescriptions.push(device.describe());

  const services = bus.services();

  for (const service of services){
    service.maxID = service.qualifiedName.replace('[', '_').replace(']','');
    serviceMap(service);
  }
  
  // const services = bus.services();
  for (const service of services){
    maxApi.outlet('qualifiedName', service.qualifiedName);
    
    var convQualName = service.qualifiedName.replace('[', '_').replace(']','')
    qualNameMap[convQualName] = service.name
    /* console.log('qualNameMap')
    console.log(qualNameMap) */
    maxApi.outlet('qualNameMap', qualNameMap)


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
  maxApi.outlet('qualifiedName', service.qualifiedName);
  
  var convQualName = service.qualifiedName.replace('[', '_').replace(']','')
  qualNameMap[convQualName] = service.name

  maxApi.outlet('qualNameMap', qualNameMap)

  }
}
