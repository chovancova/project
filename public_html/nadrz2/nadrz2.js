/*d path fullTankStr a emptyTankStr
zmena iba v  M90,147.6 na M90,30 a L150,147.6 na L150,30 
rozdiel y osi je vyska vyplne*/
var fullTankStr = "M90,30L150,30V150V150S120,170,90,150V90V30";
var emptyTankStr ="M90,147.6L150,147.6V150V150S120,170,90,150V90V30";
var isIn = false;
var isOut = false;
var s;
////////////////////////////////////////////////////////
    //var valveIn, valveOut, fillPath;
  function initSchema01(){
      
    /*v parametri musi byt id svg */

      s = Snap ("#waterTank");
    
    /*ak by bol subor prilozeny, tak je mozne
        Snap.load("waterTank.svg", function (){
        nacitavam svg z htlm suboru
    */
   Snap.load("", function (f){
     //g.append(selectAll("g'));
      /*  
      inicializacia jednotlivych elementov z svg podla id
      /*
      valveIn = s.selectAll("#valveIn") ;
      valveOut = s.selectAll("#valveOut");
      fillPath = s.selectAll("#fillPath");
       */  
      /*v tejto metode pristupujem k nim cez svg id*/
      /*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
     
      /**
        funkcia nastavi farbu valve a podla bool hodnoty
        prvy parameter je id ventila
      */
       var setColorValve = function(a, isOpened){
          var color = (true === isOpened) ? "green" : "red";
          s.selectAll(a).attr({fill: color});
         };
     
     /*/ overenie funkcnosti
     //setColorValve("#valveIn", true);
     //setColorValve("#valveIn", false);
     //setColorValve("#valveIn", "true");
     //setColorValve("#valveOut", true);
     //setColorValve("#valveOut", "yellow"); 
     //*/ 
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     /**funkcia nastavi farby jednotlivych ventilov
       * parameter boolean udava prepustnost ventilu*/
      var colorInOut =  function (isOpenIn, isOpenOut){
          setColorValve("#valveIn", isOpenIn);
          setColorValve("#valveOut", isOpenOut);
        };
      colorInOut(1, 1); 
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
      var animateTank = function (a, naplnBool){
        var fillMe = " ";
        var fp = s.selectAll(a);
        //naplnenie tanku vodou
          if (true === naplnBool) {
          fp.attr({fill: "blue", d: emptyTankStr});
         fillMe = fullTankStr;
         } 
        else{
          //vypraznenie tanku vodou
          fp.attr({fill: "blue", d: fullTankStr});
           fillMe = emptyTankStr;}
           fp.animate({path: fillMe }, 3500);
         };
    
      // /* priklad
      // animateTank("#fillPath", true );
      // animateTank("#fillPath", false); 
     
     
      animateWaterTank = function(isIn, isOut){
      if(isIn || isOut) {
       colorInOut(isIn, isOut);
        animateTank("#fillPath", isIn );}
       else{
        return (isIn) ? animateWaterTank(true, true) : animateWaterTank(false, false);
       }       
     };
     
     
     //TESTOVANIE FUNKCNOSTI ANIMACIE
     // animateWaterTank(true, true);
      animateWaterTank(true, false);
     // animateWaterTank(false, true);
     // animateWaterTank(false, false);
   
     
    });//Snap.load
   }
  

function onPageLoad() {
   initSchema01(); 
}
