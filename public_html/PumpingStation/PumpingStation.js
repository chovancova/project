var Tank = {
    idTank: "#hladina",
    tank: function(){
       return  paper.select(this.idTank)},

    animateComponentTank: function(fillPerc) {
        if (fillPerc === undefined || fillPerc < 0) {
            fillPerc = 0;
        }
        var speed = 800;
        var perHeight = 600 * (fillPerc / 100);
        var perY = 1912 - 600 * (fillPerc / 100);

        tank().animate({
            height: perHeight,
            y: perY
        }, speed);
        return console.log("animacia tanku " + fillPerc);
    },
    changeColor: function (color) {
        paper.select(this.idTank).attr({fill: color});
        return console.log("bola zmenena farba na: " + color + " elementu: " + this.idNadrz);
    }
};


var Valve = {
    idValve: "#ventil",
    colorValve: "red",
    changeIsOpen: function (isOpened) {
        var colorValve = (isOpened) ? "green" : "red";
        paper.selectAll(valve).attr({fill: colorValve});
        return  console.log("farba ventila sa zmenila " + colorValve);
        },
    setColorValve: function (colorValve) {
        this.colorValve = colorValve;
        paper.selectAll(valve).attr({fill: colorValve});
        return  console.log("farba ventila sa zmenila " + colorValve);
    }
};

var Engine = {
    isRotate: false,

    propellor1: function(){
        return paper.select("#rect3094")},

    propellor2: function(){
        return paper.select("#rect3092")},

    propellor: function(){
        return paper.group(this.propellor1, this.propellor2);},

    TestRotateEngine: function(){
    var rot = getRandomCislo()*3.5;
    this.propellor1.attr({transform: "r" + rot});
   this.propellor2.attr({transform: "r" + rot});
    console.log("rotacia vrtuliek o " + rot);
},
    testNaGroup : function testNaGroup(){
        propellor.attr({
            fill: "blue"
        });
    }
};


var valve = "#ventil";

var ventil = "#ventil";
var nadrz = "#hladina2";

var paper = "";
function initSchema01() {
    paper = Snap("#svgStanica");
    Snap.load("PumpingStation.svg", function (f) {
        paper.add(f.selectAll("#stanica"));
        console.log("bola nacitana stanica do svgStanica");
    });
}

function setColorValve(isOpened) {
    var colorValve = (!isOpened) ? "green" : "red";
    paper.selectAll(valve).attr({fill: colorValve});
    return  console.log("farba ventila sa zmenila " + colorValve);
}

function updateSchema01(boolVentil, intHladina, boolMotor) {
    setColorValve(boolVentil);
    animateComponentTank(intHladina);
    return console.log("update prebehol... ");
}

function animateComponentTank(fillPerc) {
   if (fillPerc === undefined || fillPerc < 0) {
        fillPerc = 0;
    }
    var rychlostVMs = 800;
    var perHeight = 600 * (fillPerc / 100);
    var perY = 1912 - 600 * (fillPerc / 100);

    paper.select(nadrz).animate({
        height: perHeight,
        y: perY
    }, rychlostVMs);
    return console.log("animacia tanku " + fillPerc);
 }

function testRotateEngine(){
 var rot = getRandomCislo()*3.5;

        paper.select(vrtulka1).attr({transform: "r" + rot});
        paper.select(vrtulka2).attr({transform: "r" + rot});

console.log("rotacia vrtuliek o " + rot);
}
