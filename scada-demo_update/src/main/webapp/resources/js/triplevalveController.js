/**
 * Created by chova_000 on 24-Apr-15.
 */

var paper;
var isPausedR1 = true;
var animationRunningR1 = false;
var isPausedR2 = true;
var animationRunningR2 = false;

function initSchema() {
    paper = Snap("#svg1");
    Snap.load("resources/images/triplevalve.svg", function (f) {
        paper.append(f);
        console.log("rotor svg loaded ...");
    });
}

function setRotateR1(rotate) {
	if (!animationRunningR1 && rotate) {
		isPausedR1 = false;
	    animationRunningR1 = true;
		rotateLeftR1();
	} else if (!rotate) {
		isPausedR1 = true;
	}
}

function setRotateR2(rotate) {
	if (!animationRunningR2 && rotate) {
		isPausedR2 = false;
	    animationRunningR2 = true;
		rotateLeftR2();
	} else if (!rotate) {
		isPausedR2 = true;
	}
}

function rotateLeftR1() {
    element = paper.select("#engineRotor1");
    var rotacia = "R0,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
    //console.log(rotacia);
    element.transform(rotacia);
    if (!isPausedR1) {
        var rotacia = "R360,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
        element.animate({ transform: rotacia},1500, mina.linear, rotateLeftR1.bind(null));
    } else {
        animationRunningR1 = false;
    }
}

function rotateLeftR2() {
    element = paper.select("#engineRotor2");
    var rotacia = "R0,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
    //console.log(rotacia);
    element.transform(rotacia);
    if (!isPausedR2) {
        var rotacia = "R360,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
        element.animate({ transform: rotacia},1500, mina.linear, rotateLeftR2.bind(null));
    } else {
        animationRunningR2 = false;
    }
}

function setValveState(boolOpen){
    idValve = "#valve01";
    colorValve = "red";
    openOff = (boolOpen) ? 0 : 1;
    colorValve = (openOff) ?   "red" : "green";
    paper.select(this.idValve).attr({fill: colorValve});
}
