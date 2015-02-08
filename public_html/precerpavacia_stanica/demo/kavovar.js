window.onload = function () {
    var s = Snap(1000, 800), /*rozmer platna snap*/
            p = 100 / 3, /**/
            h = 250, /**/
            x = 400, /**/
            y = 200, /**/
            R = 100, /**/
            r = 70, /**/
            open = 0, /*boolean ci je otvoreny, alebo zatvoreyn*/
            gstream,
            gmilk = "l()#F4EEE6-#fff:50-#F4EEE6:50-#F4EEE6",
            gcoffee = "l()#60544F-#8c7a73:50-#60544F:50-#60544F",
            gwater = "l()#B4D6DB-#D6EDEE:50-#B4D6DB:50-#B4D6DB";

    Snap.load("demo.svg", function (f) {
        /*vyselektujem si do premennych svg idecka*/
        var top = f.select("#top"),
                bot = f.select("#bottom"),
                tap = f.select("#tap"), /*uzaver*/
                knob = f.select("#knob"),
                dot = f.select("#dot"),
                arr = f.select("#arrow"),
                knobcx = knob.attr("cx"), /*x-ova suradnica uzavera*/
                knobcy = knob.attr("cy"), /*y-ova suradnica uzavera*/
                lead = f.select("#lead"),
                angle = 0,
                lastAngle,
                startAngle,
                leadOpenPath = lead.attr("d"),
                leadClosedPath = f.select("#lead-target").attr("d"),
                closed, /*boolean ci je otvoreny, alebo zatvoreyn*/
                grp = s.g().insertBefore(tap),
                /*vytvorim objekt v ktorom budu jednotlive ponuky kavy,
                 * a suradnice, uhol, a typ vody, a tak dalej*/
                pie = {
                    cx: f.select("#pie-chart circle").attr("cx"),
                    cy: f.select("#pie-chart circle").attr("cy"),
                    r: f.select("#pie-chart circle").attr("r"),
                    coffee: f.select("#legend text"),
                    water: f.select("#legend text")[1],
                    title: f.select("#legend text")[2],
                    waterBox: f.select("#legend rect:nth-child(2)")
                };

        /*vytvorim si co sa staane, ked kliknem na urcite oblasti, po 72*/
        /*360/5=72 uhol mam 5 poloziek**/
        f.select("#pie-chart").remove();
        f.select("#americano-area").click(function () {
            chosen(0);
        });
        f.select("#latte-area").click(function () {
            chosen(72)
        });
        f.select("#mocha-area").click(function () {
            chosen(144)
        });
        f.select("#mochiatto-area").click(function () {
            chosen(216)
        });
        f.select("#espresso-area").click(function () {
            chosen(288)
        });

        x = +top.attr("cx");
        y = +top.attr("cy");
        R = +top.attr("rx");
        r = +bot.attr("rx");
        h = bot.attr("cy") - y; /*bottom - top suradnice y*/

        /*zobrazenie kavovaru na platno*/
        s.add(f.select("g"));

        lead.click(function () {
            var path, ease;

            if (close) {
                path = leadOpenPath;
                ease = mina.easein;/*ease in - ked je blizsie pri cieli, tak zrychli*/
                closed = 0;
            } else {
                path = leadClosedPath;
                ease = mina.easeout;
                closed = 1;
            }

            lead.stop().animate({d: path}, 1000, ease);
        });

        /*presunie uzaver na suradnicu x,y, uhlu*/
        knob.attr({
            fill: "#000", opacity: 0
        }).drag(function (dx, dy, x, y) {
            var a = Snap.angle(knobcx, knobcy, x, y) - startAngle + angle;
            /*pretransformujem ukazovatel - pozostavajuci z bodky a sipky*/
            dot.transform("r" + [a, knobcx, knobcy]);
            arr.transform("r" + [a, knobcx, knobcy]);
            lastAngle = a;/*potrebujem vediet aky bol posledny uhol*/
        }, function (x, y) {
            startAngle = Snap.angle(knobcx, knobcy, x, y);
            lastAngle = angle;
            dot.stop();
            arr.stop();
        }, function () {
            angle = lastAngle;
            var a = Snap.snapTo(72, angle, 36);
            chosen(a);
        });

        /*zanimovanie vyberu - a je uhol/volba
         * 3*360 = 1080 modulo 360 zistim uhol a*/
        function chosen(a) {
            a = (a + 1080) % 360;
            angle = a;
            var to = "r" + [a, knobcx, knobcy];
            /*zanimujem pohyb bodky, a sipky*/
            dot.animate({
                transform: to
            }, 500, mina.bounce);
            arr.animate({
                transform: to
            }, 500, mina.bounce, function () {
                closeCup(function () {
                    types[a]();
                    pour();
                    pieShow();
                });
            });
        }

        grp.path(outline(0, h)).attr("class", "outline");

        var o3 = (h - 70) / 3, /*napr. 250-70 /3 = 60 */
                o2 = (h - 70) / 3, /*90*/
                cover = grp.ellipse(getEll(h - 60).attr("class", "water")),
                ct1 = grp.path(cut(10, 10 + o3, 0)).attr({fill: gcoffee}),
                ct2 = grp.path(cut(10 + o3, h - 60, 0)).attr({fill: gwater}),
                middle = 10 + o3,
                pieCoffee,
                pieTitle,
                pieType,
                g = grp.g(),
                dr = grp.path(doors(0)).attr("class", "doors"),
                /**zadefinujem si typy kav*/
                types = {
                    0: function(){
                        /*AMERICANO*/
                        cover.attr("class", "water");
                        ct2.attr("fill", gwater);
                        middle = 10 + o3;
                        pieCoffee = 1 / 3; 
                        pieType = "water";
                    }
                    
                    
                }
                
    });



};