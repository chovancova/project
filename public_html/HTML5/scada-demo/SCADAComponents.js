
function ComponentTank(rPaper, x, y, sizeX, sizeY, fillPercentage) {
    this.rPaper = rPaper;
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.outlinePath = undefined;
    this.bakgroundPath = undefined;
    this.fillPath = undefined;
    this.fillPercentage = fillPercentage;
    
    this.draw = function() {
        if (100 < this.fillPercentage) {
           this.fillPercentage = 100;
       }
        if (this.outlinePath === undefined) {
           fillYOff = (sizeY*((100-this.fillPercentage)/100));
           outlinePathStr = "M" + x + "," + y + "S" + (x+(sizeX/2)) + "," + (y-20) + "," + (x+sizeX) + "," + y + "V" + (x+sizeX) + "," + (y+sizeY) + "S" + (x+(sizeX/2)) + "," + (y+sizeY+20) + "," + x + "," + (y+sizeY) + "V" + x + "," + y;
           this.bakgroundPath = rPaper.path(outlinePathStr);
           this.fillPath = rPaper.path("M" + x + "," + (y+fillYOff) + "L" + (x+sizeX) + "," + (y+fillYOff) + "V" + (x+sizeX) + "," + (y+sizeY) + "S" + (x+(sizeX/2)) + "," + (y+sizeY+20) + "," + x + "," + (y+sizeY) + "V" + x + "," + y);
           this.outlinePath = rPaper.path("M" + x + "," + y + "S" + (x+(sizeX/2)) + "," + (y-20) + "," + (x+sizeX) + "," + y + "V" + (x+sizeX) + "," + (y+sizeY) + "S" + (x+(sizeX/2)) + "," + (y+sizeY+20) + "," + x + "," + (y+sizeY) + "V" + x + "," + y);
           this.fillPath.attr("stroke-width", "0");
           this.fillPath.attr("fill", "#2268d2");
           this.outlinePath.attr("stroke-width", "2");
           this.outlinePath.attr("fill-opacity", "0");
           this.bakgroundPath.attr("fill", "#dee0ec");
           this.bakgroundPath.attr("stroke-width", "0");
       } else {
           fillYOff = (sizeY*((100-this.fillPercentage)/100));
           this.fillPath.animate( { path: ("M" + x + "," + (y+fillYOff) + "L" + (x+sizeX) + "," + (y+fillYOff) + "V" + (x+sizeX) + "," + (y+sizeY) + "S" + (x+(sizeX/2)) + "," + (y+sizeY+20) + "," + x + "," + (y+sizeY) + "V" + x + "," + y) }, 800);
       }
    };
    
    this.setFillPercentage = function (fillPercentage) {
       this.fillPercentage = fillPercentage;
       this.draw();
    }
}

function ComponentValve(rPaper, x, y, sizeX, sizeY, horizontal, opened) {
    this.rPaper = rPaper;
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.opened = opened;
    this.pathValve = undefined;
    this.horizontal = horizontal;
    
    this.draw = function() {
        if (this.pathValve === undefined) {
           this.pathValve = rPaper.path("M" + x + "," + y + "L" + (x+sizeX) + "," + (y+sizeY) +"L" + (x+sizeX) + "," + y + "L" + x + "," + (y+sizeY) + "L" + x + "," + y + "Z");
       }
       if (this.opened) {
         this.pathValve.attr("fill", "#34ac0a");
       } else {
         this.pathValve.attr("fill", "#e8051a");
       }
       this.pathValve.attr("stroke-width", "2");
    };
    
    this.setOpened = function(opened) {
       this.opened = opened; 
       this.draw();
    }
}
