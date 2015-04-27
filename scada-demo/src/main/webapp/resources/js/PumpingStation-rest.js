
var updateDataVypnut = {
	    "valve1": "false",
	    "tank": "0",
	    "engineRotation": "false",
	    "valve2": "false"
	};

var updateDataNahodne = {
		"valve1": "true",
	    "tank": "getRandomCislo()",
	    "engineRotation": "true",
	    "valve2": "true"
	};





function getRestData() {
	jQuery.ajax({
	    url: 'rest/PumpingStation',
	    type: 'GET',
	    dataType: 'json',
	    contentType: 'application/json; charset=utf-8',
	    success: function(data) {
	    	 	animujTank(hodnotaNadrze);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	    	logger.log("ajax error: " + textStatus);
	    },
	});
}

function onPageLoad() {
	  PumpingStation("PumpingStation.svg", "#svgStanica" );
	window.setInterval(function() {getRestData();}, 1500);
}
