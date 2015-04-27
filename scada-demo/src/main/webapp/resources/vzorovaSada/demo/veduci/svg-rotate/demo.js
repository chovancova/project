
function rotationOn(){
   anim = document.getElementById('rectRotateAnimation');
   anim.setAttribute('type', 'rotate');
   anim.beginElement();    
}
   
function rotationOff(){
   anim = document.getElementById('rectRotateAnimation');
   anim.setAttribute('type', '');
   anim.endElement();
}

var rotation = false;

function toggleRotation() {
   if (rotation) {
      rotationOff();
      rotation = false;
   } else {
      rotationOn();
      rotation = true;
   }
}
