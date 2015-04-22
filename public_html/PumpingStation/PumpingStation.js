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
    valve: function (){ return paper.select(this.idValve);},
    colorValve: "red",
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
    changeValve: function(){
        this.openOff = (this.openOff) ? 0 : 1;
        this.changeIsOpen(this.openOff);
        return "ooook";
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





/*
var isPaused = false;
var animationRunning = false;
var rot =0;
function toggleRotation1() {
    if (!animationRunning && isPaused) {
        isPaused = false;
       // rot++;

       // rotateLeft(paper.select("#vrtule"));
        rotateLeft(paper.select('#rect3094'));
        rotateLeft(paper.select('#rect3094'));
    } else {
        isPaused = true;
    }
}
//var rot = 360;
function rotateLeft() {
    animationRunning = true;
    element.transform('r0,0,0');
    if (!isPaused) {
       // Engine.rotate(rot);
       element.animate({ transform: 'r360,0,0'},
           500,
           mina.linear,
           rotateLeft.bind(null, element));
    } else {
        animationRunning = false;
    }
}

*/






/*
*   takze, na zaciatku je matica matrix(1.2170949,0,0,1.2170949,-382.65639,-142.77151)
*   po ukonceni sa to matrix(1,0,0,1,0,0)
*
* */
var isPaused = true;
var animationRunning = false;


function toggleRotation() {
    if (!animationRunning && isPaused) {
        isPaused = false;
        rotateLeft(paper.select("#vrtule"));
    } else {
        isPaused = true;
    }
}

function rotateLeft(element) {
    animationRunning = true;

    var cislo1 = element.cx ;
    var cislo2 = element.cy;
    var strigove = "r0,"+cislo1+","+cislo2+"";
    var strigove2 = "r360,"+cislo1+","+cislo2+"";
    console.log(strigove);

    element.transform(strigove);
    if (!isPaused) {
        element.animate({ transform: strigove2},2000, mina.linear, rotateLeft.bind(null, element));
    } else {
        animationRunning = false;
    }
}
