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
})