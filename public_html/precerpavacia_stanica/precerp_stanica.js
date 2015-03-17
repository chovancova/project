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

/**kvazi objekty v javascripte / inicializovane cez konstruktor prikazom new */
var nadrz = "#hladina2";/*toto je modra hladina nadrze*/
var motor;
var pipe;
var valve = "#ventil"; /*zo svg - css selector - pouzity pri zmene farby*/
//var schema01Paper = Snap("#svg");
var paper;


function initSchema01() {
    paper = Snap("#svgStanica");
    Snap.load("stanica2.svg", function (f) {
         paper.add(f.selectAll("#stanica"));
        console.log("bola nacitana stanica do svgStanica");
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
    var cislo1= 600;
    var cislo2 = 800;///zistit suradnice x, y
    var percento = fillPerc;
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

   var vyska = cislo1 * (fillPerc / 100);
   var py = cislo2 - cislo1 * (fillPerc / 100);

     paper.select(nadrz).animate({
            height: vyska,
            y: cislo2 - py,   //,
            //x: cislo1
        }, rychlostVMs);

    console.log("animacia tanku " + fillPerc);
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






