function Thermometer( perc ,b_animate) {         
   paper = Snap(315, 750);
   this.perc = perc;
     this.animateThermometer = function animateThermometer( perc ) {  
        var vyska =  350*( perc / 100);
        var py = 557-vyska  ;
        paper.selectAll("#empty").animate({height: vyska, y:py, x:"342.882"}, 800);
        
};   
    this.neAnimuj = function neAnimuj(perc){
                var vyska =  350*( perc / 100);
        var py = 557-vyska  ;
         paper.selectAll("#empty").attr({height: vyska, y: py, x: "342.882"});
    }

this.setValue = function setValue (par1) {
        this.perc = par1;
      
    };
           
      Snap.load("svg/thermometer_o.svg", function(f){
        paper.append(f);
        paper.selectAll("#empty").attr({fill:"#f00"});

 
       b_animate? animateThermometer( perc ) : neAnimuj(perc);       
  });
  
  
  
};   





  function onPageLoad() {
   var tepl = Thermometer(50,true);
   
    
}



function tlacidlo(){
     var thermometer1 = new Thermometer(10,false);
 //var thermometer2 = new Thermometer(15);
 //var thermometer3 = new Thermometer(20);
 
 function setTempValues(temp1, temp2, temp3) {
 thermometer1.setValue(temp1);
 //thermometer2.setValue(temp2);
 //thermometer3.setValue(temp3);
 }
    
    setTempValues(50, 70, 10);
   
}