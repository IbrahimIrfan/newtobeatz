$(document).on("ready", function() {
    /*           */
    /* FUNCTIONS */
    /*           */

    //scroll to anchor
    function scrollToAnchor(tag) {
        $('html,body').animate({
            scrollTop: tag.offset().top
        }, 1000);
    }

    // move slightly up while fading into view
    function fadeInAnimation(elem) {
        elem.css("top", "+=30px");
        elem.animate({
            'opacity': '1',
            'top': '-=30px'
        }, 1000);
    }

    //fade in object if scrolled to
    function checkFadeIn() {
        $('.fadeIn').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object && $(this).css("opacity") == "0") {
                fadeInAnimation($(this));
                $(this).removeClass("fadeIn");
            }
        });
    }

    /*            */
    /*    MAIN    */
    /*            */
    checkFadeIn();
    // on window scroll, fade item if in view and remove background if passed
    $(window).scroll(function() {
        checkFadeIn();
    });

    // red arrow and text on hover, else white
    $('#downArrowWrapper').hover(function() {
        $('#downArrow g path').css("fill", "green");
        $('figcaption').css("color", "green");
    }, function() {
        $('#downArrow g path').css("fill", "white");
        $('figcaption').css("color", "white");
    });

    // scroll to second section if arrow clicked
    $('#downArrowWrapper').on("click", function() {
        scrollToAnchor($('.second'));
    });
});
