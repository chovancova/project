/*nastavit rozsah a potom nastavit aktualnu hodnotu*/

function componentThermometer(perc) {
    var paper = Snap("#svg3");
     Snap.load("svg/thermometer_o.svg", function(f){
        paper.append(f);
        paper.selectAll("#empty").attr({fill:"#f00"});
        
         (!(perc>=0 && perc<=100)|| perc ===undefined || perc === null)? perc = 0 : null;
        
        var vyska =  350*((perc) / 100);
        var py =(557-vyska) ;
        paper.selectAll("#empty").animate({height: vyska, y:py, x:"342.882"}, 800);
     });
    
}
function onPageLoad() {
    componentThermometer(60);
    
}
