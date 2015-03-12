function ComponentTank(a, fillPercentage){
    
    
}

function ComponentValve(a, isOpen){
    /*
     * nacitanie valve zo svg, podla id a / 
     */
    
    /*funkcia na nastavenie farby  valve podla bool hodnoty a id ventila*/
    
    setColorValve = function(a, isOpen){
        var color = (isOpened === true) ? "green" : "red";
        s.select(a).attr({fill: color});
        /*zmena atributu - a je css selector - a menim attribut farby*/
    };
    
    
}

function ComponetPipe(a){
    
}

function ComponetEngine(a, isOn){
    
    
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


/**kvazi objekty v javascripte / inicializovane cez konstruktor prikazom new */
var nadrz, motor, pipe, valve;

function initSchema01(){
    
    var schema01Paper = new Snap("#svg");
    /*
     * nacitanie jednotlivych komponentov cez funkcie / a cez svg.. 
     * 
     */
}

function updateSchema01(hodnota1, hodnota2, hodnota3){
    /*
     * volam z atributu funkciu 
     * napr valveIn.setOpened(isOpened);
     */
        
}

function onPageLoad(){
    initSchema01();
}


//na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
function toggleDemoStart(){
    var button = document.getElementById("demo");
    /*
     * volanie funkcie updateSchema01 s roznymi parametrami a podmienkami if...
     */
}