document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">');
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>');
document.write('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>');
alert("hi");
var widgetHTML = " ";
widgetHTML += ('<div class="container">');
widgetHTML += ('<ul class="nav nav-tabs">');
widgetHTML += ('<li class="active"><a href="#sensex">sensex</a></li>');
alert("hi tab");
widgetHTML += ('<li><a href="#nifty">nifty</a></li>');
alert("hi tab2");
widgetHTML += ('</ul></div>');


$(".nav-tabs a").click(function(){
    $(this).tab('show');
    alert("hii"); 
    var url = "http://training.appyoda.io/api/stock/" + this.innerText;
    var JSONData = $.getJSON(url, function (data) { });
    getWidgetData(JSONData);//sending json of selected tab to StockData.js

});

//('<div class="container">');
//wHTML += ('<ul class="nav nav-tabs"> <li class="active"><a href="#Delhi">delhi</a></li>');
//wHTML += ('<li><a href="#mumbai">mumbai</a></li> <li><a href="#hyderabad">hyderabad</a></li> <li><a href="#banglore">banglore</a></li> <li><a href="#chennai">chennai</a></li> <li><a href="#pune">pune</a></li> <li><a href="#kolkata">kolkata</a></li>');
//wHTML += ('</ul></div></center>');

