const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  slidesPerView: 2,
  spaseBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },

  // And if we need scrollbar
});
