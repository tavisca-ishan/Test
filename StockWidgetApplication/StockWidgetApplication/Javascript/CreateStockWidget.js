document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">');
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>');
document.write('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>');
document.write('<link rel="stylesheet" type="text/css" href="/CSS/Style.css">');//includes css file


var widgetHTML = " ";
widgetHTML += ('<div id="widgetDiv" class="container">');
widgetHTML += ('<ul class="nav nav-tabs">');
widgetHTML += ('<li class="active"><a data-toggle="tab" href="#sensex">sensex</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#nifty">nifty</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#cac">cac</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#dowjones">dowjones</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#ftse">ftse</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#nasdaq">nasdaq</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#nikkie225">nikkie225</a></li>');
widgetHTML += ('</ul></div>');

document.write(widgetHTML);
$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
        var url = "http://training.appyoda.io/api/stock/" + this.innerText;
        var JSONData;
        $.getJSON(url, function (data) {
            JSONData = data;
            alert("hii");
            console.log(JSONData);
        });
        document.write(JSONData);
        showWidgetData(JSONData);
    });
    function showWidgetData(JSONObject)
        {
            var HTMLElement = "";
            var widgetData = JSONObject;
            HTMLElement += ('<div id="StockWidget">');
            HTMLElement += ('<h3 class="widgetName">'+widgetData.name+'</h3>');//add css
            HTMLElement += ('<p class="exchangeValue">' + widgetData.lastprice+'&emsp;&emsp;'+widgetData.change+'&emsp;'+"("+widgetData.percent_change+")"+ '</p>');
            HTMLElement += ('<div id="rangeDiv"><h1>'+TODAYS HIGH/LOW+'</h1>');
            HTMLElement += ('<p class="rangeValue">'+widgetData.high+'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'+widgetData.low+'</p>');
            HTMLElement += ('</div>');
            HTMLElement += ('div id="graphDiv">');
            HTMLElement += ('<a href='+widgetData.graph_csv_path+'></a>');
            HTMLElement += ('</div></div>');
            document.write(HTMLElement);
        }
});
