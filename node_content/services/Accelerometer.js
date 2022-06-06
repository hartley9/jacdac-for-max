const {AccelerometerReg, REPORT_UPDATE } = require("jacdac-ts")
const maxApi = require('max-api')

exports.Accelerometer = function(service){

    // FORCES REGISTER
    const forcesReg = service.register(AccelerometerReg.Forces)
    forcesReg.on(REPORT_UPDATE, () => {
        const [x, y, z] = forcesReg.unpackedValue

        maxApi.outlet([service.maxID.toString(), "forces", x.toString(), y.toString(), z.toString()])
    })

    

}