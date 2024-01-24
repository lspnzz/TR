document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const atfImageWrapper = document.querySelector(".section_image-wrapper");
  const pageTitle = document.querySelector("#atf-heading");
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

  // (LS): ATF animation.
  openingTl
    .from(
    atfImageWrapper,
    {
      width: "140%",
      x: "-15%",
      y: "-20%",
    },
    "<"
  )
    .from(
    pageTitle,
    {
      y: "20%",
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
