var teplomer = "#empty";/**toto je css selektor z svg - tuto cast budem animovat z neho*/
var paper;
/**
 * Zanimuje teplotu teplomera
 * @parm perc je percento naplnenia teplomera
 * */
function animujTeplomer (hodnota) {
        paper.selectAll (teplomer).animate ({
        height: getVyska(hodnota),
        y: getPY(hodnota),
        x: "342.882"
    }, 800);
   return console.log("zanimovane na " + hodnota + "%");
}
/**
 * Nastavi vysku stupnice teplomera na danu hodnotu v percentach*/
function nastavTeplomer(hodnota){
    paper.selectAll(teplomer).attr({
        height: getVyska(hodnota),
        y: getPY(hodnota),
        x: "342.882"});
   return console.log("nastavene na " + hodnota + "%");
}

/**
 * Vrati hodntou vysky*/
function getVyska(hodnota){
    if (hodnota < 0) {hodnota = 0;} else if (hodnota == NaN) {hodnota = 0;}
    var temp = 350 * (hodnota / 100);
    return temp;
}
/**
 * Vrati hodntou py*/
function getPY(hodnota){
    if(hodnota < 0) hodnota = 0;

    var temp = 557 - (hodnota / 100) * 350;
    return temp;
}

/**
 * Inicializuje teplomer a vykresli sa do elementu html - #svg3
 * @param perc je percento na ktore sa nastavi teplomer
 * @param b_animate je boolean hodnota, ci sa nastavi, alebo zanimuje, ale moze sa vynechat
 *
 * Poznamka:
 * ak vo function Thermometer(perc) {
   namiesto paper = Snap("#svg3"); zadam paper = Snap(750, 500);
   tak sa kazdym volanim Thermometer(cislo);
   vytvori novy SVG teplomer s danou hodnotou - ale vytvoria sa za sebou
   a este to - ked volam potom funkciu animujTeplomer, tak sa potom
   vo vsetkych teplomeroch vzniknutych pomocou thermometer()
   zanimuje na danu hodnotu jednotne.
   mozne riesenie - pouzivat iny paper, a cez to ovladat, alebo cez html
   vytvorit za kazdym nove id svg a podla neho rozpoznavat o aky element ide... .
   mozno // var tepl2 = new Thermometer(77);
    //tepl.animujTeplomer(77);
    //tepl2.animujTeplomer(10);
 *
 * */
function Thermometer( perc ,b_animate) {
   paper = new Snap("#svg3"); /*ak by tu nebolo #svg3, tak sa to zakazdym vytvori novy.. */
    // paper= Snap(750, 500);
        Snap.load("svg/thermometer_o.svg", function(f){
        paper.append(f);
        //paper.selectAll("#empty").attr({fill:"#f00"});

            nastavTeplomer(perc);

  });
}
/**
 * funkcia vytvori SVG komponet teplomer pri nacitany html*/
function onPageLoad() {
    var tepl = new Thermometer (33);
}

function spustiTesty(){
     //var thermometer1 = new Thermometer(10,false);
   // nastavTeplomer(getRandomCislo());
    animujTeplomer(getRandomCislo());

}

function getRandomCislo() {
    var min = -22;
    var max = 110;
    var temp = Math.random() * (max - min) + min;
   // console.log("nahodne cislo je: " + temp);
    return temp;
}