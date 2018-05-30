
$(function() {
$.scrollify({
    section : ".pages",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 800,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: false,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
});