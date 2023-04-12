/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");
    // When scroll greater that 50 viewport height add scroll-header class
    this.scrollY >= 50 ? header.classList.add("scroll-header") : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
            spaceBetween: 72,
        }
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav__menu a[href*= " + sectionId + "]");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") : scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
