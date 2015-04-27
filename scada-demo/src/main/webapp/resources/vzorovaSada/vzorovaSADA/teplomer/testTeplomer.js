/**
 * Created by chova_000 on 17-Mar-15.
 */
function spustiTesty() {
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