var nadrz = "#hladina2";/*toto je modra hladina nadrze*/
var valve = "#ventil"; /*zo svg - css selector - pouzity pri zmene farby*/

var motor1 = "#Layer_3";
var vrtulka2 = "#rect3094"  //horizontalna cepel vrtulky
var vrtulka1 = "#rect3092"; //vertikalna cepel vrtulky


var ventil = "#ventil";

var hladina1 = "#hladina1";
/*//zatial nefunkcne - hladam v svg ich prave id
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
var paper; /**meno canvasu, na ktory budem kreslit svg*/

function initSchema01() {
    paper = Snap("#svgStanica");
    Snap.load("stanica2.svg", function (f) {
         paper.add(f.selectAll("#stanica"));
        console.log("bola nacitana stanica do svgStanica");
    });
}

/**
 Funkcia setColorValve nastavi farbu ventila.

 @param isOpened Ak je isOpened true, tak farba bude nastavena nacerveno, inak nazeleno.
 @return string činností
 */
function setColorValve(isOpened) {
    colorValve = (!isOpened) ? "green" : "red";
    paper.selectAll (valve).attr ({fill: colorValve});
    return  console.log("farba ventila sa zmenila " + colorValve);
}


/**- je otvoreny/zatvoreny ventil
 - stav hladiny v nadrzi v percentach(dajme tomu)
 - je zapnuty/vypnuty motor
 - zaminovat tok vody cez rurky  - funkcia - preteka voda hore, dole (prechodRurami(1, 0);) alebo to bude nastavene logicky - ak bude zapnuty motor, tak preteka horna, ak bude otvoreny ventil tak bude pretekat dolnou.. .
 napr. updateSchema(1, 10, 1, 1, 1); updateSchema(1, 15, 0, 1, 0); alebo update(1, 20, 0,);... */
function updateSchema01(boolVentil, boolMotor, intHladina) {
    /*
     * volam z atributu funkciu 
     * napr valveIn.setOpened(isOpened);
     */
    alert("hodnota1: " + hodnota1 + "-------hodnota2: " + hodnota2 + " -----hodnota3: " + hodnota3);
}



function animateComponentTank(fillPerc) {
    var rychlostVMs = 800;
    var cislo1= 1316; //600, 800???
    var cislo2 = 1912;///zistit suradnice x, y
    var percento = fillPerc;
   // if (fillPerc < 0) {fillPerc = 0;} else if (fillPerc == NaN) {fillPerc = 0;}
    /* y="1912.7173"
     x="2507.533"
     height="16.300568"
     width="796.5788"

hladina2
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
     * */
    paper.select(nadrz).animate({
        height: 600*(fillPerc/100),
        y: 1912 - 600*(fillPerc/100),   //,
        //x: cislo1
    }, rychlostVMs);


 /** povodne
  *
   var vyska = cislo1 * (fillPerc / 100);
   var py = cislo2 - cislo1 * (fillPerc / 100);

     paper.select(nadrz).animate({
            height: vyska,
            y: cislo2 - py,   //,
            //x: cislo1
        }, rychlostVMs);
*/
    return console.log("animacia tanku " + fillPerc);
}


function ComponentValve(a, isOpen) {
    /*
     * nacitanie valve zo svg, podla id a /
     */

    /*funkcia na nastavenie farby  valve podla bool hodnoty a id ventila*/
    /*
     this.setColorValve = function setColorValve(a, isOpen) {
     var color = (true === isOpened) ? "green" : "red";
     paper.select(a).attr({fill: color});
     //zmena atributu - a je css selector - a menim attribut farby//
     };
     */

}

function ComponetPipe(a) {

}

function ComponetEngine(a, isOn) {


}






