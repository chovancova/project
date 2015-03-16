function ComponentTank(a, s, fillPerc, cislo1, cislo2, rychlostVMs) {
    /*
     * nacitanie valve zo svg, podla id a / 
     * zistenie cisla1, cisla2 zo svg
     */
    this.rychlostVMs = 800;
    this.fillPerc = fillPerc;


    this.vyska = cislo1 * (this.fillPerc / 100);
    var vyska;
    this.py = cislo2 - vyska;

    this.animateTank = function animateTank() {
        s.select(a).animate({height: vyska, y: py, x: cislo1}, rychlostVMs);
    };

    this.nastavNadrzNaPozadovanePercento = function nastavNadrz(percento) {
        this.vyska = cislo1 * (percento / 100);
    };

    this.setValue = function setValue(hodnota) {
        if (!(0 <= hodnota && 100 >= hodnota) || hodnota === undefined || null === hodnota) {this.fillPerc = 0;}
        else {
            if (hodnota < 100) {
                this.fillPerc = hodnota;
            } else {
                this.fillPerc = 100;
            }
        }
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

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


/**kvazi objekty v javascripte / inicializovane cez konstruktor prikazom new */
var nadrz;
var motor;
var pipe;
var valve = "#ventil"; /*zo svg - css selector - pouzity pri zmene farby*/
//var schema01Paper = Snap("#svg");
var s;
var colorValve = "yellow";
/**
 nastavi farbu valve a podla bool hodnoty
 prvy parameter je id ventila zo svg - css selektor
 druhy je hodnota 0, alebo 1 podla toho ci ma byt cerveny alebo zeleny
 ////mozne je tuto metodu prerobit, aby tam nebol id zo svg
 //ako aj to - aby bola nastavitelna farba - podla toho aku zadam
 //alebo aby to len fungovalo ako true/false - pripadne, ze tuto funkciu bude volat dalsia...
 // overenie funkcnosti
 //setColorValve (valve, true);
 // setColorValve(valve, false);
 //setColorValve(valve, "true");
 //setColorValve(valve, true);
 //setColorValve(valve, 0);
 //setColorValve(valve, 1);
 //setColorValve(valve, "yellow"); //nahlasi chybu
 */
function setColorValve(isOpened) {
    colorValve = (!isOpened) ? "green" : "red";
     s.selectAll (valve).attr ({fill: colorValve});
    return "farba ventila sa zmenila ";
}


function initSchema01() {
    s = Snap("#svgStanica");
    Snap.load("stanica2.svg", function (f) {

         s.add(f.selectAll("#stanica"));

    });

    /*
     * nacitanie jednotlivych komponentov cez funkcie / a cez svg.. 
     * 
     */
}

function updateSchema01(hodnota1, hodnota2, hodnota3) {
    /*
     * volam z atributu funkciu 
     * napr valveIn.setOpened(isOpened);
     */
    alert("hodnota1: " + hodnota1 + "-------hodnota2: " + hodnota2 + " -----hodnota3: " + hodnota3);

}

function onPageLoad() {
    initSchema01();
}

//na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
function toggleDemoStart() {
    var button = document.getElementById("demo");
    // overenie funkcnosti
    //setColorValve (valve, true);
    // setColorValve(valve, false);
    //setColorValve(valve, "true");
    //setColorValve(valve, true);
    //setColorValve(valve, 0); //hodi cervenu farbu
    //setColorValve(valve, 1);//hodi zelenu farbu
    //setColorValve(valve, "yellow"); //da na zeleno??? / vyhodnoti to ako chybu(potom uz nemeni farby) - da sa to riesit v if ===
    //setColorValve (true);
     setColorValve( false);
    //setColorValve( "true");
    //setColorValve(true);
    //setColorValve(0); //hodi cervenu farbu
    //setColorValve( 1);//hodi zelenu farbu
    //setColorValve( "yellow"); //da na zeleno??? / vyhodnoti to ako chybu(potom uz nemeni farby) - da sa to riesit v if ===
   }

