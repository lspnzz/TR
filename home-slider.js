let sliderWrap = document.querySelector(".home-slider_wrapper");
if (sliderWrap) {
  let childArrow = sliderWrap.querySelectorAll(".home-slider_button");
  let childItems = sliderWrap.querySelectorAll(".home-slider_slide");
  childItems.forEach((item) => (item.style.display = "none"));
  let childDots = sliderWrap.querySelectorAll(".home-slider_dot-slide");
  let totalSlides = childItems.length;
  let activeIndex = 0;

  childItems[0].style.display = "flex";
  gsap.set(childDots[0].querySelector(".home-slider_dot-line"), { x: "0%" });

  let sliderTimeline = gsap.timeline({ repeat: -1 });
  childDots.forEach(function (dot, index) {
    sliderTimeline.addLabel(`step${index}`);
    sliderTimeline.from(dot.querySelector(".home-slider_dot-line"), {
      x: "-100%",
      ease: "none",
      duration: 4, // (LS): Time for which a slide is shown.
      onComplete: () => {
        goNext(index + 1);
      },
    });
  });

  function moveSlide(nextIndex, forwards) {
    let dotMoveOutTimeline = gsap.timeline();
    dotMoveOutTimeline.fromTo(
      childDots[activeIndex].querySelector(".home-slider_dot-line"),
      { x: "0%" },
      { x: "100%" }
    );

    sliderTimeline.seek(`step${nextIndex}`);

    childItems.forEach((item) => (item.style.display = "none"));
    let prevItem = childItems[activeIndex];
    prevItem.style.display = "flex";
    let nextItem = childItems[nextIndex];
    nextItem.style.display = "flex";
    let slideTransitionTimeline = gsap.timeline({
      defaults: { duration: 1.75, ease: "circ.inOut" },
    });
    if (forwards) {
      slideTransitionTimeline.fromTo(
        nextItem,
        { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)" }
      );
      slideTransitionTimeline.fromTo(
        prevItem,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)" },
        "<"
      );
    } else {
      slideTransitionTimeline.fromTo(
        nextItem,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)" }
      );
      slideTransitionTimeline.fromTo(
        prevItem,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)" },
        "<"
      );
    }
    activeIndex = nextIndex;
  }

  // (LS): Slider buttons.
  function goNext(num) {
    let nextIndex = num;
    if (nextIndex > totalSlides - 1) nextIndex = 0;
    moveSlide(nextIndex, true);
  }

  // (LS): Next slide.
  childArrow.forEach((arrow) => {
    if (arrow.classList.contains("is-next")) {
      arrow.addEventListener("click", function () {
        goNext(activeIndex + 1);
      });
    }
  });

  // (LS): Previous slide.
  childArrow.forEach((arrow) => {
    if (arrow.classList.contains("is-prev")) {
      arrow.addEventListener("click", function () {
        let nextIndex = activeIndex - 1;
        if (nextIndex < 0) nextIndex = totalSlides - 1;
        moveSlide(nextIndex, false);
      });
    }
  });

  // (LS): Go to slide when clicking dots.
  childDots.forEach((dot) => {
    dot.addEventListener("click", function () {
      let dotIndex = Array.from(childDots).indexOf(dot);
      if (activeIndex > dotIndex) {
        moveSlide(dotIndex, false);
      } else if (activeIndex < dotIndex) {
        moveSlide(dotIndex, true);
      }
    });
  });
}
