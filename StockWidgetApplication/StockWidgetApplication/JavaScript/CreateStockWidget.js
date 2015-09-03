document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">');
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>');
document.write('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>');
document.write('<link rel="stylesheet" type="text/css" href="/CSS/StockStyle.css">');//includes css file
document.write('<script type="text/javascript" src="/Javascript/ShowStockData.js">');

var widgetHTML = " ";
widgetHTML += ('<div id="widgetDiv" class="container">');
widgetHTML += ('<ul class="nav nav-tabs">');
widgetHTML += ('<li class="active"><a data-toggle="tab" href="#sensex">sensex</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#nifty">nifty</a></li>');
widgetHTML += ('</ul></div>');

document.write(widgetHTML);
$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
        alert("hiee2");
        var url = "http://training.appyoda.io/api/stock/" + this.innerText;
        var JSONData;
        $.getJSON(url, function (data) {
            JSONData = data;
            alert("hii");
            console.log(JSONData);
        });
            document.write(JSONData);
            showWidgetData(JSONData);//sending json of selected tab to StockData.js
          
        
    });
});
