/**
 * Created by chova_000 on 16-Mar-15.
 */

/**
 * testuje ci setColorValve nastavila farbu*/
var spustiTestValve = function () {
    setColorValve (true);
    setColorValve (1);
    setColorValve (false);
    setColorValve ("true");
    setColorValve ("yellow");
    setColorValve(0);
};

function spustiTestzmenaFarby(){
    TestzmenaFarby(valve, "yellow");
    TestzmenaFarby(nadrz, 'yellow');
}
/**
na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
 */
function spustiTesty() {
    var button = document.getElementById("demo");
    spustiTestValve ();
    spustiTestzmenaFarby();
}




function TestzmenaFarby(a, farba){
    paper.select(a).attr({fill: farba});
    console.log("bola zmenena farba " + farba + " elementu "+ a);
}