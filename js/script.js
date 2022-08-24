const btn = document.querySelector( ".hero-btn button")
btn.addEventListener("click",() => {
    document.querySelector(".hero-modal").style.display= "block"
})
const btnClose = document.querySelector( ".hero-modal-block-square-close")
btnClose.addEventListener("click",() => {
    document.querySelector(".hero-modal").style.display= "none"
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});