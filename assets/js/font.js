var cards = [
    
//          [카드 정보 넣는법]   
//          ['이름', 'font-family', '저작자', '텍스트', ['들어가는','사진번호'] ]
    
['나눔 고딕', 'nanum gothic', '산돌 (3 styles)', '그들의 장비와 기구는 모두 살아 있다.', ['들어','가는','사진'] ],
['Roboto', 'roboto', 'Christian Robertson (12 styles)', 'Mist enveloped the ship three hours out from port.', ['들어','가는','사진'] ],
['IBM Plex Sans','IBM Plex Sans' ,'Mike Abbink, Bold Monday (14 styles)', 'It was going to be a lonely trip back.', ['들어','가는','사진'] ],
['Montserrat', 'Montserrat', 'Sol Matas, Jacques Le Bailly (18 styles)', 'A shining crescent far beneath the flying vessel.', ['들어','가는','사진'] ],
['Sunflower', 'Sunflower', 'JIKJISOFT (3 styles)', '삐죽삐죽한 날개 윤곽이 붉게 빛났다.', ['들어','가는','사진'] ],
['이름', '저작자', '저작자', '텍스트', ['들어','가는','사진'] ]
    
            ];
var i=1;



$(document).ready(function() {
//  Auto Generating Code
    for(var i=0; i<cards.length; i++) {
        $('.card-columns').append("\
<!--//      Sliders-->\
            <script>\
                $('#testText"+i+"').css('font-family', '"+ cards[i][1] +"');\
                $('#fontSizeVal"+i+"').on('change', function () {\
                    var f = $(this).val();\
                    $('#testText"+i+"').css('font-size', f + 'rem');\
                });\
                $('#fontWeightVal"+i+"').on('change', function () {\
                    var w = $(this).val();\
                    $('#testText"+i+"').css('font-weight', w);\
                });\
                $('#letterSpacingVal"+i+"').on('change', function () {\
                    var s = $(this).val();\
                    $('#testText"+i+"').css('letter-spacing', s + 'rem');\
                });\
                $('#lineHeightVal"+i+"').on('change', function () {\
                    var s = $(this).val();\
                    $('#testText"+i+"').css('line-height', s + '%');\
                });\
            </script>\
            <div id=card"+i+" class='card'>\
                <div class='top'>\
                    <h1 class='fontName'>"+cards[i][0]+"</h1>\
                    <h2 class='author'>"+ cards[i][2]+"</h2>\
                </div>\
                <div class='middle'>\
                    <output id='testText"+i+"' class='testText align-middle'>"+ cards[i][3]+"</output>\
                </div>\
                <div id=ovl"+i+" class='ovl'>\
                    <div class='reset'>\
                        <div class='resetbutton'>\
                            <h4>Reset</h4>\
                        </div>\
                    </div>\
                    <div class='slides'>\
                        <div id=fontSize class=value>\
                            <h3 id=sliderTitle>Size</h3>\
                            <input id='fontSizeVal"+i+"' type='range' min='1.0' max='3' value='2' step='0.1'>\
                        </div>\
                        <div id=fontWeight class=value>\
                            <h3 class=sliderTitle>Weight</h3>\
                            <input id='fontWeightVal"+i+"' type='range' min='100' max='800' value='400' step='50'>\
                        </div>\
                        <div id=letterSpacing class=value>\
                            <h3 class=sliderTitle>Space</h3>\
                            <input id='letterSpacingVal"+i+"' type='range' min='-0.3' max='0.3' value='0' step='0.05'>\
                        </div>\
                        <div id=lineHeight class=value>\
                            <h3 class=sliderTitle>Height</h3>\
                            <input id='lineHeightVal"+i+"' type='range' min='105' max='165' value='135' step='0.5'>\
                        </div>\
                    </div>\
                </div>\
            </div>\
<!--//      Hover overlay-->\
            <script>\
                $('#card"+i+"').hover(function(){\
                    $('#ovl"+i+"').css('opacity',1);\
                }, function() {\
                    $('#ovl"+i+"').css('opacity',0);\
                });\
            </script>\
        ");
        


    }
    
    $('input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
    }).trigger('input');

});