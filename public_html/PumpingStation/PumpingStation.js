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
        this.tank().animate({
            height: perHeight,
            y: perY
        }, speed);
        return console.log("animacia tanku " + fillPerc);
    },
    changeColor: function (color) {
       this.tank().attr({fill: color});
        return console.log("bola zmenena farba na: " + color + " elementu: " + this.idNadrz);
    }
};


var Valve = {
    idValve: "#ventil",
    valve: function (){ return paper.select(this.idValve);},
    colorValve: "red",
    changeIsOpen: function (isOpened) {
        isOpened = (isOpened) ? 0 : 1;
        this.colorValve = (isOpened) ?   "red" : "green";
        this.setColorValve(this.colorValve);
        return  console.log("farba ventila sa zmenila " + this.colorValve);
        },
    setColorValve: function (colorV) {
        this.colorValve = colorV;
       this.valve().attr({fill: this.colorValve});
        return  console.log("farba ventila sa zmenila " + this.colorValve);
    },
    openOff: true,
    changeValve: function(){
        this.openOff = (this.openOff) ? 0 : 1;
        this.changeIsOpen(this.openOff);
        return "ooook";
    }
};

var Engine = {
    isRotate: false,
    rot: 0,

        propellor1: function(){
        return paper.select("#rect3094")},

    propellor2: function(){
        return paper.select("#rect3092")},

    rotate: function(rot){
        this.propellor1().attr({transform: "r" + rot});
        this.propellor2().attr({transform: "r" + rot});
        console.log("rotacia vrtuliek o " + rot);
        },

    setColor : function (color){
         this.propellor1().attr({
            fill: color
        });
        this.propellor2().attr({
            fill: color
        });
        return "ok";
    },
  };


var paper = "";

var PumpingStation = function(nazovFileSVG, nameHTMLidSVG) {
    paper = Snap(nameHTMLidSVG);
    Snap.load(nazovFileSVG, function (f) {
       paper.append(f);
       console.log("bola nacitana stanica do svgStanica");
    });
}



function updateSchema01(boolVentil, intHladina, rot) {
    Valve.changeIsOpen(boolVentil);
    Tank.animateComponentTank(intHladina);
    Engine.rotate(++rot*10);
    return console.log("update prebehol... ");
}


