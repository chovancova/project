
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
   element.transform('r0,300,750');
   if (!isPaused) {
      element.animate({ transform: 'r360,300,750'},2000, mina.linear, rotateLeft.bind(null, element));
   } else {
      animationRunning = false;
   }
}


