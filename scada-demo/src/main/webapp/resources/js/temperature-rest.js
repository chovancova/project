
var currentTemperature; 

function getRestData() {
	jQuery.ajax({
	    url: 'rest/temperature',
	    type: 'GET',
	    dataType: 'json',
	    contentType: 'application/json; charset=utf-8',
	    success: function(data) {
	    	currentTemperature = data.temperature;
	    	console.log("current temperature: " + currentTemperature);
	    	animujTeplomer(currentTemperature);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	    	logger.log("ajax error: " + textStatus);
	    },
	});
}

function onPageLoad() {
	var tepl = new Thermometer(0);
	window.setInterval(function() {getRestData();}, 2000);
}
