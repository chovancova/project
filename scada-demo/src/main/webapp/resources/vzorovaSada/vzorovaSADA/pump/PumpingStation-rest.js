
var updateDataVypnut = {
	    "valve1": "false",
	    "tank": "0",
	    "engineRotation": "false",
	    "valve2": "false"
	};

var updateDataTank = {
	"tank": "86"
};


function getRestData() {
	jQuery.ajax({
	    url: 'rest/pumpingStation',
	    type: 'GET',
	    dataType: 'json',
	    contentType: 'application/json; charset=utf-8',
	    success: function(data) {
	    	 	console.log("data: " + updateDataVypnut);
	    	updateSchema(updateDataVypnut);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	    	logger.log("ajax error: " + textStatus);
	    },
	});
}

function onPageLoad() {
	  PumpingStation("PumpingStation.svg", "#svgStanica" );
	window.setInterval(function() {getRestData();}, 2000);
}
