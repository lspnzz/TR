document.addEventListener("DOMContentLoaded", () => {
  const instaFeed = document.querySelector(".swiper.is-insta-feed");

  if (instaFeed) {
    const instaSlider = new Swiper(instaFeed, {
      slidesPerView: "auto",
      speed: 1000,
      grabCursor: true,
      keyboard: true,
      mouseWheel: {
        forceToAxis: true,
      },
    });
  }
});
