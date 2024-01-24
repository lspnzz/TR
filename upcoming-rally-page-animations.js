document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const atfImageWrapper = document.querySelector(
    ".image-wrapper.is-upcoming-rally-atf-image"
  );
  const pageTitle = document.querySelector(".atf-heading");
  const pageTitleOverline = document.querySelector(
    ".upcoming-rally_dates-wrapper"
  );
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
        x: "-7.5%",
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
    )
    .from(
      pageTitleOverline,
      {
        y: "40%",
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

  // (LS): Shrink atf image after scrolling.
  gsap.fromTo(
    atfImageWrapper,
    { marginLeft: "-10%", marginRight: "-10%", width: "120%" },
    {
      marginLeft: "0%",
      marginRight: "0%",
      width: "100%",
      duration: 1.75,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: atfImageWrapper,
        start: "top 30%",
        markers: true,
      },
    }
  );
});
