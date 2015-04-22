
function onPageLoad() {
	var tepl = new Thermometer(0);
}

function handlePushEvent(data) {
	if (data.eventType == "temperatureData") {
		animujTeplomer(data.data);
	}
}
