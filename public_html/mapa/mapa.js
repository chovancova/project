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

 function test(){
    zmenaVlastnostiTextu(textBA);
     zmenaVlastnostiTextu(textNO);
     zmenaVlastnostiTextu(textZA);
}

