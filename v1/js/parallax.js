/*
    Parallax scrolling
*/

$(document).ready(function(){
    // Cache the Window object
    $window = $(window);
    $loc = $('.loc');
    $title = $('.title');

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    $('.loc').each(function(){
        var $loc = $(this);

        $(window).scroll(function() {

            $loc.stop().animate({"marginTop": -($(window).scrollTop()) + "px"}, "slow" );

        });
    });

    $('.title').each(function(){
        var $title = $(this);

        $(window).scroll(function() {

            $title.stop().animate({"marginTop": -($(window).scrollTop()) + "px"}, "slow" );

        });
    });


});
/*
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");
