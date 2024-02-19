$(function () {

    var mainSlide = new Swiper('.main_slide_wrap ', {
        effect: "fade",



        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,	//슬라이드 중앙 배치
        loop: true,	//슬라이드 반복
    });

    // var subSlide = new Swiper(' .sub-slide ', {

    //     spaceBetween: 30,	//슬라이드 간격 
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     centeredSlides: false,	//슬라이드 중앙 배치
    //     loop: true,	//슬라이드 반복
    //     loopedSlides: swiperSubNum.length, //loop 시 파라미터 duplicate 개수


    // });
});