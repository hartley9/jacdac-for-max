/* const rimraf = require('rimraf');
//remove files in output dir
(async () => rimraf('./output', () => console.log('cleared output dir...'))); */
const fsi = require("fs");
const path = require("path");
const directory = "./src/maxServiceObjectGenerator/autogen_src/";
fsi.readdir(directory, (err, files) => {
    if (err)
        throw err;
    for (const file of files) {
        fsi.unlink(path.join(directory, file), (err) => {
            if (err)
                throw err;
        });
    }
});
