/* 
 toto je demo zo stranky / http://codepen.io/JMChristensen/pen/tFdCg
 */


$(document).ready(function () {

    var sun = Snap.select("#sun");
    var sunCircle = sun.select("#circle");
    var sunRays = sun.select('#rays');

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
//////////////////////////////////////////////////////////////////
    raysAnimation();

    //nekonecna animacia slnecnych lucov
    function raysAnimation() {
        sunRays.stop().animate(
                {transform: 'r90,256,256'}, /*rotacia okolo bodu*/
        1000,
                function () {
                    sunRays.attr({transform: "rotate(0 256 256)'"});
                    /*resetnutie pozicie lucov**/
                    raysAnimation(); /*aby sa to stale vykonavalo*/
                }
        );
    }
////////////////////////////////////////////////////////////////
    var cloud_snow = Snap.select('#cloud_snow');
    var flakes = ['flake-1', 'flake-2', 'flake-3'];

    snow();

    function snow() {
        for (var i = 0; i < flakes.length; i++) {
            var flakeId = flakes[i];
            var flake = cloud_snow.select('#' + flakeId);
            var cx = flake.getBBox().cx; //dostanem inicializacne kordinacie
            var cy = flake.getBBox().cy;
            animateFlake(flake, cx, cy);
        }
    }

    function animateFlake(flake, cx, cy)
    {
        flake.attr({transform: 't) -200'});/*resetne vlockovu pozicu za oblak*/
        var timing = getRandomArbitrary(2000, 10000);
        var deg = getRandomArbitrary(-360, 360);
        flake.stop().animate({
            transform: 't0 200r' + deg + ' ' + cx + ' ' + cy
        }, timing, function () {
            animateFlake(flake, cx, cy);
        });
    }
/////////////////////////////////////////////////////////////////////////
    var cloud_lightning = Snap.select("#cloud_lightning");
    var strikeCount = 0;
    function strike() {
        var bolt = cloud_lightning.select('#lightning-bolt');
        if (strikeCount < 4) {
            var opacity = parseInt(bolt.attr("opacity"));
            var newOpacity = (opacity === 1) ? 0 : 1;
            bolt.stop().animate({opacity: newOpacity}, 100, strike);
            strikeCount++;
        }
        else {
            strikeCount = 0;
            setTimeout(strike, getRandomArbitrary(1000, 5000));
            var x = getRandomArbitrary(-200, 200);
            bolt.attr({transform: 't' + x + ',0'});
        }
    }
    strike();
});