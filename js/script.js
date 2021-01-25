var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,
    speed: 2000,
    autoplay: {
        delay: 2000,
    },
    effect: 'cube',

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

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

    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $('.toTop').fadeIn();
        }else{
            $('.toTop').fadeOut();
        }
    });
    lightbox.option({
        'resizeDuration': 2000,
        'wrapAround': true,
        'imageFadeDuration':400,
    })
});