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

function nazovSpustitelnePotom(bool){
  var   isPaused = bool;
    var animationRunning = false;

    if (!animationRunning && isPaused) {
        isPaused = false;
        nazovFunkcie(paper.select(idElementu));
    } else {
        isPaused = true;
    }
}


function nazovFunkcie(element) {
    animationRunning = true;
    if (!isPaused) {

        element.animate({},2000, mina.linear, nazovFunkcie.bind(null, element));
    } else {
        animationRunning = false;
    }
}


function nazovFunkcieTransformacie(element) {
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
