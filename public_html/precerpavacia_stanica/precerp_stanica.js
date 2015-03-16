function ComponentTank(a, s, fillPerc, cislo1, cislo2, rychlostVMs) {
    /*
     * nacitanie valve zo svg, podla id a / 
     * zistenie cisla1, cisla2 zo svg
     */
    this.rychlostVMs = 800;
    this.fillPerc = fillPerc;


    this.vyska = cislo1 * (this.fillPerc / 100);
    this.py = cislo2 - vyska;

    this.animateTank = function animateTank() {
        s.select(a).animate({height: vyska, y: py, x: cislo1}, rychlostVMs);
    };

    this.nastavNadrzNaPozadovanePercento = function nastavNadrz(percento) {
        this.vyska = cislo1 * (percento / 100);
    };

    this.setValue = function setValue(hodnota) {
        if (!(hodnota >= 0 && hodnota <= 100) || hodnota === undefined || hodnota === null)
            this.fillPerc = 0;
        else if (hodnota >= 100)
            this.fillPerc = 100;
        else
            this.fillPerc = hodnota;
    }

}

function ComponentValve(a, isOpen) {
    /*
     * nacitanie valve zo svg, podla id a / 
     */

    /*funkcia na nastavenie farby  valve podla bool hodnoty a id ventila*/

    this.setColorValve = function setColorValve(a, s, isOpen) {
        var color = (isOpened === true) ? "green" : "red";
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
function initSchema01() {
    var s = Snap(750, 600);
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