//var paper = "";

var PumpingStation = function(nazovFileSVG, idDOMsvgElement) {
    paper = Snap(idDOMsvgElement);
    Snap.load(nazovFileSVG, function (f) {
        paper.append(f);
        console.log("bola nacitana stanica do svgStanica");
    });
   /* Snap.load("rotor.svg", function (f) {
        paper.append(f);
        paper.select("#engineRotor").attr({height: "100", wight: "100"});
        console.log("bola nacitana stanica do svgStanica");
    });*/
};

var Tank = {
    idTank: "#hladina",
    tank: function(){
       return  paper.select(this.idTank);},

    animateComponentTank: function(fillPerc) {
        if (fillPerc === undefined || fillPerc < 0) {
            fillPerc = 0;
        }
        var perHeight = 600 * (fillPerc / 100);
        var perY = 1912 - perHeight;
        this.tank().animate({
            height: perHeight,
            y: perY
        }, 800);
        return console.log("animacia tanku " + fillPerc);
    }
};


var Valve = {
    idValve: "#ventil",
    idValve2:"#ventil2",
    valve: function (){ return paper.select(this.idValve);},
    valve2: function (){ return paper.select(this.idValve2);},
    colorValve: "red",
    colorValve2: "red",
    changeIsOpen: function (isOpened) {
        isOpened = (isOpened) ? 0 : 1;
        this.colorValve = (isOpened) ?   "red" : "green";
        this.valve().attr({fill: this.colorValve});
        return  console.log("farba ventila sa zmenila " + this.colorValve);
        },
    setColorValve: function (colorV) {
        this.colorValve = colorV;
       this.valve().attr({fill: this.colorValve});
        return  console.log("farba ventila sa zmenila " + this.colorValve);
    },
    openOff: true,
    openOff2: true,
    changeValve: function(){
        this.openOff = (this.openOff) ? 0 : 1;
        this.changeIsOpen(this.openOff);
        return "ooook";
    },
    zmenFarbu1: function(boolOpen){
        this.openOff = (this.openOff) ? 0 : 1;
        this.colorValve = (this.openOff) ?   "red" : "green";
        this.valve().attr({fill: this.colorValve});

    },
    zmenFarbu2: function(boolOpen){
        this.openOff2 = (this.openOff2) ? 0 : 1;
        this.colorValve2 = (this.openOff2) ?   "red" : "green";
        this.valve2().attr({fill: this.colorValve2});
    }
};

var Engine = {
    isRotate: false,
    rot: 280,
     isPaused : true,
 animationRunning : false,
        propellor1: function(){
        return paper.select("#rect3094");},

    propellor2: function(){
        return paper.select("#rect3092");},

    rotate: function(rot){
      //  this.propellor1().animate(this.propellor1().attr{"transform": "r" + rot},10000 );
       // this.propellor2().animate({transform: "r" + rot}, 1000);
       // this.propellor1().animate({transform: "r" + rot},1000);
       // paper.select("#rect3092").animate({transform: "r" + rot},1000);
        this.rot = rot;
         stringove = "r" + this.rot;
      //  paper.select("#stanica").transform(stringove);
        this.propellor1().animate({ transform: stringove},2000);
        console.log("rotacia vrtuliek o " + rot);
        },
    animujRotaciu: function(){

        var stringove = "r" + this.rot;
        paper.select("#stanica").transform(stringove);
        paper.select("#stanica").animate({ transform: stringove},2000);
    },

    setColor : function (color){
         this.propellor1().attr({
            fill: color
        });
        this.propellor2().attr({
            fill: color
        });
        return "ok";
    }


  };

function rotujMotor(parIsPaused){
    isPaused = parIsPaused;
    toggleRotation();
}


var isPaused = true;
var animationRunning = false;

function toggleRotation() {
    if (!animationRunning && isPaused) {
        isPaused = false;
        rotateLeft(paper.select("#engineMotor"));
    } else {
        isPaused = true;
    }

}

function rotateLeft(element) {
    animationRunning = true;
    var rotacia = "R0,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
    console.log(rotacia);
    element.transform(rotacia);
    if (!isPaused) {
        var rotacia = "R360,"+ element.getBBox().cx + ","+ element.getBBox().cy ;
        element.animate({ transform: rotacia},2000, mina.linear, rotateLeft.bind(null, element));
    } else {
        animationRunning = false;
    }
}


