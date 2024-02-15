// Script for Mobile Navigation
const slide_mobile_case = new Swiper(".slide-cases-mobile", {
  slidesPerView: 1,
  speed: 600,
  pagination: {
    el: ".s-cases .container .slide-cases-mobile .swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },
  // ...
  on: {
    init: function () {
      console.log("swiper initialized");
    },
  },
});

// Script slide image cases
const slide_image_cases = new Swiper(".slide-image-cases", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  loop: !0,
  centeredSlides: !0,
  watchSlidesVisibility: !0,
  watchSlidesProgress: !0,
  pagination: {
    el: ".s-cases .ctrl-slide .pagination-box-cases",
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev",
  },
});

// Script for Slide About Cases
const slide_about_case = new Swiper(".slide-about-case", {
  spaceBetween: 40,
  direction: "vertical",
  loop: false,
  pagination: {
    el: ".s-cases .ctrl-slide .page-fraction",
    type: "fraction",
    clickable: false,
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev",
  },
  simulateTouch: !1,
  thumbs: {
    swiper: slide_image_cases,
  },
});

// Add class active to menu button
const menuButton = document.getElementById("js-menu-button");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active"); // add the CSS configuration on this button
    document.documentElement.classList.toggle("menu-opened");
  });
}
// Close menu button when clicks to the links
const menuMobileNav = document.querySelectorAll(".js-menu-mobile li a");
menuMobileNav.forEach((item) => {
  item.addEventListener("click", function () {
    document.documentElement.classList.remove("menu-opened");
    menuButton.classList.remove("is-active");
  });
});

const btnScrollTop = document.getElementById("js-scroll-top");
const imgBtnScrollTop = document.getElementById("js-img-footer");
if (btnScrollTop) {
  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }),
      imgBtnScrollTop.setAttribute(
        "src",
        "./assets/icons/icon-arrow-up-footer.svg"
      );
  }),
    btnScrollTop.addEventListener("mouseover", () => {
      imgBtnScrollTop.setAttribute(
        "src",
        "./assets/icons/icon-arrow-up-footer-black.svg"
      );
    }),
    btnScrollTop.addEventListener("mouseleave", () => {
      imgBtnScrollTop.setAttribute(
        "src",
        "./assets/icons/icon-arrow-up-footer.svg"
      );
    });
}
