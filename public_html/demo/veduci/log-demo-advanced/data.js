var myLogViewer;

function initData() {
   myLogViewer = new LogViewer('scrollWrapper');
}

function getTimeStamp() {
   date = new Date();
   return date.getFullYear() + "." + (date.getMonth()+1) + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "," + date.getMilliseconds();
}

function getRandomSeverity() {
   index = Math.floor((Math.random() * logLevels.length));
   return logLevels[index];
}

function getRandomLogRecord() {
   index = Math.floor((Math.random() * logLines.length));
   return logLines[index];
}

function appendRandomLog() {
   severity = getRandomSeverity();
   myLogViewer.appendLogRecord(severity, { 'date': getTimeStamp(), 'severity': severity, 'logText': getRandomLogRecord() });
}

function scrollLogToggle() {
   myLogViewer.autoScrollToggle();
   if (myLogViewer.isAutoScrollEnabled()) {
      document.getElementById("pauseCtrl").innerHTML ="||";
   } else {
      document.getElementById("pauseCtrl").innerHTML =">";
   }
}

function filterLines() {
   severeEnabled = !document.getElementById("severeChk").checked;
   myLogViewer.setLinesVisible('severe', severeEnabled);
   infoEnabled = !document.getElementById("infoChk").checked;
   myLogViewer.setLinesVisible('info', infoEnabled);
}


/**
 * DATA
 **/

logLevels = ['DETAIL', 'DEBUG', 'INFO', 'SEVERE'];

logLines = [
'[sk.ipesoft.d2000.d2apix.D2JAPIConnectorService] (default task-7) getLicenseStatus',
'[sk.ipesoft.d2000.d2mc.jx.ui.d2connector.ProcessListBean] (default task-7) init ...',
'[sk.ipesoft.d2000.d2mc.jx.ui.d2connector.ProcessListBean] (default task-7) updateProcessList',
'[sk.ipesoft.d2000.d2apix.client.D2JAPIEventObserverBase] (default task-7) getProcessList:',
'[sk.ipesoft.d2000.d2apix.client.D2JAPISessionBean] (default task-8) openProcessList:D2JAPISessionData[s:iMZX7QpZCtbw263-ap2aBUV5@localhost:3120]',
'[sk.ipesoft.d2000.d2apix.D2JAPIConnectorService] (default task-8) openProcessList',
'[sk.ipesoft.d2000.d2apix.listeners.ProcessListEventsListener] (pool-8-thread-1) firing onProcessListChange, got 17 items ...',
'[sk.ipesoft.d2000.d2apix.D2JAPIDataEventDispatcher] (pool-8-thread-1) firing CDI process list value event ...',
'[sk.ipesoft.d2000.d2apix.client.D2JAPIEventObserverBase] (pool-8-thread-1) onProcessListEvent: iMZX7QpZCtbw263-ap2aBUV5',
'[sk.ipesoft.d2000.d2mc.jx.ui.push.JAPIPushResourceHandler] (pool-8-thread-1) onMessage: PROCESS_LIST_CHANGED',
'[sk.ipesoft.d2000.d2mc.jx.ui.d2connector.ProcessListBean] (default task-10) updateProcessList',
'[sk.ipesoft.d2000.d2apix.client.D2JAPIEventObserverBase] (default task-10) getProcessList:',
'[sk.ipesoft.d2000.d2mc.jx.ui.push.LicensePushResourceHandler] (default task-48) licensePush - onOpen',
'[sk.ipesoft.d2000.d2mc.jx.ui.push.ConsolePushResourceHandler] (default task-49) consolePush - onOpen',
'[sk.ipesoft.d2000.d2mc.jx.ui.push.GlobalMessagePushResourceHandler] (default task-50) globalMessagePush - onOpen',
'[sk.ipesoft.d2000.d2mc.jx.ui.push.JAPIPushResourceHandler] (default task-52) onOpen',
];

