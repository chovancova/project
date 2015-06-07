
var schemaData;
var schemaValues;

function onPageLoad() {
    PumpingStation("resources/images/pumpingstation.svg", "#svg2" );
}

function handlePushEvent(data) {
	if (data.eventType == "pumpingStationData") {
		schemaData = data;
		schemaValues = JSON.parse(schemaData.data);
		openValve1(schemaValues.valve0); 
		openValve2(schemaValues.valve1); 
		rotateEngine(schemaValues.rotor0);
		animateTank(schemaValues.waterLevel);
	}
}
