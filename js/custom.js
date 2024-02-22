$(function () {
    AOS.init();

    var mainSlide = new Swiper('.main_slide_wrap ', {
        effect: "coverflow",
        centeredSlides: true,
        spaceBetween: 100,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.header_bottom .gnb li').on('mouseenter',
        function () {
            $('.header_bottom .gnb li').removeClass('on');
            $(this).addClass('on');
        })


});
