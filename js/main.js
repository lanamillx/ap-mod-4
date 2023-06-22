function router(pageLinks, pages, hash = window.location.href) {
    rout = "#" + hash.split("#")[1];
    pageLinks.forEach(el => el.classList.remove("active"));
    pages.forEach(el => el.classList.remove("active"));
    pageLinks.forEach((el, i) => {
        if (rout === el.getAttribute("href")) {
            let page = document.querySelector(`[data-router-page="${rout}"]`);
            document.querySelector(".header__burger-input").checked = false
            el.classList.add("active");
            page.classList.add("active");
        }
    });

}

document.addEventListener("DOMContentLoaded", () => {
    const pageLinks = document.querySelectorAll(".router-link");
    const pages = document.querySelectorAll(".page");

    router(pageLinks, pages);

    window.addEventListener("hashchange", (e) => {
        router(pageLinks, pages, e.newURL);
    });

    // goods-modal fav
    const favorite = document.querySelector(".goods-modal__fav");

    favorite.addEventListener("click", () => {
        favorite.classList.toggle("active");
    })


    // goods-modal size
    const sizes = document.querySelectorAll(".goods-modal__size-variants-item");
    const sizeCount = document.querySelector(".goods-modal__size span");

    sizes.forEach(el => {
        el.addEventListener("click", () => {
            sizes.forEach(el => el.classList.remove("active"));
            el.classList.add("active");
            sizeCount.textContent = el.getAttribute("data-size-value")
        })
    })


    if (window.innerWidth <= 1200) {
        const mobMenu = document.querySelector(".header__menu");
        const mobMenuBtn = document.querySelector(".header__burger");

        mobMenuBtn.addEventListener("click", (e) => {
            mobMenu.classList.toggle("active");
            mobMenuBtn.classList.toggle("active");
        })
    }

    const slider1 = new Swiper(".news__slider", {
        slidesPerView: 3.3,
        slidesPerScroll: 1,
        spaceBetween: 8,
        loop: true,
        navigation: {
            nextEl: ".slider-nav__btn-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: true

            },

            768: {
                slidesPerView: 3.3,
                centeredSlides: false
            }


        }
    });

    new Swiper(".fests__slider", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".slider-pagination"
        },
        responsive: {
            0: {
                navigation: false,
            },

            768: {
                navigation: {
                    nextEl: ".slider-nav__btn-next",
                    prevEl: ".slider-nav__btn-prev"
                },

            }
        }
    });

    new Swiper(".about-building__slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: true,
        coverflowEffect: {
            rotate: 79,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".slider-pag"
        }
    })

    const leedForm = document.querySelector(".leed-modal__form");
    const leedThanks = document.querySelector(".leed-modal__thanks");

    leedForm.addEventListener("submit", (e) => {
        e.preventDefault();

        leedForm.classList.toggle("active");
        leedThanks.classList.toggle("active");
    });

    const cursorRounded = document.querySelector('.rounded');
    const cursorPointed = document.querySelector('.pointed');
    let mouseY;
    let mouseX;
    const moveCursor = (e) => {
        if (e.clientY != undefined) {
            mouseY = e.clientY -15; 
            mouseX = e.clientX -15;
        }
        console.log(e)

        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY + scrollY}px, 0)`;
        switch (e.target.localName) {
            case "a":
                cursorRounded.classList.add("active");
                break;
            case "button":
                cursorRounded.classList.add("active");
                break;
            case "input":
                cursorRounded.classList.add("active");
                break;
            case "label":
                cursorRounded.classList.add("active");
                break;
            case "select":
                cursorRounded.classList.add("active");
                break;
            default:
                cursorRounded.classList.remove("active");
                break;
        }
    }
    window.addEventListener('scroll', moveCursor)
    window.addEventListener('mousemove', moveCursor)

})