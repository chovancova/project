//var paper = "";

var PumpingStation = function(nazovFileSVG, idDOMsvgElement) {
    paper = Snap(idDOMsvgElement);
    Snap.load(nazovFileSVG, function (f) {
        paper.append(f);
        console.log("bola nacitana stanica do svgStanica");
    });
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
        this.propellor2().attr({transform: "r" + rot});
        this.propellor1().attr({transform: "r" + rot});

        console.log("rotacia vrtuliek o " + rot);
        },
    animujRotaciu: function(){
        this.propellor1().animate ({ transform: "r280" }, 10000, mina.bounce );
       // this.propellor1().transform("r280");
        var g = paper.group(this.propellor1);



        g.animate({ transform: "r280" },3000, mina.bounce);

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

    toggleRotation:   function toggleRotation() {
    if (!this.animationRunning && this.isPaused) {
        this.isPaused = false;
        this.rotateLeft(this.propellor1());
        //this.rotateLeft(this.propellor2());
    } else {
        this.isPaused = true;
    }
},

    rotateLeft: function rotateLeft(element) {
    this.animationRunning = true;
    element.transform('r0,152,17');
    if (!this.isPaused) {
        element.animate({ transform: 'r360,152,17'},
            2000,
            mina.linear
          //  ,this.rotateLeft.bind(null, element)
        );
    } else {
        this.animationRunning = false;
    }
}
  };






var isPaused = true;
var animationRunning = false;

function toggleRotation1() {
    if (!animationRunning && isPaused) {
        isPaused = false;
        rotateLeft(paper.select("#vrtule"));
    } else {
        isPaused = true;
    }
}
var rot = 360;
function rotateLeft(element) {
    animationRunning = true;
    element.transform('r' + 0);
    if (!isPaused) {
        element.animate({ transform: 'r' + rot},500, mina.linear, rotateLeft.bind(null, element));
    } else {
        animationRunning = false;
    }
}




