(function($){


    $('.site_main img').hover(
        function(){
            $('.site_main').fadeOut(100)
            $('main button').fadeIn(100)
        },function(){
            $('main canvas').fadeIn(100)
        }
    )
    
    $('main button').on('click',function(){
        $('main canvas').fadeOut(100);
        $('.site_main').fadeIn(100)
    })
    //논리값 변환시키기
    if( $('.site_main img').fadeIn() ){
        $('main button').fadeOut(100)
    }

    $(".multi_visual").slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 간격시간
        dots: false, // 동그라미버튼
        speed: 600, // 바뀌는시간(생략가능)
        centerMode: true,
        centerPadding: "80px",
        slidesToShow: 3, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: false, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: false, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
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