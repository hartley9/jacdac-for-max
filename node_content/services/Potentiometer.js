const { PotentiometerReg, REPORT_UPDATE } = require("jacdac-ts")
const maxApi = require('max-api');

let newPosition = 0;
let potentiometerTolerance = 0.01;
exports.Potentiometer = function (service){
    
    const positionReg = service.register(PotentiometerReg.Position)
    positionReg.on(REPORT_UPDATE, () => {

        const [position] = positionReg.unpackedValue;

        if (position > newPosition + potentiometerTolerance || position < newPosition - potentiometerTolerance || newPosition === 0)
            {
                newPosition = position;
                maxApi.outlet([service.maxID.toString(), "position", position.toString()])
            }

    })

    const variantReg = service.register(PotentiometerReg.Variant);
    variantReg.oon(REPORT_UPDATE, () => {
        const [variant] = variantReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), "variant", variant.toString()])
    })
    
  /*   const clicks_per_turnReg = service.register(RotaryEncoderReg.ClicksPerTurn);
    clicks_per_turnReg.on(REPORT_UPDATE, () => {

        const [clicksPerTurn] = clicks_per_turnReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), 'clicksPerTurn', clicksPerTurn.toString()])

    }) 

    const clickerReg = service.register(RotaryEncoderReg.Clicker)
    clickerReg.on(REPORT_UPDATE, () => {

        const [clicker] = clickerReg.unpackedValue;
        maxApi.outlet([service.maxID.toString(), 'clicker', clicker.toString()])
        
    })
 */

}