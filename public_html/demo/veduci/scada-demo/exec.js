
function onPageLoad() {
   initSchema01();
}

var isFull = false;

function toggleDemoStart() {
   if (isFull) {
      //stop demo
      button = document.getElementById("demoCtrl");
      button.innerHTML = "Fill Tank"; 
      isFull = false;
      updateSchema01(false, true, 0);
   } else {
      //start demo
      button = document.getElementById("demoCtrl");
      button.innerHTML = "Empty Tank"; 
      isFull = true;
      updateSchema01(true, false, 100);
   }
}


