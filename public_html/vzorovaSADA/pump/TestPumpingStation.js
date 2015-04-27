/**
 * Created by chova_000 on 16-Mar-15.
 */
var min = 0;
var max = 100;


var getRandomCislo = function getRandomCislo() {
     var temp = Math.random() * (max - min) + min;
    // console.log("nahodne cislo je: " + temp);
    return temp;
};
/*
var spustiTestzmenaFarby = function () {
    TestzmenaFarby(valve, "yellow");
    TestzmenaFarby(nadrz, 'yellow');
    return console.log("testy na zmenu farby prebehlo ....");
};
*/
/**
 na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
 */
function spustiTesty() {
    spustiTestUpdateSchema();
    spustiTestValve();
   // spustiTestzmenaFarby();
   // spustiTestFunkcnostiPrvkovSVG();
    spustiTestAnimacieTanku();
    testRotateEngine();
   // TestzmenaFarby(ventil, "blue");


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
/*
var TestzmenaFarby = function (a, farba) {
    paper.selectAll(a).attr({fill: farba});
    return console.log("bola zmenena farba na: " + farba + " elementu: " + a);
};


var spustiTestFunkcnostiPrvkovSVG = function () {
   // TestzmenaFarby(nadrz, "pink");    //ok
   // TestzmenaFarby(valve, "pink");    //ok
    // TestzmenaFarby(rura1, "black" ); ///chyba
    //// TestzmenaFarby(rura2, "black" );    //chyba
    //TestzmenaFarby(rura3, "black" );   //chyba
    //TestzmenaFarby(rura4, "black" );    //chyba
    //TestzmenaFarby(voda1, "black" );   //chyba
    //TestzmenaFarby(voda2, "black" );  //chyba
    //TestzmenaFarby(voda3, "black" );  //chyba
    //TestzmenaFarby(voda4, "black" );  //chyba
   // TestzmenaFarby(hladina1, "pink");     //ok
  //  TestzmenaFarby(vrtulka1, "pink");    //ok
  //  TestzmenaFarby(vrtulka2, "pink");
    //TestzmenaFarby(motor1, "white" );  //chyba
   // return console.log("testy funkcnosti pristupu k svg prvkom prebehl...");
};

*/
var spustiTestAnimacieTanku = function () {
    Tank.animateComponentTank(getRandomCislo());
    Tank.animateComponentTank(getRandomCislo());
    Tank. animateComponentTank(getRandomCislo());
    Tank. animateComponentTank(getRandomCislo());
    Tank. animateComponentTank(getRandomCislo());
    return console.log("testy na animaciu nadrze boli spustene..");
};

var spustiTestUpdateSchema = function () {
    updateSchema01(0, getRandomCislo(),7);
    updateSchema01(1, getRandomCislo(),1);
    updateSchema01(0, getRandomCislo(),70);
    updateSchema01(1, getRandomCislo(),4);
    updateSchema01(0, getRandomCislo(),0);

};

/**
 * testuje ci setColorValve nastavila farbu*/
var spustiTestValve = function () {
    Valve.changeIsOpen(true);
    Valve.changeIsOpen(1);
    Valve.changeIsOpen(false);
    Valve.changeIsOpen("true");
    Valve.changeIsOpen("yellow");
    Valve.changeIsOpen(0);
    Valve.changeValve();
    return console.log("testy prebehli.. .");
};

var testRotateEngine = function(){
     Engine.rotate(getRandomCislo()*3.5);

};
var rot = 0;
var testRotaciu =  function(){

   Engine.rotate(20*rot++);
};

function testRotateEngine(){
    var rot = getRandomCislo()*3.5;

    paper.select(vrtulka1).attr({transform: "r" + rot});
    paper.select(vrtulka2).attr({transform: "r" + rot});

    console.log("rotacia vrtuliek o " + rot);
}
