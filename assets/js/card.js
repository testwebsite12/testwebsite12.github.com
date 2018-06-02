var data;

$(document).ready(function() {
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