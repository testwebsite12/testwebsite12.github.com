var cards = [
    
//          [카드 정보 넣는법]   
//          ['이름', '저작자', '텍스트', ['들어가는','사진번호'] ]
    
            ['Nanum Gothic', 'Sandol (3 styles)', '텍스트', ['들어','가는','사진'] ],
            ['이름', '저작자', '텍스트', ['들어','가는','사진'] ],
            ['이름', '저작자', '텍스트', ['들어','가는','사진'] ],
            ['이름', '저작자', '텍스트', ['들어','가는','사진'] ],
            ['이름', '저작자', '텍스트', ['들어','가는','사진'] ],
            ['이름', '저작자', '텍스트', ['들어','가는','사진'] ]
    
            ];
var i=1;

$(document).ready(function() {
    
    for(var i=0; i<cards.length; i++) {
//        $('body').append("\
//        <script>\
//            $('#fontSizeVal'+'0').on('change', function () {\
//                var f = $(this).val();\
//                $('#testText'+i).css('font-size', f + 'rem');\
//            });\
//            $('#fontWeightVal'+'0').on('change', function () {\
//                var w = $(this).val();\
//                $('#testText'+i).css('font-weight', w);\
//            });\
//        </script>\
//        ");
        $('.card-columns').append("\
                <script>\
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
                        <h2 class='author'>"+ cards[i][1]+"</h2>\
                    </div>\
                    <div class='middle'>\
                        <output id='testText"+i+"' class='testText align-middle'>"+ cards[i][2]+"</output>\
                    </div>\
                    <div id=ovl"+i+" class='ovl'>\
                        <div id=fontSize class=slider>\
                            <h3 id=sliderTitle>Size</h3>\
                            <input id='fontSizeVal"+i+"' type='range' min='1.0' max='2.5' value='2' step='0.1'>\
                        </div>\
                        <div id=fontWeight class=slider>\
                            <h3 class=sliderTitle>Weight</h3>\
                            <input id='fontWeightVal" + i +"' type='range' min='100' max='800' value='400' step='100'>\
                        </div>\
                        <div id=letterSpacing class=slider>\
                            <h3 class=sliderTitle>Space</h3>\
                            <input id='letterSpacingVal"+i+"' type='range' min='-0.3' max='0.3' value='0' step='0.05'>\
                        </div>\
                        <div id=lineHeight class=slider>\
                            <h3 class=sliderTitle>Height</h3>\
                            <input id='lineHeightVal"+i+"' type='range' min='75' max='150' value='135' step='1'>\
                        </div>\
                    </div>\
                </div>\
        ");


    }

});