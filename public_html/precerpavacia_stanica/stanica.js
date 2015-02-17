window.onload = function () {
    var s = Snap(1000, 1200),
            openVentil = 0,
            openMotor = 0;

    Snap.load("stanica.svg", function (f) {
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
        s.add(f.select("g"));
        
        
        /**
        funkcia nastavi farbu valve a podla bool hodnoty
        prvy parameter je id ventila
      */
       var setColorValve = function(a, isOpened){
          var color = (isOpened === true) ? "green" : "red" ;
          s.selectAll(a).attr({fill: color});
         };
     
     //*/ overenie funkcnosti
    // setColorValve("#ventil", true);
     setColorValve("#ventil", false);
     //setColorValve("#ventil", "true");
     //setColorValve("#ventil", true);
     //setColorValve("#ventil", "yellow"); 
     //*/ 
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     /**funkcia nastavi farby jednotlivych ventilov
       * parameter boolean udava prepustnost ventilu*/
      var colorInOut =  function (isOpenIn, isOpenOut){
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
        
        
    });
};