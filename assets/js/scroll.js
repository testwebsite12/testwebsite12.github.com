var posterTitle = [
    
    'title1, name1, 2018',
    'title2, name2, 2018',
    'title3, name3, 2018',
    'title4, name4, 2018',
    'title5, name5, 2018'
    
];

var fontColor = ['black', 'black', 'white', 'black', 'white'];
var fontFamily = ['Montserrat','Monospace','Serief','Montserrat','Monospace'];

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        afterLoad: function(slideAnchor, index){
            
//          remove title
            $('#removeText').remove();
//          append title
            $('#callbacksText').append('<h6 id="removeText" style="position:absolute; top:-2rem; right:0.2rem; text-align:right">'+ posterTitle[index-1] +'</h6>');
            
//          remove font name
            $('#fontname').remove();
            
//          append font name            
            $('#appendFontname').append('<div id="fontname" class="col align-text-bottom" style="">'+fontFamily[index-1]+'</div>');
            
//          change font family
            $('#fontname').css('font-family', fontFamily[index-1]);
//          change font color
            $('#removeText').css('color', fontColor[index-1]);
            
        }
    });
});


