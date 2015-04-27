
var initialValue = 15;
var unitLabel = '%';
var mp01;

function updateProgress(newValue) {
   mp01.value(newValue).render(); 
}

function onPageLoad() {
   mp01 = radialProgress(document.getElementById('mp01wrapper'))
   .label("MP 01")
   .diameter(330)
   .minValue(0)
   .maxValue(100)
   .unit(unitLabel)
   .value(initialValue)
   .render();             
}
         