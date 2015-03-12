function ComponentTank(a, s, fillPerc, cislo1, cislo2, rychlostVMs) {
    /*
     * nacitanie valve zo svg, podla id a / 
     * zistenie cisla1, cisla2 zo svg
     */
    this.rychlostVMs = 800;
    this.fillPerc = fillPerc;
    if(!(fillPerc >= 0 && fillPerc <= 100) || fillPerc === undefined || fillPerc === null)
        fillPerc = 0;
    
    this.vyska = cislo1 * (this.fillPerc / 100);
    this.py = cislo2 - vyska;
    
    this.animateTank = function animateTank() {
        s.select(a).animate({height: vyska, y: py, x: cislo1}, rychlostVMs);
    };

    this.nastavNadrzNaPozadovanePercento = function nastavNadrz(percento) {
        this.vyska = cislo1 * (percento / 100);
    };

    this.setValue = function setValue(hodnota){
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

function initSchema01() {

    var schema01Paper = new Snap("#svg");
    Snap.load("stanica.svg", function(f){
        schema01Paper.append(f);
        
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
    /*
     * volanie funkcie updateSchema01 s roznymi parametrami a podmienkami if...
     */
    
    /*kon3truktorom si vytvorim napr. nadrz s danymi hodnotoami a nastavim si hodnoty update schemy*/
    
}