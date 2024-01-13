window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageToBeClipped = document.getElementById("clipped-image");

  gsap.fromTo(
    imageToBeClipped,
    {
      clipPath: "polygon(0% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%)",
    },
    {
      scrollTrigger: {
        trigger: imageToBeClipped,
        start: "top 80%",
        end: "top 20%",
        once: true,
      },

      clipPath: "polygon(0% 30%, 50% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
    }
  );
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Select all elements with the class '.section_image'
  document.querySelectorAll(".section_image").forEach((image) => {
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        end: "top center",
        scrub: true,
        once: true,
      },
      padding: "0rem",
      duration: 2,
      ease: "linear",
    });
  });
});
