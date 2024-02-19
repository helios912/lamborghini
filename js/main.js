const menuBTN = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBTN.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breackpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  // And if we need scrollbar
});
