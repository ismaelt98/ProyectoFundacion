/* NavBar*/
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


/*Swiper*/
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
// Popup 1//
const novedades = document.querySelector(".section"),
    moreBtn1 = novedades.querySelector("#moreBtn1"),
    lessBtn1 = novedades.querySelector("#lessBtn1");
    
    moreBtn1.addEventListener("click", () => {
        novedades.classList.add("show");
    });

    lessBtn1.addEventListener("click", () =>{
            novedades.classList.remove("show");
});

//Popup 2//
    moreBtn2 = novedades.querySelector("#moreBtn2"),
    lessBtn2 = novedades.querySelector("#lessBtn2");
    
    moreBtn2.addEventListener("click", () => {
        novedades.classList.add("show");
    });

    lessBtn2.addEventListener("click", () =>{
            novedades.classList.remove("show");
});
//Popup 3//
moreBtn3 = novedades.querySelector("#moreBtn3"),
lessBtn3 = novedades.querySelector("#lessBtn3");

moreBtn3.addEventListener("click", () => {
    novedades.classList.add("show");
});

lessBtn3.addEventListener("click", () =>{
        novedades.classList.remove("show");
});
//Popup 4//
moreBtn4 = novedades.querySelector("#moreBtn4"),
lessBtn4 = novedades.querySelector("#lessBtn4");

moreBtn4.addEventListener("click", () => {
    novedades.classList.add("show");
});

lessBtn4.addEventListener("click", () =>{
        novedades.classList.remove("show");
});

