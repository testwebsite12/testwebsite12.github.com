var posterTitle = [
    
    'Poster series for The Wanderlust by Swiss designer Felix Pfäffli, 2014',
    'Poster for Two&2t by Brenttton on Apr 9, 2017',
    'Posted by GRAPHIC DESIGN & SILKSCREEN',
    'Posted by Maan Ali - Haikuglyphics on Apr 14, 2017',
    "Posted by GRAPHIC DESIGNER grafikr's inspiration"
    
];

var fontColor = ['black', 'black', 'white', 'black', 'white'];
var fontFamily = ['Nanum Gothic','Roboto','Arial Black','Avenir Next Condensed','PT Sans Caption'];
var fontWeight = ['800','400','400','400','400'];
var fontWeightText = ['Extra Bold','','Regular','',''];
var simFont = ['나눔스퀘어','Source Sans Pro','Bowlby One SC','Open Sans Condensed','Merriweather Sans','다음체','Noto Sans','Black Han Sans','Rubik','Asap'];

$(document).ready(function() {
    var index = $.scrollify.currentIndex();
//          append font name            
    //          remove title
    $('#removeText').remove();
//          append title
    $('#callbacksText').append('<h6 id="removeText" style="position:absolute; top:-2rem; right:0.2rem; text-align:right">'+ posterTitle[index] +'</h6>');

//          remove font name
    $('#fontname').remove();

//          append font name            
    $('#appendFontname').append('<div id="fontname" class="col align-text-bottom" style="">'+fontFamily[index] + ' ' + fontWeightText[index] +'</div>');

//          change font family
    $('#fontname').css('font-family', fontFamily[index]);

//          change font color
    $('#removeText').css('color', fontColor[index]);

//          change font weight
    $('#fontname').css('font-weight', fontWeight[index]);
    


    $.scrollify({
        section:".section",
        easing: "swing",
        scrollbars:true,
        scrollSpeed: 1200,
        updateHash: false,
        before:function(i,panels) {
           
            var index = $.scrollify.currentIndex();
             $('#tooltip').attr('data-original-title', simFont[index]+'<br/>'+simFont[index+6]);
//          append font name            
            //          remove title
            $('#removeText').remove();
//          append title
            $('#callbacksText').append('<h6 id="removeText" style="position:absolute; top:-2rem; right:0.2rem; text-align:right">'+ posterTitle[index] +'</h6>');
            
//          remove font name
            $('#fontname').remove();
            
//          append font name            
            $('#appendFontname').append('<div id="fontname" class="col align-text-bottom" style="">'+fontFamily[index] + ' ' + fontWeightText[index] +'</div>');
            
//          change font family
            $('#fontname').css('font-family', fontFamily[index]);
            
//          change font color
            $('#removeText').css('color', fontColor[index]);
            
//          change font weight
            $('#fontname').css('font-weight', fontWeight[index]);
            
            
            var ref = panels[i].attr("id");
            
            $(".pagination .activeDot").removeClass("activeDot");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("activeDot");
            
        },
        afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            var index = $.scrollify.currentIndex();
            $(".section").each(function(i) {
                activeClass = "";
                if(i===0) {
                    activeClass = "activeDot";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("id") + "\"></a></li>";
            });

            pagination += "</ul>";
      

            $("#section0").append(pagination);
            $(".pagination a").on("click",$.scrollify.move);
            var index = $.scrollify.currentIndex();


        }
    });

    
  
    var controller = new ScrollMagic.Controller();
  
    new ScrollMagic.Scene({
        triggerElement: "#section0",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween("#animation1", {
        transform: "translateY(-10vh)",
    })
    //.addIndicators({name: "Scene 1"})
    .addTo(controller);
    
    
    new ScrollMagic.Scene({
        triggerElement: "#section0",
        duration: '200%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation2-1", {transform: "translateX(-15rem)",
    })
    //.addIndicators({name: "Scene 2-1"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section0",
        duration: '200%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation2-2", {transform: "translateX(-15rem)",
    })
    //.addIndicators({name: "Scene 2-2"})
    .addTo(controller);
        new ScrollMagic.Scene({
        triggerElement: "#section0",
        duration: '200%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation2-3", {transform: "translateX(-30rem)",
    })
    //.addIndicators({name: "Scene 2-3"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section0",
        duration: '200%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation2-4", {transform: "translateX(-45rem)",
    })
    //.addIndicators({name: "Scene 2-4"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section0",
        duration: '200%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation2-5", {transform: "translateX(-60rem)",
    })
    //.addIndicators({name: "Scene 2-5"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section0",
        duration: '200%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation2-6", {transform: "translateX(-75rem)",
    })
    //.addIndicators({name: "Scene 2-6"})
    .addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: "#section1",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation3-1", {transform: "translateY(-10rem)",
    })
    //.addIndicators({name: "Scene 3-1"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section1",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation3-2", {transform: "translateX(-10rem)",
    })
    //.addIndicators({name: "Scene 3-2"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section1",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation3-3", {transform: "translateX(-30rem)",
    })
    //.addIndicators({name: "Scene 3-3"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section1",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation3-4", {transform: "translateX(30rem)",
    })
    //.addIndicators({name: "Scene 3-4"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section1",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation3-5", {transform: "translateX(20rem)",
    })
    //.addIndicators({name: "Scene 3-5"})
    .addTo(controller);
    
    
    
    
    new ScrollMagic.Scene({
        triggerElement: "#section2",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation4-1", {transform: "translateY(-10rem)",
    })
    //.addIndicators({name: "Scene 4-1"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section2",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation4-2", {transform: "translateX(-20rem)",
    })
    //.addIndicators({name: "Scene 4-2"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section2",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation4-3", {transform: "translateY(-20rem)",
    })
    //.addIndicators({name: "Scene 4-3"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section2",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation4-4", {transform: "translateY(-30rem)",
    })
    //.addIndicators({name: "Scene 4-4"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section2",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation4-5", {transform: "translateY(-20rem)",
    })
    //.addIndicators({name: "Scene 4-5"})
    .addTo(controller);
    
    
    new ScrollMagic.Scene({
        triggerElement: "#section3",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation5-1", {transform: "translateX(10rem)",
    })
    //.addIndicators({name: "Scene 5-1"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section3",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation5-2", {transform: "translateX(20rem)",
    })
    //.addIndicators({name: "Scene 5-2"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section3",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation5-3", {transform: "translateX(-20rem)",
    })
    //.addIndicators({name: "Scene 5-3"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section3",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation5-4", {transform: "translateX(-10rem)",
    })
    //.addIndicators({name: "Scene 5-4"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section3",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation5-5", {transform: "translateX(40rem)",
    })
    //.addIndicators({name: "Scene 5-5"})
    .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#section3",
        duration: '100%',
        triggerHook:0,
        reverse:true,
    })
    .setTween(
        "#animation5-6", {transform: "translateX(-30rem)",
    })
    //.addIndicators({name: "Scene 5-6"})
    .addTo(controller);
    
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});