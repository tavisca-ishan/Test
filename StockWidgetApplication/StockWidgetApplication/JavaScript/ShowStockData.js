function showWidgetData(JSONObject)
{
    var HTMLElement = "";
    var widgetData = JSONObject;
    HTMLElement += ('<center><div id="StockWidget">');
    HTMLElement += ('<h2>'+widgetData.name+'</h2>');//add css
    HTMLElement += ('<p>' + widgetData.lastprice&emsp;&emsp;widgetData.change&emsp;+"("+widgetData.percent_change+")"+ '</p>');
    HTMLElement += ('<div id="volumeDiv"><h1>'+TODAY HIGH/LOW&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;VOLUME+'</h1>');
    HTMLElement += ('<p>'+widgetData.high&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;widgetData.low+'</p>');
    HTMLElement += ('</div>');
    HTMLElement += ('div id="graphDiv">');
    HTMLElement += ('<a href='+widgetData.graph_csv_path+'></a>');
    HTMLElement += ('</div></div>');
    document.write(HTMLElement);
}
