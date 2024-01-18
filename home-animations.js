window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);

  const videoWrapperAtf = document.querySelector(".atf-video_wrapper");
  const trLogoAtf = document.querySelector("#tr-logo-atf");
  const navbarLinks = document.querySelectorAll(".navbar_link");
  const navbarLineHorizontal = document.querySelector(
    "#section-line-horizontal-navbar"
  );
  const navbarHighlight = document.querySelector(".navbar_highlight");

  const openingTl = gsap.timeline({
    defaults: {
      duration: 1.75,
      ease: "circ.inOut",
    },
  });

  // (LS): Video wrapper animation.
  openingTl
    .from(
      videoWrapperAtf,
      {
        width: "140%",
        x: "-15%",
        y: "-20%",
      },
      "<"
    )
    .fromTo(
      videoWrapperAtf,
      {
        clipPath:
          "polygon(0% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath:
          "polygon(0% 30%, 50% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 100%)",
      },
      "<"
    );

  // (LS): Navbar animation.
  openingTl
    .from(
      navbarLineHorizontal,
      {
        right: "auto",
      },
      "0"
    )
    .from(
      navbarLinks,
      {
        opacity: 0,
        y: "1rem",
        stagger: 0.1,
      },
      "<"
    )
    .from(navbarHighlight, { scaleX: 0, opacity: 0 }, "<+0.4");

  openingTl.from(trLogoAtf, { y: "3rem" }, "0");
});

// window.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   // Select all elements with the class '.section_image'
//   document.querySelectorAll(".section_image").forEach((image) => {
//     gsap.to(image, {
//       scrollTrigger: {
//         trigger: image,
//         start: "top 80%",
//         end: "top center",
//         scrub: true,
//         once: true,
//       },
//       padding: "0rem",
//       duration: 2,
//       ease: "linear",
//     });
//   });
// });
