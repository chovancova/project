/**
 * Created by chova_000 on 19-Apr-15.
 */
function onPageLoad() {
    init("#mojePlatno", "belt.svg");
}

var paper, pas, motor1, motor2, motor3, motor4;

 /*
 * Initialization of the map of Slovakia, and selection of id from SVG, change of style some elements*/
var init = function(id, subor) {
    paper = new Snap(id);
  //  paper.attr({ viewBox: "0 0 800 600" });
    Snap.load (subor, function (f) {
            paper.append(f);
  //zabezpecenie responzivneho dizajnu a vzhladu
          paper.attr({ viewBox: "0 0 615 305 ", width: "100%", height: "100%" });
//oznacenie miest
pas = "#cesta"
            motor1 = "#motor1";
            motor2 = "#motor2";
            motor3 = "#motor3";
            motor4 = "#motor4";
            //upravenie stylu 
            paper.select ("#cesta").attr({
                fill: "none",
                strokeWidth: "4",
                stroke: "#000000",
                strokeMiterLimit: "10",
                strokeDasharray: "9 9",
                strokeDashOffset: "988.01"
            });
       }
    );
};

function spusti(){
rotujMotory(true);

}


function rotujMotory(parIsPaused){
    isPaused = parIsPaused;
    toggleRotation();
}


var isPaused = true;
var animationRunning = false;

function toggleRotation() {
    if (!animationRunning && isPaused) {
        isPaused = false;
        rotateLeft(paper.select(motor1));
        rotateLeft(paper.select(motor2));
        rotateLeft(paper.select(motor3));
        rotateLeft(paper.select(motor4));
        animovanieNaPase();
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




function animovanieNaPase(){


    var road =   paper.select(pas);
    var len = road.getTotalLength();
var cas = 2000;
    // nakreslenie kruhu, co pojde popri ceste
    var vyrobok = paper.circle(32,32,10).attr({
        fill: "#3f4445",
        stroke: "#000",
        strokeWidth: 2
    });

    //animovanie cesty
    road.attr({
        stroke: '#000',
        strokeWidth: 4,
        fill: 'none',
        // Aimovanie cesty
        "stroke-dasharray": "12 6",
        "stroke-dashoffset": len
    }).animate({"stroke-dashoffset": 10}, cas,mina.linear());


//animacia kruhu popri ceste
    //setTimeout() - executes a function, once, after waiting a specified number of milliseconds
    setTimeout( function() {
        Snap.animate(0, len, function( value ) {
            movePoint = road.getPointAtLength( value );
            vyrobok.attr({ cx: movePoint.x, cy: movePoint.y}); // move along path via cx & cy attributes
        },cas
            ,
            mina.linear
            );
    });

}
