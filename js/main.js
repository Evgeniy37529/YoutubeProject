const swiper = new Swiper('.channel-slider', {
    // Optional parameters
        loop: true,  
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }, 
    
  },
    // Navigation arrows
    navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    },
    slidesPerView: 6,

  });
 
//sliderForRecommended

const swiperForRecommended = new Swiper('.recommended-slider', {
    // Optional parameters
        loop: true,  
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
   
    1600: {
      slidesPerView: 3
    },
    
    1100: {
        slidesPerView: 3
    }, 
  },
    // Navigation arrows
    navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
    },
    slidesPerView: 3,

  });

  //sliderForRecommendedChannel

  const ForRecommendedChannel = new Swiper('.recommendedChannel-slider', {
    // Optional parameters
        loop: true,  
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }, 
    
  },
    // Navigation arrows
    navigation: {
    nextEl: '.recommendedChannel-button-next',
    prevEl: '.recommendedChannel-button-prev',
    },
    slidesPerView: 6,

  });