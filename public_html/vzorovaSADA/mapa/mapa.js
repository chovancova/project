/**
 * Created by chova_000 on 19-Apr-15.
 */
function onPageLoad() {
    init("#mojePlatno", "mapa.svg");
}

var paper, textBA,textNO,textZA, textKE,BC,BL,KI,NI,PV,TA,TC,ZI, cestaBA;
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
            textBA ="#textBratislava";
            textNO =  "#textNamestovo";
            textZA = "#textZilina";
           textKE = "#textKosice";
            cestaBA = "#pathBA"
//ID jednotlivych krajov
             BC = "#SK-BC";
             BL = "#SK-BL";
           KI = "#SK-KI";
             NI = "#SK-NI";
            PV = "#SK-PV";
            TA = "#SK-TA";
            TC = "#SK-TC";
             ZI = "#SK-ZI";
            //upravenie stylu
            zmenaVlastnosti();
       }
    );
};





var zmenaFarbyKraja = function(okr, p_farba){
        paper.selectAll(okr).attr({
        strokeWidth:2,
        stroke:"#000",
        fill: p_farba
    });
  };

var zmenaVlastnostiTextu = function (nazov) {
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

 function zmenaCesty(mesto) {
    paper.select (mesto).attr({
        fill: "none",
        strokeWidth: "4",
        stroke: "#000000",
        strokeMiterLimit: "10",
        strokeDasharray: "9 9",
        strokeDashOffset: "988.01"
    });
}


function zmenaVlastnosti(){
    zmenaVlastnostiTextu(textBA);
     zmenaVlastnostiTextu(textNO);
     zmenaVlastnostiTextu(textZA);
     zmenaVlastnostiTextu(textKE);
     zmenaFarbyKraja(BC, "#ffa");
     zmenaFarbyKraja(BL, "#ffb");
     zmenaFarbyKraja(KI, "#ffc");
     zmenaFarbyKraja(NI, "#ffd");
     zmenaFarbyKraja(PV, "#ffe");
     zmenaFarbyKraja(TA, "#fff");
     zmenaFarbyKraja(TC, "#ff0");
     zmenaFarbyKraja(ZI, "#ff6");
     zmenaCesty(cestaBA);
}



function animovanieCesty(mesto){
    var road =   paper.select(mesto);
    // zistnie dlzky cesty
    var len = road.getTotalLength();
    //animovanie cesty
    road.attr({
        stroke: '#000',
        strokeWidth: 4,
        fill: 'none',
        // Aimovanie cesty
        "stroke-dasharray": "12 6",
        "stroke-dashoffset": len
    }).animate({"stroke-dashoffset": 10}, 2000,mina.easeinout);

    // nakreslenie kruhu, co pojde popri ceste
     bodCesty = paper.circle(32,32,10).attr({
        fill: "#3f4445",
        stroke: "#000",
        strokeWidth: 2
    });
//animacia kruhu popri ceste
    //setTimeout() - executes a function, once, after waiting a specified number of milliseconds
    setTimeout( function() {
        Snap.animate(0, len, function( value ) {
            movePoint = road.getPointAtLength( value );
            bodCesty.attr({ cx: movePoint.x, cy: movePoint.y}); // move along path via cx & cy attributes
        }, 2000,mina.easeinout);
    });

}
