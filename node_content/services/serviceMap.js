const jd = require('jacdac-ts');
const { RotaryEncoder } = require('./RotaryEncoder');
const { Temperature } = require('./Temperature');
const { Button } = require('./Button');
const { Gamepad } = require('./Gamepad');
const { Accelerometer } = require('./Accelerometer');
const { Humidity } = require('./Humidity');
const { LightLevel } = require('./LightLevel');
const { Flex } = require('./Flex');
const { Potentiometer } = require('./Potentiometer');


exports.serviceMap = function(service){
    
    if (service.serviceClass === jd.SRV_ROTARY_ENCODER){
        RotaryEncoder(service)
    } else if (service.serviceClass === jd.SRV_TEMPERATURE){
        Temperature(service)
    } else if (service.serviceClass === jd.SRV_HUMIDITY){
        Humidity(service);
    } else if (service.serviceClass === jd.SRV_BUTTON){
        Button(service);
    }else if (service.serviceClass === jd.SRV_GAMEPAD){
        Gamepad(service);
    } else if (service.serviceClass === jd.SRV_ACCELEROMETER){
        Accelerometer(service);
    } else if (service.serviceClass === jd.SRV_LIGHT_LEVEL){
        LightLevel(service);
    } else if(service.serviceClass === jd.SRV_FLEX){
        Flex(service)
    } else if (service.serviceClass === jd.SRV_POTENTIOMETER){
        Potentiometer(service)
    }
}