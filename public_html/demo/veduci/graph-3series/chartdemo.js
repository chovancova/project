
var dataSize = 300;
var dataSeries;
var chartSetup = { yaxis: {show: true, min: 0, max: 100}, xaxis: {show: true, min: 0, max: 300} };

var plot;

function onPageLoad() {
   chartData0 = [];
   chartData1 = [];
   chartData2 = [];
   for (var i = 0; i < dataSize; ++i) {
      chartData0[i] = [];
      chartData0[i][0] = i;
      chartData0[i][1] = 0;
      
      chartData1[i] = [];
      chartData1[i][0] = i;
      chartData1[i][1] = 0;
      
      chartData2[i] = [];
      chartData2[i][0] = i;
      chartData2[i][1] = 0;
   }
   dataSeries = [ 
                   { label: "CPU", data: chartData0, lines: { show: true }, shadowSize: 0 }, 
                   { label: "Memory", data: chartData1, lines: { show: true }, shadowSize: 0 }, 
                   { label: "Disk", data: chartData2, lines: { show: true }, shadowSize: 0 } 
                ];
   plot = $.plot("#placeholder", dataSeries , chartSetup );
   plot.draw();
}

function appendChartData(newValues) {
   for (var x = 0; x < dataSeries.length; x++) {
      for (var i = 1; i < dataSeries[x].data.length; ++i) {
         dataSeries[x].data[i-1][0] = i - 1;
         dataSeries[x].data[i-1][1] = dataSeries[x].data[i][1];
      }
      dataSeries[x].data[dataSize - 1][0] = dataSize - 1;
      dataSeries[x].data[dataSize - 1][1] = newValues[x];
   }
   plot.setData(dataSeries);
   plot.draw();
}
		
		
