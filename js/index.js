(function($){


    $('.site_main img').hover(
        function(){
            $('.site_main').fadeOut(200)
        },function(){
            $('.siteMainOn canvas').fadeIn(500)
        }
    )
    
    $('main button').on('click',function(){
        $('.siteMainOn canvas').fadeOut(500);
        $('.site_main').fadeIn(200);
    })

    $('.slide-inner').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 4500,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        cssEase: 'ease',
        draggable: true, //드래그 해서 화면이 바뀌냐 안바뀌냐 모바일에서는 손으로 밀어도 되는것
        fade: false,
        arrows: true,
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{ //자바스크립트에서 주는 반응형 디자인
            breakpoint: 801, //801미만 사이즈
            settings: {
                arrows: false,
                fade: true
            }
        }]
    })



})(jQuery)