/*golbal $, alert, console*/
$(function () {

    'use strict';

    $('.header').height($(window).height());

    $(window).resize(function () {

        $('.header').height($(window).height());


    });

    $('.menu li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');



    });

});


//start smooth scroll


$('.menu li a').click(function () {
    "use strict";
    $('html, body').animate({
     
        
        scrollTop: $('#' + $(this).data('value')).offset().top
        
    }, 1000);
    
    $('#container').mixItUp();
     
    
});


//trigger mixitup





