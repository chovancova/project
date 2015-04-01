/**
 *nameHTMLidSVG - v pripade, ze je prazdny sa vytvori novy
 * napr. "#svgStanica" si nastavim viewbox / s pozadovanymi rozmermi..
 */
function onPageLoad() {
   PumpingStation("PumpingStation.svg", "#svgStanica" );
//"#svgStanica"
   }


function updateSchema01(boolVentil, intHladina, rot) {
    Valve.changeIsOpen(boolVentil);
    Tank.animateComponentTank(intHladina);
    Engine.rotate(++rot*10);
    return console.log("update prebehol... ");
}
