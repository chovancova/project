
var valveIn;
var valveOut;
var waterTank;
var schema01Paper;

function initSchema01() {
	var wrapper = document.getElementById("schema01Wrapper");
	if (!wrapper) {
		return;
	} 
    schema01Paper = Raphael("schema01Wrapper", 240, 180);
    pipeLine   = schema01Paper.path("M0,130 H90 M140,130 H230");
    pipeLine.attr("stroke-width", "6");
    pipeLine.attr("stroke", "#444743");
    valveIn   = new ComponentValve(schema01Paper, 40, 120, 20, 20, true, false);
    valveOut  = new ComponentValve(schema01Paper, 180, 120, 20, 20, true, false);
    waterTank = new ComponentTank(schema01Paper, 90, 30, 60, 120, 2);
    valveIn.draw();
    valveOut.draw();
    waterTank.draw();
}

function updateSchema01(valveInIsOpened, valveOutIsOpened, tankLevel) {
    valveIn.setOpened(valveInIsOpened);
    valveOut.setOpened(valveOutIsOpened);
    waterTank.setFillPercentage(tankLevel);
}

