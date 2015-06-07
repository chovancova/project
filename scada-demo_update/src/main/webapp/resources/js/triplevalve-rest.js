
var schemaData; 

function getRestData() {
	jQuery.ajax({
	    url: 'rest/triplevalve',
	    type: 'GET',
	    dataType: 'json',
	    contentType: 'application/json; charset=utf-8',
	    success: function(data) {
	    	schemaData = data;
	    	setRotateR1(data.rotor0); 
	    	setRotateR2(data.rotor1); 
	    	setValveState(data.valve0);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	    	logger.log("ajax error: " + textStatus);
	    },
	});
}

function onPageLoad() {
	initSchema();
	window.setInterval(function() {getRestData();}, 2000);
}
