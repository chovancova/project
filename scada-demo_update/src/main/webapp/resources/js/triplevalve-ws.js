
var schemaData;
var schemaValues;

function onPageLoad() {
	initSchema();
}

function handlePushEvent(data) {
	if (data.eventType == "tripleValveData") {
		schemaData = data;
		schemaValues = JSON.parse(schemaData.data);
    	setRotateR1(schemaValues.rotor0); 
    	setRotateR2(schemaValues.rotor1); 
    	setValveState(schemaValues.valve0);
	}
}
