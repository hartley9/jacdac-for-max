

inlets = 1; 
outlets = 1;

post('im here\n');


function list(inputList){

}

function SERVICE(service){
	
		
	const maxObj = serviceToMaxObj(service)

	post(service + ',');
	outlet(0, maxObj)
	
	
	
	
	if (maxObj.length > 1)
		{this.patcher.newdefault(100, 100, serviceToMaxObj(service));}
	
	
}

function dictionary(inDict){
	//	post(inDict);
	}
	 
	
function serviceToMaxObj(service){



    switch(service){

        case 'rotary encoder':
            return 'jdRotaryEncoderUI'
        case 'button': 
            return 'jdButtonUI'
    }
}