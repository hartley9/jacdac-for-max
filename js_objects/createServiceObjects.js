inlets = 1; 
outlets = 1;

var objects = {};

var JDServiceToMaxMap = {};


function setJDServiceToMaxMap(){
	JDServiceToMaxMap = new Dict("JDServiceToMaxMap");
	
}

function clearServiceObjects(){
	
	var k = qualNameMap.getkeys();
	for (var obj=0; obj<k.length; obj++){
		post('key')
		post(k[obj]);
		
		this.patcher.parentpatcher.remove(objects[k[obj]])
	}
	
	objects = {}
}
function serviceToMaxObj(service){
	// TODO USE JSON MAP INSTEAD OF BELOW
	post('ref ' + reference[service])
	return reference[service]; 

	if (service.charAt(0).toLowerCase() === 'e'){
		
	}

	return null
}

function getObjects(){
	post(objects);
}


 function setQualNameMap(placeholder){

	qualNameMap = new Dict("qualNameMap");
    
} 


function getServiceObjects(){

	post('qualified name map: ')
	post(qualNameMap.stringify())

	
	var k = qualNameMap.getkeys();
	post('keys:');	
	post(k);

	var heightCounter = 0;
	var objOffset = 80;

	for(i = 0; i < k.length; i++){
		
		var item  = qualNameMap.get(k[i])
		post('item');
		post(item)
		// does service have equivalent max object?
		if (serviceToMaxObj(item) !== undefined && serviceToMaxObj(item) !== null && serviceToMaxObj(item).length > 0)
			{
				// does device && service max object instance already exist?
				if (objects[k[i]] === undefined){
					
					// var nameOfObjectToSpawn =
					objects[k[i]] = this.patcher.parentpatcher.newdefault(100, 150 + (objOffset * heightCounter), serviceToMaxObj(item), k[i]);

				heightCounter++;
				} else {
					post('module/service already exists')
				}
				
			
			}else {
				post('unknown item: ', item)
			}
	}
	
	

}
	


var reference = {
	"accelerometer" : "JDServiceAccelerometer",
	"arcade gamepad" : "JDServiceArcadeGamepad",
	"barometer" : "JDServiceBarometer",
	"button" : "JDServiceButton",
	"color" : "JDServiceColor",
	"compass" : "JDServiceCompass",
	"distance" : "JDServiceDistance",
	"equivalent co₂" : "JDServiceECO2",
	"flex" : "JDServiceFlex",
	"gamepad" : "JDServiceGamepad",
	"gyroscope" : "JDServiceGyroscope",
	"heart rate" : "JDServiceHeartRate",
	"humidity" : "JDServiceHumidity",
	"illuminance" : "JDServiceIlluminance",
	"light level" : "JDServiceLightLevel",
	"magnetometer" : "JDServiceMagnetometer",
	"matrix keypad" : "JDServiceMatrixKeypad",
	"motion" : "JDServiceMotion",
	"potentiometer" : "JDServicePotentiometer",
	"pulse oximeter" : "JDServicePulseOximeter",
	"rain gauge" : "JDServiceRainGauge",
	"real time clock" : "JDServiceRealTimeClock",
	"reflected light" : "JDServiceReflectedLight",
	"rotary encoder" : "JDServiceRotaryEncoder",
	"rover" : "JDServiceRover",
	"soil moisture" : "JDServiceSoilMoisture",
	"sound level" : "JDServiceSoundLevel",
	"sound spectrum" : "JDServiceSoundSpectrum",
	"switch" : "JDServiceSwitch",
	"temperature" : "JDServiceTemperature",
	"total volatile organic compound" : "JDServiceTvoc",
	"uv index" : "JDServiceUvIndex",
	"water level" : "JDServiceWaterLevel",
	"weight scale" : "JDServiceWeightScale",
	"wind direction" : "JDServiceWindDirection",
	"wind speed" : "JDServiceWindSpeed"
	}