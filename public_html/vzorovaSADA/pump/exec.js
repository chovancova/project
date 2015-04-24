/**
 *nameHTMLidSVG - v pripade, ze je prazdny sa vytvori novy
 * napr. "#svgStanica" si nastavim viewbox / s pozadovanymi rozmermi..
 */
function onPageLoad() {
   PumpingStation("PumpingStationNOVE.svg", "#svgStanica" );
//"#svgStanica"
   }


function updateSchema01(boolVentil, intHladina, rot, boolVentil2) {
    Valve.zmenFarbu1(boolVentil) ;
    Tank.animateComponentTank(intHladina);
    rotujMotor(rot);
    Valve.zmenFarbu2(boolVentil2);
    return console.log("update prebehol... ");
}
//**toto je interface metoda k pumping station scheme
//zapne a vypne
var updateData = {
    "valve": "true",
    "tank": "20",
    "engineRotation": "true",
    "valve2": "false"
};
 //toto je interfesna funkcia k REST API k tank...
function updateSchema(updateData){
    updateSchema01(updateData.valve, updateData.tank, updateData.engineRotation, updateData.valve2);
}