var paper;

function Thermometer(percento) {
    paper = new Snap("#svg3");
    Snap.load("thermometer_o.svg", function (f) {
        paper.append(f);
   });
}

function animujTeplomer(percento){
    var height = paper.select("#plny").getBBox().height;
    var y = paper.select("#plny").getBBox().y;
    var newHeight = height * (percento/100);
    var newY = y + height - newHeight;
    paper.select("#empty").animate({
        y: newY,
        height: newHeight, 
    }, 1000);
}

function updateSchema(percento){
    animujTeplomer(percento);
}

function spustiTesty() {
    //var thermometer1 = new Thermometer(10,false);
    // nastavTeplomer(getRandomCislo());
    animujTeplomer(getRandomCislo());
}

function getRandomCislo() {
    return Math.random() * (100);
}

function onPageLoad() {
    var tepl = new Thermometer(33);
}
