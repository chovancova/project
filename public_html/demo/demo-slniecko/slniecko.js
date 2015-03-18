/* 
 toto je demo zo stranky / http://codepen.io/JMChristensen/pen/tFdCg
 */


$(document).ready(function () {

    var cloud_snow;
    var flakes;
    var cloud_lightning;
    var strikeCount;
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
    cloud_snow = Snap.select ('#cloud_snow');
    flakes = ['flake-1', 'flake-2', 'flake-3'];

    snow();

    function snow() {
        var i;
        var flakeId;
        var flake;
        var cx;
        var cy;
        for (i = 0; i < flakes.length; i++) {
            flakeId = flakes[i];
            flake = cloud_snow.select ('#' + flakeId);
            cx = flake.getBBox ().cx; //dostanem inicializacne kordinacie
            cy = flake.getBBox ().cy;
            animateFlake(flake, cx, cy);
        }
    }

    function animateFlake(flake, cx, cy)
    {
        var timing;
        var deg;
        flake.attr({transform: 't) -200'});/*resetne vlockovu pozicu za oblak*/
        timing = getRandomArbitrary (2000, 10000);
        deg = getRandomArbitrary (-360, 360);
        flake.stop().animate({
            transform: 't0 200r' + deg + ' ' + cx + ' ' + cy
        }, timing, function () {
            animateFlake(flake, cx, cy);
        });
    }
/////////////////////////////////////////////////////////////////////////
    cloud_lightning = Snap.select ("#cloud_lightning");
    strikeCount = 0;
    function strike() {
        var opacity;
        var newOpacity;
        var x;
        var bolt = cloud_lightning.select('#lightning-bolt');
        if (4 > strikeCount) {
            opacity = parseInt (bolt.attr ("opacity"));
            newOpacity = (1 === opacity) ? 0 : 1;
            bolt.stop().animate({opacity: newOpacity}, 100, strike);
            strikeCount++;
        }
        else {
            strikeCount = 0;
            setTimeout(strike, getRandomArbitrary(1000, 5000));
            x = getRandomArbitrary (-200, 200);
            bolt.attr({transform: 't' + x + ',0'});
        }
    }
    strike();
});