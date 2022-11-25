const fs = require("fs")

const serviceSpecificationData = require("./services.json");

const { isCommand,
    isEvent,
    isRegister,
    PACKETIO_TRANSPORT,
    } = require("jacdac-ts")



let _serviceSpecifications =
    serviceSpecificationData
let _serviceSpecificationMap = undefined
let _customServiceSpecifications = {}

const generateFiles = () => {
    for (const serviceIndex in serviceSpecificationData){
    
        const service = serviceSpecificationData[serviceIndex];
        const packets = service.packets.filter(pkt => !pkt.derived);
        const registers = packets.filter(isRegister);

        const filename = service.name

        const prefix = './maxServiceObjectGenerator/output/'
        if (service.name === 'Rotary encoder'){
            
            console.log('registers: ', registers)

            fs.writeFile(prefix + `${filename}.js`, 'const myTest = 666;', function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            })
        }
    }
}


const fileString = (service, registers) => {

    const registerNames = [];
    registers.forEach(register => {
        registerNames.push(`${register.name.charAt(0).toUpperCase() + register.name.slice(1)}`)
    })

    const file = 
    `
        //
    
    `
}


generateFiles();