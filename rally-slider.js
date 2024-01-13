window.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("slider-button-next");
  const prevButton = document.getElementById("slider-button-prev");

  const slider = new Swiper(".swiper.is-upcoming-rallies-slider", {
    slidesPerView: "auto",
    centeredSlides: true, // (LS): This is for mobile.
    speed: 1000,
    slideActiveClass: "is-active",
    grabCursor: true,
    // allowTouchMove: true,
    keyboard: true,
    mouseWheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
      disabledClass: "is-disabled",
    },
    breakpoints: {
      // (LS): When window width is >= 767px
      767: {
        centeredSlides: false,
      },
    },
    on: {
      //   beforeSlideChangeStart: activeSlideAnimationReset,
      //   slideChangeTransitionEnd: activeSlideAnimationTransition,

      reachEnd: function () {
        // (LS): this fixes the "last slide not active" issue when two slides are in view at the same time.
        this.snapGrid = [...this.slidesGrid];
      },
    },
  });
});
