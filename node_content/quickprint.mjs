// import { SRV_ROTARY_ENCODER, CONNECTION_STATE, DEVICE_ANNOUNCE, CHANGE, DISCONNECT, createNodeUSBOptions, createUSBBus, RotaryEncoderReg, ERROR, RegisterType, PACKET_RECEIVE} from "jacdac-ts";
import * as jd from "jacdac-ts"

const options = jd.createNodeUSBOptions()
const bus = jd.createUSBBus(options);

bus.on(jd.DEVICE_ANNOUNCE, (device) => {



    let services = bus.services();

    for (const service of services){
        let registers = service.registers();

        for (register of registers){

            console.log(register);
        }
    }
})