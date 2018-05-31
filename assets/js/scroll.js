var posterTitle = [
    
    'Poster series for The Wanderlust by Swiss designer Felix Pfäffli, 2014',
    'Poster for Two&2t by Brenttton on Apr 9, 2017',
    'Posted by GRAPHIC DESIGN & SILKSCREEN',
    'Posted by Maan Ali - Haikuglyphics on Apr 14, 2017',
    "Posted by GRAPHIC DESIGNER grafikr's inspiration"
    
];

var fontColor = ['black', 'black', 'white', 'black', 'white'];
var fontFamily = ['Nanum Gothic','Roboto','Arial Black','Avenir Next Condensed','PT Sans Caption'];
var fontWeight = ['Extra-Bold','','Regular','',''];

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
            $('#appendFontname').append('<div id="fontname" class="col align-text-bottom" style="">'+fontFamily[index-1] + ' ' + fontWeight[index-1] +'</div>');
            
//          change font family
            $('#fontname').css('font-family', fontFamily[index-1]);
            
//          change font color
            $('#removeText').css('color', fontColor[index-1]);
            
//          change font weight
            $('#fontname').css('font-weight', fontWeight[index-1]);
            
        }
    });
});


