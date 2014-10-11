function componentThermometer() {

    var s = Snap("#svg");

    var tepl = Snap.parse(' <path style="fill:#ececec;fill-opacity:1;stroke:#000000;stroke-width:0.40000001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 8.6 46.8 c -1.7 -0.3 -3.4 -1.8 -4.3 -3.6 -0.5 -1 -0.5 -1.3 -0.5 -2.7 0 -1.4 0.1 -1.7 0.4 -2.5 0.2 -0.5 0.9 -1.4 1.4 -1.9 l 0.9 -1 0 -15.8 c 0 -15.3 0 -15.8 0.3 -16.4 0.6 -1.2 1.9 -2 3.3 -2 0.8 -0 1.4 0.3 2.1 0.9 1.1 1 1 -0.1 1 17.2 l 0 15.8 1.1 1.2 c 1.5 1.5 1.9 2.5 1.9 4.6 0 1.3 -0 1.6 -0.5 2.6 -1.3 2.7 -4.1 4.1 -7.2 3.6 z" id="teplomer" inkscape:connector-curvature="0"/><path style="fill:#ff0000;fill-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none" d="M 9 46.7 C 7 46.4 5 44.7 4.1 42.4 l -0.2 -0.4 -0 -1.4 c -0 -1.3 0 -1.4 0.1 -1.8 0.3 -0.9 0.9 -1.7 1.9 -2.8 L 6.7 35.2 6.7 21.6 C 6.7 8 6.7 4 6.8 3.4 6.9 3 7.2 2.6 7.6 2.2 L 7.8 1.9 C 8.4 1.5 9.1 1.2 10 1.2 c 0.9 -0.2 1.6 0.4 2.1 0.7 l 0.3 0.3 c 0.3 0.3 0.4 0.5 0.5 1.2 0.1 1 0.2 3.6 0.2 17.2 l 0 14.2 0.8 0.8 c 1 1 1.1 1.2 1.5 1.7 0.6 0.9 0.7 1.5 0.8 3.1 0 1.1 0 1.2 -0.1 1.6 -0.2 0.9 -0.8 1.9 -1.5 2.6 -1.4 1.5 -3.5 2.2 -5.6 1.9 z" id="vypln" inkscape:connector-curvature="0"/><path style="fill:#800000;fill-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none" d="M 9 46.8 C 7 46.5 4.9 44.7 4.1 42.5 l -0.2 -0.4 -0 -1.4 c -0 -1.3 0 -1.4 0.1 -1.8 0.3 -0.9 1.6 -2.8 2.6 -3.9 l 6.5 0 c 1 1 1.7 1.9 2.1 2.4 0.6 0.9 0.8 1.5 0.8 3.1 0 1.1 0 1.2 -0.1 1.6 -0.2 0.9 -0.8 1.9 -1.5 2.6 -1.4 1.5 -3.5 2.2 -5.6 2 z" id="vypln-3" inkscape:connector-curvature="0"/>');
    //'<defs id="defs8"/><path style="fill:#ececec;fill-opacity:1;stroke:#000000;stroke-width:0.40000001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 8.6,46.8 C 6.9,46.5 5.2,45 4.3,43.2 3.8,42.2 3.8,41.9 3.8,40.5 3.8,39.1 3.9,38.8 4.2,38 4.4,37.5 5.1,36.6 5.6,36.1 l 0.9,-1 0,-15.8 C 6.5,4 6.5,3.5 6.8,2.9 c 0.6,-1.2 1.9,-2 3.3,-2 0.8,0 2.61822,0.7766949 2.788559,1.7474576 C 13.511864,3.6474576 13.2,1.7 13.2,19 l 0,15.8 1.1,1.2 c 1.5,1.5 1.9,2.5 1.9,4.6 0,1.3 0,1.6 -0.5,2.6 -1.3,2.7 -4.1,4.1 -7.2,3.6 z" id="teplomer" inkscape:connector-curvature="0" sodipodi:nodetypes="csscccssscsccsccc"/><path style="fill:#800000;fill-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none" d="m 9.0374531,46.837452 c -2,-0.3 -4.1,-2.1 -4.9,-4.3 l -0.2,-0.4 0,-1.4 c 0,-1.3 0,-1.4 0.1,-1.8 -0.054366,-0.959061 1.3973058,-2.877477 2.6374527,-3.937453 l 6.4625472,0.03745 c 1.187263,0.962547 1.812358,1.862547 2.212358,2.362547 0.6,0.9 0.687642,1.537453 0.687642,3.137453 0,1.1 0,1.2 -0.1,1.6 -0.2,0.9 -0.8,1.9 -1.5,2.6 -1.4,1.5 -3.5,2.2 -5.5999999,2 z" id="vypln-3" inkscape:connector-curvature="0" sodipodi:nodetypes="cccsccccscccc"/><rect style="fill:#ff0000;fill-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none" id="rect4139" width="6.1021266" height="0.76908302" x="6.9843755" y="34.689079" ry="0"/>');

    tepl.select("#vypln-3").attr({fill:"blue"});
    tepl.select("#vypln").animate({path: "M 10 36.7 L 10 36 z"},3000);
/*---mmmm*/
    s.append(tepl);
    


}


function onPageLoad() {
    componentThermometer();
}
