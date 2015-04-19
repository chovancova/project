/**
 * Created by chova_000 on 19-Apr-15.
 */
function onPageLoad() {
    init("#mojePlatno", "slovakiaHigh2.svg");

}
var paper;

var init = function(id, subor) {
    paper = new Snap(id);

    Snap.load (subor, function (f) {
            paper.append (f);
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
            fontSize: '16px',
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
    zmenaFarbyKraja(BC, "#00a");
    zmenaFarbyKraja(BL,"#0ff");
    zmenaFarbyKraja(KI, "#0fa");
    zmenaFarbyKraja(NI, "#faa");
    zmenaFarbyKraja(PV, "#f00");
    zmenaFarbyKraja(TA,"#abc");
    zmenaFarbyKraja(TC, "#0f0");
    zmenaFarbyKraja(ZI, "#f0a");

}


