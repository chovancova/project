window.onload = function (boolVentil, boolCerpadla, intHladiny) {
    var s = Snap(750, 600),
            openVentil = 0,
            openMotor = 0;
    var perc = 60;
    /*d path fullTankStr a emptyTankStr
     zmena iba v  M90,147.6 na M90,30 a L150,147.6 na L150,30 
     rozdiel y osi je vyska vyplne*/
    var fullTankStr = "M90,30L150,30V150V150S120,170,90,150V90V30";
    var emptyTankStr = "M90,147.6L150,147.6V150V150S120,170,90,150V90V30";

    Snap.load("stanica2.svg", function (f) {
        /* var rura1 = f.select("#rura1"),
         voda1 = f.select("#voda1"),
         rura2 = f.select("#rura2"),
         voda2 = f.select("#voda2"),
         motor1 = f.select("#motor1"),
         vrtulky = f.select("#vrtulky"),
         rura3 = f.attr("rura3"),
         ventil = f.attr("ventil"),
         voda3 = f.select("#voda3"),
         voda4 = f.select("#voda4"),
         rura4 = f.attr("rura4"),
         hladina1 = f.select("#hladina1"),
         hladina1cx = hladina1.attr("cx"),
         hladina1cy = hladina1.attr("cy");
         
         
         x = +hladina1.attr("cx");
         y = +hladina1.attr("cy");
         
         
         
         
         */
        s.add(f.selectAll("#stanica"));

        otacajMotor();
        var motor = Snap.select("#vrtule");
        function otacajMotor() {
            /*  motor.animate()(
             {transform: 'r90,256,256'}, 
             1000, 
             function(){
             motor.attr({transform: 'rotate(0 256 256)'});
             otacajMotor();
             });*/
        }



        /**
         funkcia nastavi farbu valve a podla bool hodnoty
         prvy parameter je id ventila
         */
        var setColorValve = function (a, isOpened) {
            var color = (isOpened === true) ? "green" : "red";
            s.selectAll(a).attr({fill: color});
        };

        //*/ overenie funkcnosti
        setColorValve("#ventil", true);
        //  setColorValve("#ventil", false);
        //setColorValve("#ventil", "true");
        //setColorValve("#ventil", true);
        //setColorValve("#ventil", "yellow"); 
        //*/ 
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**funkcia nastavi farby jednotlivych ventilov
         * parameter boolean udava prepustnost ventilu*/
        var colorInOut = function (isOpenIn, isOpenOut) {
            setColorValve("#ventil", isOpenIn);
            //nastartovanie motora, alebo stupanei hladiny
            // setColorValve("#ventil", isOpenOut);
        };
        //colorInOut(1, 1); 
        /*/* Priklady
         // colorInOut(true, true);  /*preteka cez nadrz*/
        // colorInOut(true, false); /*vteka do nadrze*/
        // colorInOut(false, true); /*vyteka z nadrze */
        // colorInOut(false, false); /*nevyteka nic*/
        // */



        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**ANIMACIA nadrze
         parameter
         ak bude zadany naplnBool true
         tank sa bude vypraznovat
         inak
         tak sa bude naplnovat
         Zatial su natvrdo nastavene path cez string
         
         ANIMACIA nadrze
         vyuzivam schopnost animate
         funkcia na zmenu hodnot suradnic M a L na osi y elementu fillPath 
         var animateTank = function (a, naplnBool, percento)
         //zanimovanie po urcite percennto
         */
        var animateTank = function (a, naplnBool) {
            var fillMe = " ";
            var fp = s.selectAll(a);
            //naplnenie tanku vodou
            if (naplnBool === true) {
                fp.attr({fill: "blue", d: emptyTankStr});
                fillMe = fullTankStr;
            }
            else {
                //vypraznenie tanku vodou
                fp.attr({fill: "blue", d: fullTankStr});
                fillMe = emptyTankStr;
            }
            fp.animate({path: fillMe}, 3500);
        };

        // /* priklad
        animateTank("#hladina1", true);
        // animateTank("#hladina1", false); 

        /*
         animateWaterTank = function(isIn, isOut){
         if(isIn || isOut) {
         colorInOut(isIn, isOut);
         animateTank("#hladina1", isIn );}
         else{
         return (isIn) ? animateWaterTank(true, true) : animateWaterTank(false, false);
         }       
         };
         
         */
        //TESTOVANIE FUNKCNOSTI ANIMACIE
        // animateWaterTank(true, true);
        // animateWaterTank(true, false);
        // animateWaterTank(false, true);
        // animateWaterTank(false, false);


        this.perc = perc;
        this.animateS = function animateThermometer(perc) {
            var vyska = 350 * (perc / 100);
            var py = 557 - vyska;
            s.selectAll("#empty").animate({height: vyska, y: py, x: "342.882"}, 800);

        };
        this.neAnimuj = function neAnimuj(perc) {
            var vyska = 350 * (perc / 100);
            var py = 557 - vyska;
            s.selectAll("#empty").attr({height: vyska, y: py, x: "342.882"});
        }

        this.setValue = function setValue(par1) {
            this.perc = par1;

        };

        (!(perc >= 0 && perc <= 100) || perc === undefined || perc === null) ? perc = 0 : null;

        var vyska = 600 * ((perc) / 100);
        var py = (600 - vyska);

        s.select("#hladina2").animate({height: vyska, y: py, x: 6}, 800);

        s.append(s);







    });
};