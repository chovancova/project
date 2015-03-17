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
   return console.log("testy prebehli.. .");
};

function spustiTestzmenaFarby(){
    TestzmenaFarby(valve, "yellow");
    TestzmenaFarby(nadrz, 'yellow');
}
/**
na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
 */
function spustiTesty() {
    spustiTestValve ();
    spustiTestzmenaFarby();
    spustiTestFunkcnostiPrvkovSVG();
    return console.log("testy boli spustene");
}

function TestzmenaFarby(a, farba){
    paper.select(a).attr({fill: farba});
    return console.log("bola zmenena farba na: " + farba + " elementu: "+ a);
}


function spustiTestFunkcnostiPrvkovSVG(){
    TestzmenaFarby(nadrz, "pink" );    //ok
    TestzmenaFarby(valve, "pink" );    //ok
   // TestzmenaFarby(rura1, "black" ); ///chyba
   //// TestzmenaFarby(rura2, "black" );    //chyba
    //TestzmenaFarby(rura3, "black" );   //chyba
    //TestzmenaFarby(rura4, "black" );    //chyba
    //TestzmenaFarby(voda1, "black" );   //chyba
    //TestzmenaFarby(voda2, "black" );  //chyba
    //TestzmenaFarby(voda3, "black" );  //chyba
    //TestzmenaFarby(voda4, "black" );  //chyba
    TestzmenaFarby(hladina1, "pink" );     //ok
    TestzmenaFarby(vrtulky, "white" );    //chyba
    //TestzmenaFarby(motor1, "black" );  //chyba
}