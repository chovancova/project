/**
 * Created by chova_000 on 24-Apr-15.
 */

var paper;
function onPageLoad() {
    paper = Snap("#svg1");
    Snap.load("Triple Valve.svg", function (f) {
        paper.append(f);
        console.log("rotor svg loaded ...");
    });
}



function rotuj1(){
    toggleRotation("#engineMotor");
}
function rotuj2(){
    toggleRotation("#engineMotor1");
}


var isPaused = true;
var animationRunning = false;
function toggleRotation(nazov) {
    if (!animationRunning && isPaused) {
        isPaused = false;
        rotateLeft(paper.select(nazov));
        rotateLeft(paper.select("#engineMotor1"));
    } else {
        isPaused = true;
    }

}

function rotateLeft(element) {
    animationRunning = true;
    var rotacia = "R0,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
    console.log(rotacia);
    element.transform(rotacia);
    if (!isPaused) {
        var rotacia = "R360,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
        element.animate({ transform: rotacia},2000, mina.linear, rotateLeft.bind(null, element));
    } else {
        animationRunning = false;
    }
}

function zmenFarbu(boolOpen){
        idValve = "#ventil";
        colorValve = "red";
        openOff = (boolOpen) ? 0 : 1;
        colorValve = (openOff) ?   "red" : "green";
        paper.select(this.idValve).attr({fill: colorValve});
}
