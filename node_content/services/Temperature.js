const { TemperatureReg, CHANGE, REPORT_UPDATE } = require("jacdac-ts")
const maxApi = require("max-api")
exports.Temperature = function(service){
    // console.log('here in temp')

    const temperatureReg = service.register(TemperatureReg.Temperature);
    temperatureReg.on(REPORT_UPDATE, () => {
        const [temperature] = temperatureReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), "temperature", temperature.toString()])
    })

    const maxTemperatureReg = service.register(TemperatureReg.MaxTemperature)
    maxTemperatureReg.on(REPORT_UPDATE, () => {
        const [maxTemperature] = maxTemperatureReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), "maxTemperature", maxTemperature.toString()])
    }) 


    const minTemperatureReg = service.register(TemperatureReg.MinTemperature)
    minTemperatureReg.on(REPORT_UPDATE, () => {
        const [minTemperature] = minTemperatureReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), "minTemperature", minTemperature.toString()])
    }) 

    const temperatureErrorReg = service.register(TemperatureReg.TemperatureError);
    temperatureErrorReg.on(REPORT_UPDATE, () => {
        const [temperatureError] = temperatureErrorReg.unpackedValue
        maxApi.outlet([service.maxID.toString(), "temperatureError", temperatureError.toString()])
    })

    const variantReg = service.register(TemperatureReg.Variant)
    variantReg.on(REPORT_UPDATE, () => {
        const [variant] = variantReg.unpacked 
        maxApi.outlet([service.maxID.toString(), "variant", variant.toString()])
    }) 
    
}