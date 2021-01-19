$(document).ready(function () {
    $('.pulldown').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().siblings().find('ul').slideUp();
        
    });

    $('.toTop a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },1000)
    });
    lightbox.option({
        'resizeDuration': 2000,
        'wrapAround': true,
        'imageFadeDuration':400,
    })
});
  