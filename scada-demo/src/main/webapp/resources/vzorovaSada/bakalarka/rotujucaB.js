
var paper;
var isPaused = true;
var animationRunning = false;
var element = function(){return paper.select("#engineRotor");};
function onPageLoad() {
    paper = Snap("#rotorDemo");
    Snap.load("rotor.svg", function (f) {
        paper.append(f);
        console.log("rotor svg loaded ...");
    });
}

function toggleRotation() {
    if (!animationRunning && isPaused) {
        isPaused = false;
        rotateLeft(element());
    } else {
        isPaused = true;
    }
}

function rotateLeft(element) {
    var elem = element;
    animationRunning = true;
    var cislo1 = elem.attr("cx");
    var cislo2 = elem.attr("cy");
    var strigove = "r0,"+cislo1+","+cislo2+"";
    var strigove2 = "r360,"+cislo1+","+cislo2+"";
    console.log(strigove);
    element.transform(strigove);
    if (!isPaused) {
        elem.animate({ transform: strigove2},2000, mina.linear, rotateLeft.bind(null, element));
    } else {
        animationRunning = false;
    }
}


/**
 * Created by chova_000 on 23-Apr-15.
 */
