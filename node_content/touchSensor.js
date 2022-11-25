const {CONNECTION_STATE, DEVICE_ANNOUNCE, DISCONNECT, createNodeUSBOptions, createUSBBus, DEVICE_RESTART, DEVICE_DISCONNECT, DEVICE_CONNECT} = require("jacdac-ts");


const options = createNodeUSBOptions();
const bus = createUSBBus(options);

let devDescriptions = []
let devices = [];

bus.on(CONNECTION_STATE, () => {
    console.log(`connected: ${bus.connected}`)
	if (bus.connected === true){
        console.clear(); 
    }	
});

bus.on(DEVICE_CONNECT, (device) => {
    console.log('DEVICE CONNECTED');
    console.log(device.name);

    const services = bus.services();
    console.log('services: ', services)

    for (const service of services){
        console.log('service: ', service);
    
      } 
  
})



