
const serviceSpecificationData = require("./services.json");
const fs = require("fs");


let finalFileContent: string = ``

generateServiceMapFile();



function generateServiceMapFile(){
    const services = getSupportedServices(serviceSpecificationData)

    let names: any[] = services.map(({ name }) => 
        name.toLowerCase())
    
    
    let objectNames = services.map(({ camelName }) =>
        camelName.charAt(0).toUpperCase() + camelName.slice(1));
    
   // (service.camelName.charAt(0).toUpperCase() + service.camelName.slice(1)

    console.log('names: ', names)

    console.log('object names: ', objectNames)

    console.log(`lengths names/objectNames: ${names.length}/${objectNames.length}`)

    finalFileContent += `{\n`

    for (let s=0; s<services.length; s++){
        
        // if last entry no comment at the end
        if (s === services.length - 1){
            finalFileContent += `\"${names[s]}\" : \"JDService${objectNames[s]}\"\n`    
        }else {
            finalFileContent += `\"${names[s]}\" : \"JDService${objectNames[s]}\",\n`    
        }
        

    }
    
    finalFileContent += `}`

    writeFile

    console.log('final file: \n', finalFileContent)

    writeFile('./', 'serviceToMaxObjectMap.json', finalFileContent)
    return names;

}


function writeFile(path: string, filename: string, content: string){
	const prefix = path

    

    const filecontent = JSON.stringify(content);

    fs.writeFile(prefix + `${filename}`, content, function (err: any) {
        if (err){
            console.log('ERROR WRITING FILE: ', err)
        } throw err;
        console.log('File is created successfully.');
    })
}





function getSupportedServices(serviceSpecificationData: any[]): any[]{

    let supportedServices: any[] = []

    for (let s=0; s<serviceSpecificationData.length; s++){
        let service = serviceSpecificationData[s];
        

        if (service.extends.includes("_sensor")){
            supportedServices.push(service)
        }
    }

    return supportedServices;
}