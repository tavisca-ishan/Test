document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">');
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>');
document.write('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>');
var widgetHTML = "";
widgetHTML += ('<div class="container">');
widgetHTML += ('<ul class="nav nav-tabs">');
widgetHTML += ('<li class="active"><a data-toggle="tab" href="#home">Sensex</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#menu1">Nifty</a></li>');
widgetHTML += ('<li><a data-toggle="tab" href="#menu2">Other Indices</a></li>');
widgetHTML += ('</ul>');
widgetHTML += ('</div>');

$(".nav-tabs a").click(function(){
    $(this).tab('show');

    });

