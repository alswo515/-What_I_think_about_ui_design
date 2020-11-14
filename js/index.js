(function($){


    $('.site_main img').hover(
        function(){
            $('.site_main').fadeOut(200)
        },function(){
            $('.siteMainOn canvas').fadeIn(500)
            $('.multi_rolling').fadeIn(1500)
        }
    )
    
    $('main button').on('click',function(){
        $('.siteMainOn canvas, .multi_rolling').fadeOut(500);
        $('.site_main').fadeIn(200);
    })


    $(".multi_visual").slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 간격시간
        dots: false, // 동그라미버튼
        speed: 600, // 바뀌는시간(생략가능)
        centerMode: true,
        centerPadding: "80px",
        slidesToShow: 3, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear', // 속도함수(생략가능)
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows: true, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{
                breakpoint: 800,
                settings: {
                        centerMode: true,
                        centerPadding: "100px",
                        slidesToShow: 1, // 보여질슬라이드수(생략가능)
                }
        }]
    })



})(jQuery)