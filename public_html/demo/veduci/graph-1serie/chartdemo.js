
var dataSize = 300;
var dataSeries;
var chartSetup = { yaxis: {show: true, min: 0, max: 100}, xaxis: {show: true, min: 0, max: 300} };

var plot;

function onPageLoad() {
   chartData = [];
   for (var i = 0; i < dataSize; ++i) {
      chartData[i] = [];
      chartData[i][0] = i;
      chartData[i][1] = 0;
   }
   dataSeries = [ { label: "Series 1", data: chartData, lines: { show: true }, shadowSize: 0 } ];
   plot = $.plot("#placeholder", dataSeries , chartSetup );
   plot.draw();
}

function appendChartData(newValue) {
   var chartData = dataSeries[0].data;
   for (var i = 1; i < dataSize; ++i) {
      chartData[i-1][0] = i -1;
      chartData[i-1][1] = chartData[i][1];
   }
   chartData[dataSize - 1][0] = dataSize - 1;
   chartData[dataSize - 1][1] = newValue;
   dataSeries[0].data = chartData;
   plot.setData(dataSeries);
   plot.draw();
}
		
		
