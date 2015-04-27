var paper, idValve, idValve2, idNadrz,idHladina, idEngineMotor;
function onPageLoad() {
    PumpingStation("PumpingStation.svg", "#svgStanica" );
}


function PumpingStation(nazovFileSVG, idDOMsvgElement) {
    paper = Snap(idDOMsvgElement);
    Snap.load(nazovFileSVG, function (f) {
        paper.append(f);
        idHladina = "#hladina";
        idNadrz = "#nadrz";
        idValve = "#ventil";
        idValve2 = "#ventil2";
        idEngineMotor = "#engineMotor";
    });
 }

function animateTank(percento){
    var height = paper.select(idNadrz).getBBox().height;
    var y = paper.select(idNadrz).getBBox().y;
    var newHeight = height * (percento/100) ;
    var newY = y + height - newHeight;
    paper.select(idHladina).animate({
        y: newY,
        height: newHeight
    }, 1000);
}

function openValve1(isOpen){
    paper.select(idValve).attr({fill: ((isOpen === "true") ?   "green" : "red")});
}

function openValve2(isOpen2){
    paper.select(idValve2).attr({fill: ((isOpen2 === "true") ?   "green" : "red")});
}

var isPaused = true;
var animationRunning = false;
function rotateEngine(isRotating){
    isPaused = isRotating;

    function toggleRotation() {
        if (!animationRunning && isPaused) {
            isPaused = false;
            rotateLeft(paper.select(idEngineMotor));
        } else {
            isPaused = true;
        }
    }
    toggleRotation();

    function rotateLeft(element) {
        animationRunning = true;
        var rotacia = "R0,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
        element.transform(rotacia);
        if (!(isPaused)) {
            var rotacia = "R360,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
            element.animate({ transform: rotacia},2000, mina.linear, rotateLeft.bind(null, element));
        } else {
            animationRunning = false;
        }
    }
}

function updateSchema01(isOpenValve1, intPercent, isRotating, isOpenValve2) {
    openValve1(isOpenValve1) ;
    animateTank(intPercent);
    rotateEngine(isRotating);
    openValve2(isOpenValve2);
    return console.log("update prebehol... ");
}
//**toto je interface metoda k pumping station scheme
//zapne a vypne
var updateData = {
    "valve1": "true",
    "tank": "20",
    "engineRotation": "true",
    "valve2": "true"
};





//toto je interfesna funkcia k REST API k tank...
function updateSchema(updateData){
    updateSchema01(updateData.valve1, updateData.tank, updateData.engineRotation, updateData.valve2);
}




var min = 0;
var max = 100;
var getRandomCislo = function getRandomCislo() {
    var temp = Math.random() * (max - min) + min;
    // console.log("nahodne cislo je: " + temp);
    return temp;
};