const { RotaryEncoderReg, REPORT_UPDATE } = require("jacdac-ts")
const maxApi = require('max-api');

exports.RotaryEncoder = function (service){
    
    const positionReg = service.register(RotaryEncoderReg.Position)
    positionReg.on(REPORT_UPDATE, () => {

        const [position] = positionReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), "position", position.toString()])

    })
    
    const clicks_per_turnReg = service.register(RotaryEncoderReg.ClicksPerTurn);
    clicks_per_turnReg.on(REPORT_UPDATE, () => {

        const [clicksPerTurn] = clicks_per_turnReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), 'clicksPerTurn', clicksPerTurn.toString()])

    }) 

    const clickerReg = service.register(RotaryEncoderReg.Clicker)
    clickerReg.on(REPORT_UPDATE, () => {
        const [clicker] = clickerReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), 'clicker', clicker.toString()])
    })


}