
var schemaData; 

function getRestData() {
	jQuery.ajax({
	    url: 'rest/pumpingstation',
	    type: 'GET',
	    dataType: 'json',
	    contentType: 'application/json; charset=utf-8',
	    success: function(data) {
	    	schemaData = data;
	    	openValve1(data.valve0); 
	    	openValve2(data.valve1); 
	    	rotateEngine(data.rotor0);
	    	animateTank(data.waterLevel);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	    	logger.log("ajax error: " + textStatus);
	    },
	});
}

function onPageLoad() {
    PumpingStation("resources/images/pumpingstation.svg", "#svg2" );
	window.setInterval(function() {getRestData();}, 2000);
}

