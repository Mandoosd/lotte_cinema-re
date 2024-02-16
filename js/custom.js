$(function () {
    var swiperTopNum = $('.main-slide').find('.swiper-slide');
    var swiperSubNum = $('.sub-slide').find('.sub-slide');

    var mainSlide = new Swiper('.main-slide ', {
        effect: "fade",
        spaceBetween: 30,	//슬라이드 간격
        loop: true,	//슬라이드 반복
        loopedSlides: swiperTopNum.length

    });

    var subSlide = new Swiper(' .sub-slide ', {

        spaceBetween: 30,	//슬라이드 간격 
        centeredSlides: false,	//슬라이드 중앙 배치
        slidesPerView: '3',	//한번에 보여지는 슬라이드 개수
        loop: true,	//슬라이드 반복
        loopedSlides: swiperSubNum.length, //loop 시 파라미터 duplicate 개수


        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    mainSlide.controller.control = subSlide;
    subSlide.controller.control = mainSlide;

});