
function onPageLoad() {
	  PumpingStation("PumpingStation.svg", "#svgStanica" );
	window.setInterval(function() {getRestData();}, 2000);
}

function handlePushEvent(data) {
	if (data.eventType == "temperatureData") {
		updateSchema(updateDataVypnut);
	}
}
