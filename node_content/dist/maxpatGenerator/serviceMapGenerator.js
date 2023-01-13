const serviceSpecificationData = require("./services.json");
const fs = require("fs");
function writeFile(filename, content) {
    const prefix = '../js_objects/';
    const filecontent = JSON.stringify(content);
    fs.writeFile(prefix + `${filename}.js`, JSON.stringify(content), function (err) {
        if (err) {
            console.log('ERROR WRITING FILE: ', err);
        }
        throw err;
        console.log('File is created successfully.');
    });
}
