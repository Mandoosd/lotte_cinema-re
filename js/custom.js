$(function () {

    var mainSlide = new Swiper('.main_slide_wrap ', {
        effect: "coverflow",
        grabCursor: true,
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
        centeredSlides: true,	//슬라이드 중앙 배치
        loop: true,	//슬라이드 반복
    });


    $('.header_bottom .gnb li').on('mouseenter',
        function () {
            $('.header_bottom .gnb li').removeClass('on');
            $(this).addClass('on');
        })


});