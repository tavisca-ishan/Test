document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">');
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>');
document.write('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>');
var widgetHTML = " ";
widgetHTML += ('<div id="styleDiv">');
widgetHTML += ('<div id="widgetDiv" class="container">');
widgetHTML += ('<ul class="nav nav-tabs">');
widgetHTML += ('<li class="active"><a data-toggle="tab" href="#sensex">Sensex</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#nifty">Nifty</a></li>');
widgetHTML += ('</ul></div></div>');
document.write(widgetHTML);

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
        var url = "http://training.appyoda.io/api/stock/" + this.innerText;
        var JSONData = $.getJSON(url, function (data) { });
        // showWidgetData(JSONData);//sending json of selected tab to StockData.js
        document.write(widgetHTML);
    });
});
