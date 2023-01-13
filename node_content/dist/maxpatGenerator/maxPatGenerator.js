"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceSpecificationData = require("./services.json");
const fs = require("fs");
const { isCommand, isEvent, isRegister, PACKETIO_TRANSPORT, camelize, packInfo } = require("jacdac-ts");
let _serviceSpecifications = serviceSpecificationData;
/* FORMAT OF THE patching_rect PARAMETER.


    "patching_rect" : [ 124.0, 135.0, 72.0, 22.0 ]
*/
let objIDCounter = 0;
let initJSON = {
    "patcher": {
        "fileversion": 1,
        "appversion": {
            "major": 8,
            "minor": 3,
            "revision": 1,
            "architecture": "x64",
            "modernui": 1
        },
        "classnamespace": "box",
        "rect": [865, 268, 640, 480],
        "bglocked": 0,
        "openinpresentation": 0,
        "default_fontsize": 12,
        "default_fontface": 0,
        "default_fontname": "Arial",
        "gridonopen": 1,
        "gridsize": [15, 15],
        "gridsnaponopen": 1,
        "objectsnaponopen": 1,
        "statusbarvisible": 2,
        "toolbarvisible": 1,
        "lefttoolbarpinned": 0,
        "toptoolbarpinned": 0,
        "righttoolbarpinned": 0,
        "bottomtoolbarpinned": 0,
        "toolbars_unpinned_last_save": 0,
        "tallnewobj": 0,
        "boxanimatetime": 200,
        "enablehscroll": 1,
        "enablevscroll": 1,
        "devicewidth": 0,
        "description": "",
        "digest": "",
        "tags": "",
        "style": "",
        "subpatcher_template": "",
        "assistshowspatchername": 0,
        "boxes": [
            {
                "box": {
                    "id": "obj-1",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 1,
                    "outlettype": [""],
                    "patching_rect": [50, 50, 85, 22],
                    "text": "r serviceEvent"
                }
            },
            {
                "box": {
                    "id": "obj-2",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 2,
                    "outlettype": ["", ""],
                    "patching_rect": [150, 50, 72, 22],
                    "text": "patcherargs"
                }
            },
            {
                "box": {
                    "id": "obj-3",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [""],
                    "patching_rect": [150, 100, 73, 22],
                    "text": "unpack sym"
                }
            },
            {
                "box": {
                    "id": "idMessage",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [""],
                    "patching_rect": [150.0, 150.0, 51.0, 22.0],
                    "text": ""
                }
            },
            {
                "box": {
                    "id": "obj-4",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 2,
                    "outlettype": ["", ""],
                    "patching_rect": [50, 150, 76, 22],
                    "text": "route"
                }
            }
        ],
        "lines": [
            {
                "patchline": {
                    "destination": ["obj-4", 0],
                    "order": 1,
                    "source": ["obj-1", 0]
                }
            },
            {
                "patchline": {
                    "destination": ["obj-3", 0],
                    "order": 1,
                    "source": ["obj-2", 0]
                }
            },
            {
                "patchline": {
                    "destination": ["obj-4", 1],
                    "order": 1,
                    "source": ["obj-3", 0]
                }
            },
            {
                "patchline": {
                    "destination": ["idMessage", 1],
                    "order": 1,
                    "source": ["obj-3", 0]
                }
            },
            {
                "patchline": {
                    "destination": ["RouteRegisters", 0],
                    "order": 1,
                    "source": ["obj-4", 0]
                }
            }
        ]
    }
};
for (let s = 0; s < serviceSpecificationData.length; s++) {
    let service = serviceSpecificationData[s];
    const generatedObjs = serviceToMaxObjects(service);
    //console.log('route register: ', routeRegister)
    if (generatedObjs !== null) {
        const fileContent = JSON.parse(JSON.stringify(initJSON));
        generatedObjs.boxes.forEach(box => { fileContent.patcher.boxes.push({ box: box }); });
        generatedObjs.lines.forEach(line => { fileContent.patcher.lines.push({ patchline: line }); });
        const serviceName = service.camelName.charAt(0).toUpperCase() + service.camelName.slice(1);
        writeFile(`JDService${serviceName}`, fileContent);
    }
}
function serviceToMaxObjects(service) {
    const lines = [];
    const boxes = [];
    const counter = 5;
    const routeObjects = [];
    const RouteRegisters = {
        id: `RouteRegisters`,
        maxclass: "newobj",
        numinlets: 1,
        numoutlets: 1,
        outlettype: [""],
        patching_rect: [50, 250, 100, 22],
        text: "route "
    };
    let routeParams = '';
    if (service.extends.includes("_sensor")) {
        const registers = service.packets.filter(register => isRegister(register) && !register.derived);
        const readOnlyRegisters = registers.filter(register => register.kind === 'ro');
        let regCounter = 0;
        readOnlyRegisters.forEach(register => {
            routeParams += `${register.name} `;
            regCounter++;
        });
        RouteRegisters.text += routeParams;
        // make length of route box equal to string size
        RouteRegisters.patching_rect[3] = RouteRegisters.text.length + 5;
        // add to boxes
        boxes.push(RouteRegisters);
        const outlets = generateOutlets(service, readOnlyRegisters, RouteRegisters);
        return {
            boxes: boxes.concat(outlets.boxes),
            lines: lines.concat(outlets.lines)
        };
    }
    return null;
}
function generateFormattingObjects(registerName, outputFormat, registerNum) {
    const lines = [];
    const boxes = [];
    const formats = outputFormat.split(',');
    // add from symbol object
    boxes.push({
        id: `${registerName}_fromSymbol`,
        maxclass: "newobj",
        text: "fromsymbol",
        numinlets: 1,
        numoutlets: 1,
        outlettype: [""],
        patching_rect: [50 + (registerNum * 50) + 70, 300, 71.0, 22.0]
    });
    //add lines
    lines.push({
        destination: [`${registerName}_fromSymbol`, 0],
        order: 1,
        source: ["RouteRegisters", registerNum]
    });
    for (let f = 0; f < formats.length; f++) {
        const format = formats[f];
        /* boxes.push({
            
        }) */
    }
    return {
        lines: lines,
        boxes: boxes
    };
}
function generateOutlets(service, registers, routeObject) {
    const lines = [];
    const boxes = [];
    const routeObjectID = routeObject.id;
    const numOutlets = registers.length;
    let allFormattingObjects = { lines: [], boxes: [] };
    // generate the object boxes
    for (let registerNum = 0; registerNum < registers.length; registerNum++) {
        const register = registers[registerNum];
        const packetInfo = packInfo(service, register, {
            isStatic: true,
            useBooleans: false,
            useJDOM: true,
        });
        const outputFormat = JSON.stringify(packetInfo.types).replace(/['"\[\]]+/g, '');
        const formattingObjects = generateFormattingObjects(register.name, outputFormat, registerNum);
        console.log('formatting objs: ');
        console.log(formattingObjects);
        allFormattingObjects.lines = allFormattingObjects.lines.concat(formattingObjects.lines);
        allFormattingObjects.boxes = allFormattingObjects.boxes.concat(formattingObjects.boxes);
        console.log('types: ', packetInfo.types);
        boxes.push({
            id: `${register.name}_outlet`,
            index: registerNum + 1,
            maxclass: "outlet",
            numinlets: 1,
            numoutlets: 0,
            patching_rect: [50 + (registerNum * 50), 350, 30, 30],
            comment: `${register.name}: ${JSON.stringify(packetInfo.types).replace(/['"\[\]]+/g, '')}`
        });
        objIDCounter++;
    }
    // generate the lines connecting them 
    for (let registerNum = 0; registerNum < registers.length; registerNum++) {
        const register = registers[registerNum];
        // line from fromsymbol to outlet
        lines.push({
            destination: [`${registers[registerNum].name}_outlet`, 0],
            order: 1,
            source: [`${register.name}_fromSymbol`, 0]
        });
    }
    return {
        lines: lines.concat(allFormattingObjects.lines),
        boxes: boxes.concat(allFormattingObjects.boxes)
    };
}
function addMaxObjectObject(name, params) {
}
function writeFile(filename, content) {
    const prefix = './src/maxpatGenerator/autogen_patches/';
    const filecontent = JSON.stringify(initJSON);
    fs.writeFile(prefix + `${filename}.maxpat`, JSON.stringify(content), function (err) {
        if (err) {
            console.log('ERROR WRITING FILE: ', err);
        }
        throw err;
        console.log('File is created successfully.');
    });
}
