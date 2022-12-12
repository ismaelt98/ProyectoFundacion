$(document).ready(function(){
    $(".wellcome").css({"height":$(window).height() + "px"})

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll>50){
            if(!flag){
                $("#logo").css({"margin-top": "-5px", "width": "50px", "height": "50px"});

                $("header").css({"background-color": "#ff1493"});
                flag = true;
            }
        }else{
            if(flag){
                $("#logo").css({"margin-top": "80px", "width": "150px", "height": "150px"});
                $("header").css({"background-color": "transparent"});
                flag = false;
            }
        }
    });
});
$('.element').each(function() {
    $(this).mouseover(function() {
        $(this).addClass('active');
    $('.stage').children('.element').not('.active').addClass('inactive');
    });
    $(this).mouseleave(function() {
        $(this).removeClass('active');
        $('.stage').children('.element').not('.active').removeClass('inactive');
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
});

const novcontent = document.querySelector(".nov-content"),
    moreboton = novedades.querySelector("#moreboton"),
    closeboton = novedades.querySelector("#close");
    
    moreboton.addEventListener("click", () => {
        novcontent.classList.add("show");
    });

    closeboton.forEach(cBt => {
        closeboton.addEventListener("click", () =>{
            novedades.classList.remove("show");
        });
    });