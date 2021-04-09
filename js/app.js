const testimonialsSlider = new Swiper('.testimonials-slider', {

    breakpoints: {
          slidesPerView: 'auto',
          centeredSlides: true,
        },

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
    nextEl: '.arrow-left',
    prevEl: '.arrow-right',
  },
  });
