const { HumidityReg, REPORT_UPDATE } = require("jacdac-ts")
const maxApi = require('max-api');

exports.Humidity = function(service){

    // HUMIDITY REGISTER
    const humidityReg = service.register(HumidityReg.Humidity)
    humidityReg.on(REPORT_UPDATE, () => {
        const [humidity] = humidityReg.unpackedValue 
        maxApi.outlet([service.maxID.toString(), "humidity", humidity]);
    })
    
}