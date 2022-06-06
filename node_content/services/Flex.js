const { FlexReg, REPORT_UPDATE } = require("jacdac-ts")
const maxApi = require('max-api')

exports.Flex = function(service){

    const bendingReg = service.register(FlexReg.Bending);
    bendingReg.on(REPORT_UPDATE, () => {
        const [bending] = bendingReg.unpackedValue


        maxApi.outlet( [ service.maxID.toString(), "bending", bending.toString()] )
    })

}