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

    this.setColorValve = function setColorValve(a, s, isOpen) {
        var color = (true === isOpened) ? "green" : "red";
        s.select(a).attr({fill: color});
        /*zmena atributu - a je css selector - a menim attribut farby*/
    };


}

function ComponetPipe(a) {

}

function ComponetEngine(a, isOn) {


}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


/**kvazi objekty v javascripte / inicializovane cez konstruktor prikazom new */
var nadrz, motor, pipe, valve;
//var schema01Paper = Snap("#svg");
var s;
var setColorValve = function setColorValve(a, isOpened) {
    var color = (true === isOpened) ? "green" : "red";
    s.selectAll(a).attr({fill: color});
};
function initSchema01() {
    s = Snap("#svgStanica");
    Snap.load("stanica2.svg", function (f) {

         s.add(f.selectAll("#stanica"));
        setColorValve ( '#ventil', true);
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
    initSchema01();
}

function onPageLoad() {
    initSchema01();
}

//na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
function toggleDemoStart() {
    var button = document.getElementById("demo");
    onPageLoad();
    /*
     * volanie funkcie updateSchema01 s roznymi parametrami a podmienkami if...
     */

    /*kon3truktorom si vytvorim napr. nadrz s danymi hodnotoami a nastavim si hodnoty update schemy*/

}

var eZmenafarby;
eZmenafarby = function (s, a, isOpened) {
    /**
     funkcia nastavi farbu valve a podla bool hodnoty
     prvy parameter je id ventila
     */
    var setColorValve = function (a, isOpened) {
        var color = (true === isOpened) ? "green" : "red";
        s.selectAll (a).attr ({fill: color});
    };

    //*/ overenie funkcnosti
    setColorValve ("#ventil", true);
    //  setColorValve("#ventil", false);
    //setColorValve("#ventil", "true");
    //setColorValve("#ventil", true);
    //setColorValve("#ventil", "yellow");
    //*/
    return setColorValve;
};