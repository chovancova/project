
var paper;
var isPaused = true;
var animationRunning = false;

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
        rotateLeft(paper.select("#engineRotor"));
    } else {
        isPaused = true;
    }
}

function rotateLeft(element) {
    animationRunning = true;

    var cislo1 = element.cx ;
    var cislo2 = element.cy;
    var strigove = "r0,"+cislo1+","+cislo2+"";
    var strigove2 = "r360,"+cislo1+","+cislo2+"";
    console.log(strigove);

    element.transform(strigove);
    if (!isPaused) {
        element.animate({ transform: strigove2},2000, mina.linear, rotateLeft.bind(null, element));
    } else {
        animationRunning = false;
    }
}
