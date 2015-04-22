/**
 *nameHTMLidSVG - v pripade, ze je prazdny sa vytvori novy
 * napr. "#svgStanica" si nastavim viewbox / s pozadovanymi rozmermi..
 */
function onPageLoad() {
   PumpingStation("PumpingStation2.svg", "#svgStanica" );
//"#svgStanica"
   }


function updateSchema01(boolVentil, intHladina, rot) {
    Valve.changeIsOpen(boolVentil);
    Tank.animateComponentTank(intHladina);
    Engine.rotate(++rot*10);
    return console.log("update prebehol... ");
}
//**toto je interface metoda k pumping station scheme
//zapne a vypne
var updateData = {
    "valve": "true",
    "tank": "20",
    "engineRotation": "true"
};
 //toto je interfesna funkcia k REST API k tank...
function updateSchema(updateData){
    updateSchema01(updateData.valve, updateData.tank, updateData.engine);
}