var perc;
var teplomer = "#empty";
var paper;
/**
 * Zanimuje teplotu teplomera
 * @parm perc je percento naplnenia teplomera*/
function animujTeplomer (hodnota) {
        paper.selectAll (teplomer).animate ({
        height: getVyska(hodnota),
        y: getPY(hodnota),
        x: "342.882"
    }, 800);
}
/**
 * Nastavi vysku stupnice teplomera na danu hodnotu v percentach*/
function nastavTeplomer(hodnota){
    paper.selectAll("#empty").attr({
        height: getVyska(hodnota),
        y: getPY(hodnota),
        x: "342.882"});
}
/**
 * Zmeni hodnotu percenta
 * */
function setValue(hodnota) {
   return this.perc = hodnota;
}

/**
 * Vrati hodntou vysky*/
function getVyska(hodnota){
    var temp = 350 * (hodnota / 100);
    return temp;
}
/**
 * Vrati hodntou py*/
function getPY(hodnota){
    var temp = (hodnota / 100) * 350;
    return temp;
}

function Thermometer( perc ,b_animate) {
   paper = Snap("#svg3");
   perc = perc;

    this.neAnimuj = function neAnimuj(perc){

    };
    this.setValue = function setValue(par1) {
        this.perc = par1;
      
    };
           
      Snap.load("svg/thermometer_o.svg", function(f){
        paper.append(f);
        paper.selectAll("#empty").attr({fill:"#f00"});

          if (!b_animate) {
              neAnimuj (perc);
          } else {
              animateThermometer (perc);
          }
  });


}
function onPageLoad() {
    var tepl = new Thermometer (50, true);
   
    
}



function tlacidlo(){
     var thermometer1 = new Thermometer(10,false);
 //var thermometer2 = new Thermometer(15);
 //var thermometer3 = new Thermometer(20);
 
 function setTempValues(temp1, temp2, temp3) {
 thermometer1.setValue(temp1);
 //thermometer2.setValue(temp2);
 //thermometer3.setValue(temp3);
 }
    
    setTempValues(50, 70, 10);
   
}