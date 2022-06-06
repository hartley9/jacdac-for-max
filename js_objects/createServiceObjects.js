inlets = 1; 
outlets = 1;

var objects = {};

var JDServiceToMaxMap = {};


function setJDServiceToMaxMap(){
	JDServiceToMaxMap = new Dict("JDServiceToMaxMap");
	
}

function clearServiceObjects(){
	post('in clear objects')
	var k = qualNameMap.getkeys();
	for (var obj=0; obj<k.length; obj++){
		post()
		post('key')
		post()
		post(k[obj]);
		post()
		post()
		this.patcher.remove(objects[k[obj]])
	}
	
	objects = {}
}
function serviceToMaxObj(service){
	// TODO USE JSON MAP INSTEAD OF BELOW
     switch(service){

        case 'rotary encoder':
            return 'JDServiceRotaryEncoder'
        case 'button': 
            return 'JDServiceButton'
		case 'gamepad':
			return 'JDServiceGamepad'
		case 'temperature':
			return 'JDServiceTemperature'
		case 'humidity':
			return 'JDServiceHumidity'
		case 'accelerometer':
			return 'JDServiceAccelerometer'
		case 'light level':
			return 'JDServiceLightLevel'
		case 'flex':
			return 'JDServiceFlex'
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

	post('in get serv');
	post(qualNameMap.stringify())

	
	var k = qualNameMap.getkeys();
	post('k');	
	post(k);

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
					objects[k[i]] = this.patcher.newdefault(100, 100, serviceToMaxObj(item), k[i]);
				//	post(JSON.stringify(objects))
				} else {
					post('already exists')
				}
				
			
			}
	}
	
	

}
	
