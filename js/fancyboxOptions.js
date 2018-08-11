$(document).ready(function() {
   $('[data-fancybox="gallery"]').fancybox({
        loop: false,
        gutter: 01,
        buttons: [
            //"share",
            //"slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        idleTime: 30,
        animationEffect: "zoom",
        transitionEffect: "fade",
        transitionDuration: 200,
        clickContent: function(current, event) {
            return current.type === "image" ? "toggleControls" : false;
        },
       // Clicked on the slide
        clickSlide: "close",
    });
});