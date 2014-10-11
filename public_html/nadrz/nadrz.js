function ComponentTank(rPaper, x, y, sizeX, sizeY, fillPercentage) {
 //incializacia parametrov z konstruktora
  this.rPaper = rPaper;
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.fillPercentage = fillPercentage; /*napln nadrz vodou s urcitym percentom*/
  
  this.backgroundPath = undefined; 
  this.fillPath = undefined;       
  this.outlinePath = undefined; 
  
  /*metoda na kreslenie komponentu*/
  this.draw = function(){
     if(this.fillPercentage > 100){this.fillPercentage = 100;}
    /*hodnota ktora sa vyplni*/
    var fillYOff = (sizeY*((100-this.fillPercentage)/100));
    
    /*podla dokumentacie string na pre metodu path */
    /* je taky isty ako u Raphael*/
        var backgroundPathStr =
             "M" +  x            + "," +  y + /*Move to x , y*/
             "S" + (x+(sizeX/2)) + "," + (y-20)   + "," + /*/smooth curveto */
                   (x+sizeX)     + "," +  y +             /*/(x2 y2 x y)+*/
             "V" + (x+sizeX)     + "," + (y+sizeY)+       /*vertical lineTo*/
             "S" + (x+(sizeX/2)) + "," + (y+sizeY+20) + "," + 
                    x            + "," + (y+sizeY)+
             "V" +  x            + "," +  y;
         
         
         var fillPathStr = 
             "M" +  x            + "," + (y+fillYOff) +  /*Move to */ 
             "L" + (x+sizeX)     + "," + (y+fillYOff) + /*lineTo*/
             "V" + (x+sizeX)     + "," + (y+sizeY) + 
             "S" + (x+(sizeX/2)) + "," + (y+sizeY + 20) + /*dolny obluk*/
             "," +  x            + "," + (y+sizeY) + 
             "V" +  x            + "," +  y;
              
         var outlinePathStr = 
             "M" +  x            + "," +  y + //moveto
             "S" + (x+(sizeX/2)) + "," + (y-20) + /*horny obluk nadrze*/ 
             "," + (x+sizeX)     + "," +  y + 
             "V" + (x+sizeX)     + "," + (y+sizeY) +
             "S" + (x+(sizeX/2)) + "," + (y+sizeY + 20) + /*dolny obluk nadrze*/
             "," +  x            + "," + (y+sizeY) +     
             "V" +  x            + "," +  y;              /*/vertical lineto*/
    
     if(this.outlinePath === undefined)
       {  this.backgroundPath = rPaper.path(backgroundPathStr);
         this.fillPath       = rPaper.path(fillPathStr);
         this.outlinePath    = rPaper.path(outlinePathStr);
       
        /*podobne ako v Raphael*/
           this.fillPath.attr({
           strokeWidth: 0, 
           fill:  "blue",         /*modra "#00f"*/ 
         });
           
          
         this.outlinePath.attr({
           strokeWidth: "2",     /*/Zmena oproti raphaelovi "stroke-width" , "0"*/
           stroke: "black",     /*/stroke colour*/
           "fill-opacity": "0"   /*rovnake ako v Raphael*/
         });
        
        this.backgroundPath.attr({
          strokeWidth: 0,
          fill: "silver"       /*sive pozadie nadrze*/
        });
 
       }else{
         /*parametre pre animation su rovnake ako v raphaelovi*/
         /* - attr (object) attributes of final destination
          - duration (number) duration of the animation, in milliseconds
          - easing (function) #optional 
          - callback (function) #optional 
        */    
         this.fillPath.animate({path: (fillPathStr)}, 3500);
      }
      };
    this.setFillPercentage = function (fillPercentage){
    this.fillPercentage = fillPercentage;
    this.draw();
  }; 
    
}

function ComponentValve(rPaper, x, y, sizeX, sizeY, horizontal, opened){
  this.xPaper = rPaper;
  /*suradnice*/
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  /*boolean*/
  this.horizontal = horizontal;
  this.opened = opened;
  /*ventil*/
  this.pathValve = undefined; 
  
  
  this.draw = function()
  {
    var pathValveStr =  
        "M" + x + "," + y + 
        "L" + (x+sizeX) + "," + (y+sizeY) + 
        "L" + (x+sizeX) + "," +  y +
        "L" +  x        + "," + (y + sizeY) + 
        "L" +  x        + "," +  y + 
        "Z";
    
    if(this.pathValve === undefined){
      this.pathValve = rPaper.path(pathValveStr);
    }
    
    this.pathValve.attr({strokeWidth: "2", stroke:"black"});
      
    //ak je otvoreny natav  farbu zelenu, ak nie cervenu
    if(this.opened) {
      this.pathValve.attr({fill : "green"}); }
    else{
      this.pathValve.attr({fill: "red"});
    }
  };
  
  this.setOpened = function(opened){
      this.opened = opened;
      this.draw();
    };
}


  var valveIn, valveOut, waterTank,  schema01Paper;
    
  function initSchema01(){
 
    /* Creates a drawing surface or wraps existing SVG element.
     - DOM (SVGElement) element to be wrapped into Snap structure*/
    
    var schema01Paper = new Snap("#svg");
    
    
    var pipeLineStr = "M 0, 130 " +   /*move to -prava rura*/
                      "H 90 " +       /*Horizontal LineTo */
                      "M 150, 130 " + /*umiestnenie lavej rury*/
                      "H 240 ";       /*sirka rury*/
    
   var pipeLine = schema01Paper.path(pipeLineStr);   

    pipeLine.attr({strokeWidth: 6, stroke: "#444"});
    
    valveIn = new ComponentValve(schema01Paper, 40, 120, 20, 20, true, false);
    valveOut = new ComponentValve(schema01Paper, 180, 120, 20, 20, true, false);
    waterTank = new ComponentTank(schema01Paper, 90, 30, 60, 120, 1);
   
    valveIn.draw();
    valveOut.draw();
    waterTank.draw();
  }
  
function updateSchema01(valveInIsOpened, valveOutIsOpened, tankLevel){
  valveIn.setOpened(valveInIsOpened);
  valveOut.setOpened(valveOutIsOpened);
  waterTank.setFillPercentage(tankLevel);
}


function onPageLoad(){
  initSchema01();
}

var isFull = false;

function toggleDemoStart(){
  var button = document.getElementById("demo");
  if(isFull){
    //zastav demo 
    button.innerHTML = "Fill Tank";
    updateSchema01(isFull = false, true, 0);
    
  }else{
    //spusti demo
     button.innerHTML = "Empty Tank";
   // isFull = true;
    updateSchema01(isFull = true, false, 100);
  }
  
}

                     