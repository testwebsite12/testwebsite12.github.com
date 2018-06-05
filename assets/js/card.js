var data;

$(document).ready(function() {
    
    $(window).scroll(function(){
      var y = $(window).scrollTop();
      if( y > 0 ){
        $("header").css({'opacity':y/20});
      } else {
        $("header").css({'opacity':y/20});
      }
     });
    
//  Auto Generating Code
    $.ajax({
        type: "GET",
        url: "assets/data/posters.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
    
    
    function processData(csvFile) {
        data=$.csv.toObjects(csvFile);
        $.get('assets/module/card.html', function(template) {
            $.tmpl(template, data).appendTo('.card-columns');
        });
    }
    
    
    
    
    
});


function descriptionOff() {
    $('.descriptionBack').css({
        'visibility': 'hidden'
    });
    $('body').css({'overflow-y': 'scroll'});
}