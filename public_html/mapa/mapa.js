/**
 * Created by chova_000 on 19-Apr-15.
 */
function onPageLoad() {
    init("#mojePlatno", "slovakiaHigh2.svg");

}
var paper;

var init = function(id, subor) {
    paper = new Snap(id);
  //  paper.attr({ viewBox: "0 0 800 600" });


    Snap.load (subor, function (f) {
            paper.append(f);
            //zabezpecenie responzivneho dizajnu a vzhladu

          paper.attr({ viewBox: "0 0 615 305 ", width: "100%", height: "100%" });

        }
    );
};
var textBA ="#textBratislava";
var textNO =  "#textNamestovo";
var textZA = "#textZilina";
var textKE = "#textKosice";

var BC = "#SK-BC";
var BL = "#SK-BL";
var KI = "#SK-KI";
var NI = "#SK-NI";
var PV = "#SK-PV";
var TA = "#SK-TA";
var TC = "#SK-TC";
var ZI = "#SK-ZI";


var zmenaVlastnostiTextu = function (nazovIDelementu) {
var nazov = nazovIDelementu;
   paper.selectAll(nazov).attr({
            textAnchor: "right",
            fill: "#00b",
            fontSize: '26px',
            fontFamily: "monospace",
            fontStyle: "italic",
            fontVariant: "small-caps",
            fontWeight: 800
        });
    };

var zmenaFarbyKraja = function(okr, p_farba){

    var farba = p_farba;
    paper.selectAll(okr).attr({
        strokeWidth:2,
        stroke:"#000",
        fill: p_farba
    });
    //console.log("chyy");
};

var spustiTesty = function spustTesty(){
    testZmenaVlastnosti();
    testZmenyFarbyKraja();
    testAnimovanieCiest();
}

function testNaGroup(){
    g = Snap().g();
    g.g(paper.select(textBA), paper.select(textKE));
    g.attr({"fill": "blue"});
}

 function testZmenaVlastnosti(){
    zmenaVlastnostiTextu(textBA);
     zmenaVlastnostiTextu(textNO);
     zmenaVlastnostiTextu(textZA);
     zmenaVlastnostiTextu(textKE);
}

function testZmenyFarbyKraja(){
    zmenaFarbyKraja(BC, "#ffa");
    zmenaFarbyKraja(BL, "#ffb");
    zmenaFarbyKraja(KI, "#ffc");
    zmenaFarbyKraja(NI, "#ffd");
    zmenaFarbyKraja(PV, "#ffe");
    zmenaFarbyKraja(TA, "#fff");
    zmenaFarbyKraja(TC, "#ff0");
    zmenaFarbyKraja(ZI, "#ff6");

}

function testGroup(){
    g = Snap().group();
    g.paper.selectAll("#g8");
    g.attr({fill: "blue"});
}


function testAnimovanieCiest(){
    animovanieBodkyPopriPath3("#pathBA");
    animovanieBodkyPopriPath2("#pathNamestovo");
    animovanieBodkyPopriPath1("#pathKE");
}

//http://raphaeljs.com/gear.html ,
// ALE AJ PODLA CODEPEN http://codepen.io/mattsince87/details/snqLy

function animovanieBodkyPopriPath1(mesto){
var myPath =   paper.select(mesto);


    var dlzkaCesty = myPath.getTotalLength();


    myPath.attr({
        id: "squiggle",
        fill: "none",
        strokeWidth: "4",
        stroke: "#0f0f0f",
        strokeMiterLimit: "10",
        strokeDasharray: "9 9",
        strokeDashOffset: "988.01"
    });

myPath.attr({
        stroke: '#000',
        strokeWidth: 4,
        fill: 'none',
        strokeDasharray: "12 6",
        strokeDashoffset: "180"
    }).animate({
    strokeDashoffset: 10},
    10000,
    mina.easeinout);


    var Triangle = paper.polyline("0,30 15,0 30,30");
    Triangle.attr({
        id: "plane",
        fill: "#000"
    });

    var triangleGroup = paper.g( Triangle ); // Group polyline

    setTimeout( function() {
        Snap.animate(0, dlzkaCesty, function( value ) {
            movePoint = myPath.getPointAtLength( value );
            triangleGroup.transform(
                't' + parseInt(movePoint.x - 15) + ','
                + parseInt( movePoint.y - 15) + 'r'
                + (movePoint.alpha - 90));
        }, 10000,mina.easeinout);
    });

}



function animovanieBodkyPopriPath2(mesto){
      // SVG B - "Squiggly" Path
    var myPath =   paper.select(mesto);


    var lenB = myPath.getTotalLength();


    myPath.attr({
        id: "squiggle",
        fill: "none",
        strokeWidth: "4",
        stroke: "#f0f0f0",
        strokeMiterLimit: "10",
        strokeDasharray: "9 9",
        strokeDashOffset: "988.01"
    });

    // SVG B - Draw Path
    var lenB = myPath.getTotalLength();

    // SVG B - Animate Path
    myPath.attr({
        stroke: '#000',
        strokeWidth: 4,
        fill: 'none',
        // Draw Path
        strokeDasharray: lenB + " " + lenB,
        strokeDashoffset: lenB
    }).animate({"stroke-dashoffset": 10}, 2500,mina.easeinout);

    // SVG B - Circle
    var CircleB = paper.circle(16,16,8);
    CircleB.attr({
        fill: "#3f4445",
        stroke: "#000",
        strokeWidth: 2
    });

    setTimeout( function() {
        Snap.animate(0, lenB, function( value ) {
            movePoint = myPath.getPointAtLength( value );
            CircleB.attr({ cx: movePoint.x, cy: movePoint.y }); // move along path via cx & cy attributes
        }, 10000,mina.easeinout);
    });

}


function animovanieBodkyPopriPath3(mesto){
    var myPath =   paper.select(mesto);

    myPath.attr({
        id: "squiggle",
        fill: "none",
        strokeWidth: "4",
        stroke: "#000000",
        strokeMiterLimit: "10",
        strokeDasharray: "9 9",
        strokeDashOffset: "988.01"
    });

    // SVG A - Draw Path
    var len = myPath.getTotalLength();

    // SVG1 - Animate Path
    myPath.attr({
        stroke: '#000',
        strokeWidth: 4,
        fill: 'none',
        // Animate Path
        "stroke-dasharray": "12 6",
        "stroke-dashoffset": len
    }).animate({"stroke-dashoffset": 10}, 10000,mina.easeinout);

    // SVG A - Circle
    var CircleA = paper.circle(32,32,16);
    CircleA.attr({
        fill: "#3f4445",
        stroke: "#000",
        strokeWidth: 2
    });

    setTimeout( function() {
        Snap.animate(0, len, function( value ) {
            movePoint = myPath.getPointAtLength( value );
            CircleA.attr({ cx: movePoint.x, cy: movePoint.y }); // move along path via cx & cy attributes
        }, 10000,mina.easeinout);
    });

}


