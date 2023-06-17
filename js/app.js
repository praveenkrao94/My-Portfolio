

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    // direction: 'vertical',
    // spaceBetween: 24,
    speed: 1000,
    loop: true,

    // If we need pagination
    pagination: {
        clickable: true,
    },

    // Navigation arrows
    navigation: {

        prevEl: '.swiper-button-next',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            // spaceBetween: 50,
        },
    },
});



// --------------------------------------------------------------------------------------------------------------------------






