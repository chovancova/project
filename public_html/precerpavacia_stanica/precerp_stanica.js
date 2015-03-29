var nadrz = "#hladina2";/*toto je modra hladina nadrze*/
var valve = "#ventil"; /*zo svg - css selector - pouzity pri zmene farby*/
//var motor1 = "#Layer_3";
var vrtulka2 = "#rect3094"; //horizontalna cepel vrtulky
var vrtulka1 = "#rect3092"; //vertikalna cepel vrtulky

var ventil = "#ventil";
var hladina1 = "#hladina1";
/*//
 var rura1 = "#rura1";
 var voda1 = "#voda1";
 var rura2 = "#rura2";
 var voda2 = "#voda2";
 var rura3 = "#rura3";
 var voda3 = "#voda3";
 var voda4 = "#voda4";
 var rura4 = "#rura4";
 */
//var schema01Paper = Snap("#svg");
var paper = ""; /**meno canvasu, na ktory budem kreslit svg, ale inicializujem v initSchema01*/
/*konstruktor*/
function initSchema01() {
    paper = Snap("#svgStanica");
    Snap.load("stanica2.svg", function (f) {
        paper.add(f.selectAll("#stanica"));
        console.log("bola nacitana stanica do svgStanica");


    });
};

/**
 Funkcia setColorValve nastavi farbu ventila.
 
 @param isOpened Ak je isOpened true, tak farba bude nastavena nacerveno, inak nazeleno.
 @return string činností
 */
function setColorValve(isOpened) {
    colorValve = (!isOpened) ? "green" : "red";
    paper.selectAll(valve).attr({fill: colorValve});
    return  console.log("farba ventila sa zmenila " + colorValve);
}


/**- je otvoreny/zatvoreny ventil
 - stav hladiny v nadrzi v percentach(dajme tomu)
 - je zapnuty/vypnuty motor
 - zaminovat tok vody cez rurky  - funkcia - preteka voda hore, dole (prechodRurami(1, 0);) alebo to bude nastavene logicky - ak bude zapnuty motor, tak preteka horna, ak bude otvoreny ventil tak bude pretekat dolnou.. .
 napr. updateSchema(1, 10, 1, 1, 1); updateSchema(1, 15, 0, 1, 0); alebo update(1, 20, 0,);... */
function updateSchema01(boolVentil, intHladina, boolMotor) {
    /*
     * volam z atributu funkciu 
     * napr valveIn.setOpened(isOpened);
     */
    setColorValve(boolVentil);
    animateComponentTank(intHladina);
    return console.log("update prebehol... ");
}


/**
 *   /* Sposob vypoctu:
 hladina plna
 y="1912.7173"   //600
 x="2507.533" //nemeni sa
 height="16.300568" //+600
 width="796.5788"  //nemeni sa
 
 hladina2 / prazdna
 y="1316.219"
 x="2512.7222"
 height="609.77795"
 width="796.5788"
 id="hladina2"*/

/**
 * ked je prazdny - y 1316
 * ked je plny    - y 1912
 * rozdiel je okolo 600 - tak to to potrebujem prepocitat do percent
 * chcem napriklad 50% co je 0.5*600 a teda sa posuniem na 1316 + to cislo alebo 1912 - to cislo
 *   var pppp = paper.select(nadrz).getBBox ().cy;
 console.log(pppp); //dostanem inicializacne kordinacie  1621.1079750000001
 plna nadrz...
 paper.select(nadrz).getBBox ().height
 600
 paper.select(nadrz).getBBox ().x
 2512.7222
 paper.select(nadrz).getBBox ().y
 1312
 paper.select(nadrz).getBBox ().cx
 2911.0116000000003
 paper.select(nadrz).getBBox ().cy
 1612

 * */
function animateComponentTank(fillPerc) {
   if (fillPerc === undefined || fillPerc < 0) {
        fillPerc = 0;
    }
    var rychlostVMs = 800;
    var perHeight = 600 * (fillPerc / 100); //prepocitana vyska v percentach
    var perY = 1912 - 600 * (fillPerc / 100); //prepocitana suradnica Y odcitanim vysky

    paper.select(nadrz).animate({
        height: perHeight,
        y: perY, //,
        //x: cislo1
    }, rychlostVMs);
    return console.log("animacia tanku " + fillPerc);
    // if (fillPerc < 0) {fillPerc = 0;} else if (fillPerc == NaN) {fillPerc = 0;}
}



/**pozriet si demo - tam je rotujuci text /... http://raphaeljs.com/text-rotation.html
 * http://raphaeljs.com/polar-clock.html
 * z kodu vyuzijem nieco taketo: txt[0].attr({transform: "r" + rot});
 * ale to bude paper.select(vrtulka2).attr({transform: "r"});
 * //transform mi nepojde pretoze ho nemam definovany v svg  ako maticu a ono sa to podotom budedat
 *
 // pracujem s
 // var vrtulka2 = "#rect3094"  //horizontalna cepel vrtulky
 //var vrtulka1 = "#rect3092"; //vertikalna cepel vrtulky*/
/**vrtula 1
 * <rect
 style="fill:#fecb06"
 id="rect3092"
 height="152.992"
 width="17.273001"
 y="1024.35"
 x="2682.397" />
 vrtula 2
 <rect
 style="fill:#ffcc04"
 id="rect3094"
 height="17.273001"
 width="152.992"
 y="1092.209"
 x="2614.5381" />**/

function rotateEngine() {
   var ppheight= 17,
    ppwidth= 152.992,
    ppy=1092.209,
    ppx=2614.5381;
    paper.select(vrtulka2).animate({
        fill: "red",
       // height: ppheight,
       // width: 152.992,
      //  y: 1092.209,
    //    x:2614.5381
        //transform: 50
    }, 800);

    paper.select(vrtulka1).animate({
        fill: "blue",
       // height: ppheight,
       // width: 152.992,
        //  y: 1092.209,
        //    x:2614.5381
    }, 800);
    return console.log("vykonalo sa..");
}

function testRotateEngine(){
 var rot = getRandomCislo();

        paper.select(vrtulka1).attr({transform: "r" + rot});
        paper.select(vrtulka2).attr({transform: "r" + rot});

console.log("rotacia vrtuliek o " + rot);
}


function ComponentValve(a, isOpen) {
}
function ComponetPipe(a) {
}
function ComponetEngine(a, isOn) {
}






