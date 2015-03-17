/**
 Funkcia setColorValve nastavi farbu ventila.

 @param isOpened Ak je isOpened true, tak farba bude nastavena nacerveno, inak nazeleno.
 @return string činností
 */
function setColorValve(isOpened) {
    colorValve = (!isOpened) ? "green" : "red";
    s.selectAll (valve).attr ({fill: colorValve});
    return  console.log("farba ventila sa zmenila " + colorValve);
}

/**kvazi objekty v javascripte / inicializovane cez konstruktor prikazom new */
var nadrz = "#hladina1";/*toto je modra hladina nadrze*/
var motor;
var pipe;
var valve = "#ventil"; /*zo svg - css selector - pouzity pri zmene farby*/
//var schema01Paper = Snap("#svg");
var s;


function initSchema01() {
    s = Snap("#svgStanica");
    Snap.load("stanica2.svg", function (f) {
         s.add(f.selectAll("#stanica"));
    });
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
    var cislo1= 0;
    var cislo2 = 0;///zistit suradnice x, y
    var percento = fillPerc;

    this.vyska = cislo1 * (fillPerc / 100);
    this.py = cislo2 - cislo1 * (fillPerc / 100);

    this.animateTank = function animateTank() {
        s.select(nadrz).animate({
            height: (cislo1 * (fillPerc / 100)),
            y: cislo2 - cislo1 * (fillPerc / 100),
            x: cislo1
        }, rychlostVMs);
    };
}

function ComponentValve(a, isOpen) {
    /*
     * nacitanie valve zo svg, podla id a /
     */

    /*funkcia na nastavenie farby  valve podla bool hodnoty a id ventila*/
    /*
     this.setColorValve = function setColorValve(a, isOpen) {
     var color = (true === isOpened) ? "green" : "red";
     s.select(a).attr({fill: color});
     //zmena atributu - a je css selector - a menim attribut farby//
     };
     */

}

function ComponetPipe(a) {

}

function ComponetEngine(a, isOn) {


}






