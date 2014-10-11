function componentThermometer(){
    
    var s = Snap("#svgout");
    
    var tepl = Snap.parse('<defs id="defs8"/><path style="fill:#ececec;fill-opacity:1;stroke:#000000;stroke-width:0.40000001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 8.6,46.8 C 6.9,46.5 5.2,45 4.3,43.2 3.8,42.2 3.8,41.9 3.8,40.5 3.8,39.1 3.9,38.8 4.2,38 4.4,37.5 5.1,36.6 5.6,36.1 l 0.9,-1 0,-15.8 C 6.5,4 6.5,3.5 6.8,2.9 c 0.6,-1.2 1.9,-2 3.3,-2 0.8,0 2.61822,0.7766949 2.788559,1.7474576 C 13.511864,3.6474576 13.2,1.7 13.2,19 l 0,15.8 1.1,1.2 c 1.5,1.5 1.9,2.5 1.9,4.6 0,1.3 0,1.6 -0.5,2.6 -1.3,2.7 -4.1,4.1 -7.2,3.6 z" id="teplomer" inkscape:connector-curvature="0" sodipodi:nodetypes="csscccssscsccsccc"/><path style="fill:#800000;fill-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none" d="m 9.0374531,46.837452 c -2,-0.3 -4.1,-2.1 -4.9,-4.3 l -0.2,-0.4 0,-1.4 c 0,-1.3 0,-1.4 0.1,-1.8 -0.054366,-0.959061 1.3973058,-2.877477 2.6374527,-3.937453 l 6.4625472,0.03745 c 1.187263,0.962547 1.812358,1.862547 2.212358,2.362547 0.6,0.9 0.687642,1.537453 0.687642,3.137453 0,1.1 0,1.2 -0.1,1.6 -0.2,0.9 -0.8,1.9 -1.5,2.6 -1.4,1.5 -3.5,2.2 -5.5999999,2 z" id="vypln-3" inkscape:connector-curvature="0" sodipodi:nodetypes="cccsccccscccc"/><rect style="fill:#ff0000;fill-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none" id="rect4139" width="6.1021266" height="0.76908302" x="6.9843755" y="34.689079" ry="0"/>');
    
    s.append(tepl);
    
}


 function onPageLoad(){
    componentThermometer();
}
