const { REPORT_UPDATE, LightLevelReg } = require("jacdac-ts");
const maxApi = require('max-api');


exports.LightLevel = function(service){

    const lightLevelReg = service.register(LightLevelReg.LightLevel)
    lightLevelReg.on(REPORT_UPDATE, () => {
        const [lightLevel] = lightLevelReg.unpackedValue

        maxApi.outlet([service.maxID.toString(), "lightLevel", lightLevel]);
    })
    
}