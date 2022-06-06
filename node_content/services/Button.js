const maxApi = require('max-api')
const {ButtonReg, REPORT_UPDATE} = require('jacdac-ts')

exports.Button = function(service){

    const pressureReg = service.register(ButtonReg.Pressure)
    pressureReg.on(REPORT_UPDATE, () => {
        const [pressure] = pressureReg.unpackedValue
        let pressureVal = 0;
        if (pressure !== 0){
            pressureVal = 1;
        }
        maxApi.outlet([service.maxID.toString(), "pressure", pressureVal.toString()])
    })

    // add analog register    

   /*  const pressedReg = service.register(ButtonReg.Pressed)
    pressedReg.on(REPORT_UPDATE, () => {
        const [pressed] = pressedReg.unpackedValue
        maxApi.outlet([service.maxID.toString(), "pressed", pressed.toString()])
    }) 
     */
    
    // HOW TO EVENTS ????

}