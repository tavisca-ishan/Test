document.write('<link rel="stylesheet" type="text/css" href="/CSS/StockStyle.css">');//includes css file
var widgetElement = document.getElementById('StockWidget');
var JavaScriptCode = document.createElement("script");
JavaScriptCode.setAttribute("type", 'text/javascript');
JavaScriptCode.setAttribute("src", 'CreateWidget.js');
document.getElementById('StockWidget').appendChild(JavaScriptCode);
