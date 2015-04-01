/**
 * Created by chova_000 on 16-Mar-15.
 */
var min = -22;
var max = 110;


var getRandomCislo = function getRandomCislo() {
     var temp = Math.random() * (max - min) + min;
    // console.log("nahodne cislo je: " + temp);
    return temp;
};

var spustiTestzmenaFarby = function () {
    TestzmenaFarby(valve, "yellow");
    TestzmenaFarby(nadrz, 'yellow');
    return console.log("testy na zmenu farby prebehlo ....");
};
/**
 na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
 */
function spustiTesty() {
    spustiTestValve();
    spustiTestzmenaFarby();
    spustiTestFunkcnostiPrvkovSVG();
    spustiTestAnimacieTanku();
    testRotateEngine();
  //  TestzmenaFarby(nadrz, "blue");
    spustiTestUpdateSchema();

    return console.log("testy boli spustene");
}
/**
var vrtulkyhh;
var testNaGroup = function testNaGroup(){
    vrtulkyhh = paper.group(paper.select(vrtulka1),paper.select(vrtulka2));
    vrtulkyhh.attr({
        fill: "blue"
    });
}
*/

var TestzmenaFarby = function (a, farba) {
    paper.select(a).attr({fill: farba});
    return console.log("bola zmenena farba na: " + farba + " elementu: " + a);
};


var spustiTestFunkcnostiPrvkovSVG = function () {
    TestzmenaFarby(nadrz, "pink");    //ok
    TestzmenaFarby(valve, "pink");    //ok
    // TestzmenaFarby(rura1, "black" ); ///chyba
    //// TestzmenaFarby(rura2, "black" );    //chyba
    //TestzmenaFarby(rura3, "black" );   //chyba
    //TestzmenaFarby(rura4, "black" );    //chyba
    //TestzmenaFarby(voda1, "black" );   //chyba
    //TestzmenaFarby(voda2, "black" );  //chyba
    //TestzmenaFarby(voda3, "black" );  //chyba
    //TestzmenaFarby(voda4, "black" );  //chyba
    TestzmenaFarby(hladina1, "pink");     //ok
    TestzmenaFarby(vrtulka1, "pink");    //ok
    TestzmenaFarby(vrtulka2, "pink");
    //TestzmenaFarby(motor1, "white" );  //chyba
    return console.log("testy funkcnosti pristupu k svg prvkom prebehl...");
};

var spustiTestAnimacieTanku = function () {
    animateComponentTank(getRandomCislo());
    animateComponentTank(getRandomCislo());
    animateComponentTank(getRandomCislo());
    animateComponentTank(getRandomCislo());
    animateComponentTank(getRandomCislo());
    return console.log("testy na animaciu nadrze boli spustene..");
};

var spustiTestUpdateSchema = function () {
    updateSchema01(0, getRandomCislo());
    updateSchema01(1, getRandomCislo());
    updateSchema01(0, getRandomCislo());
    updateSchema01(1, getRandomCislo());
};

/**
 * testuje ci setColorValve nastavila farbu*/
var spustiTestValve = function () {
    setColorValve(true);
    setColorValve(1);
    setColorValve(false);
    setColorValve("true");
    setColorValve("yellow");
    setColorValve(0);
    return console.log("testy prebehli.. .");
};