function Thermometer(perc) {
    this.perc = perc;
    var svgString = "#svg3";
 
    paper = Snap(svgString);

    this.setValue = function (par1) {
        perc = par1;
    };

    Snap.load("svg/thermometer_o.svg", function ha(f) {
        paper.append(f);
        //paper.selectAll("#empty").attr({fill: "#f00"});
        //paper.selectAll("#empty").attr({height: vyska, y: py, x: "342.882"});
        (!(perc >= 0 && perc <= 100) || perc === undefined || perc === null) ? perc = 0 : null;

        var vyska = 350 * ((perc) / 100);
        var py = (557 - vyska);


        this.animateThermometer = function animateThermometer() {
            paper.selectAll("#empty").animate({height: vyska, y: py, x: "342.882"}, 800);
        };


        this.animuj = animateThermometer();
    });

}


function onPageLoad() {
    var therm1 = new Thermometer(70);
    //therm1.animuj();
    therm1.setValue(50);
    //therm1.animateThermometer();

//var therm2 = new Thermometer(20);
    //therm1.animuj();
    // therm2.setValue(99);
    /* 
     *  TODO 
     *       - metody na volanie oddelenie 
     *       - volanie animacie z konstruktoru - opravit
     *       - pridat metodu na vypocet x, height - aby to slo, bez priameho zadania 342.882 
     *       - tiez by bolo dobre upravit teplomer komponentu tak, 
     *         aby sa dali vytvorit na jednej stranke aj tri take komponenty z roznym id.
     *              -  "#svg3" - pripadne vytvorit nove svg bez toho, aby to bolo priamo v html napisane, ye sa jedna o svg
     *              
     *              -   
     */


    /**
     var thermometer1 = new Thermometer(10);
     var thermometer2 = new Thermometer(15);
     var thermometer3 = new Thermometer(20);
     
     function setTempValues(temp1, temp2, temp3) {
     thermometer1.setValue(temp1);
     thermometer2.setValue(temp2);
     thermometer3.setValue(temp3);
     }
     */
} 