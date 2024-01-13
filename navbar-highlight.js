window.addEventListener("DOMContentLoaded", () => {
  const navbarLinkHome = document.getElementById("navbar-link-home");
  const navbarLinkRallies = document.getElementById("navbar-link-rallies");
  const navbarLinkSponsors = document.getElementById("navbar-link-sponsors");
  const allLinks = [navbarLinkHome, navbarLinkRallies, navbarLinkSponsors];
  const navbarLinkHighlight =
    document.getElementsByClassName("navbar_highlight")[0];

  const animationDuration = 0.2;
  const animationEase = "power4.out";

  let initialMarginLeft = "-32rem";

  // Set initial position based on "current" class
  if (navbarLinkRallies.classList.contains("w--current")) {
    initialMarginLeft = "0rem";
  }
  if (navbarLinkSponsors.classList.contains("w--current")) {
    initialMarginLeft = "32rem";
  }
  gsap.set(navbarLinkHighlight, { marginLeft: initialMarginLeft });

  // Function to animate highlight to a link
  const animateToLink = (marginLeft) => {
    gsap.to(navbarLinkHighlight, {
      marginLeft,
      duration: animationDuration,
      ease: animationEase,
    });
  };

  // Add mouseover and focus event listeners
  navbarLinkHome.addEventListener("mouseover", () => animateToLink("-32rem"));
  navbarLinkHome.addEventListener("focus", () => animateToLink("-32rem"));

  navbarLinkRallies.addEventListener("mouseover", () => animateToLink("0rem"));
  navbarLinkRallies.addEventListener("focus", () => animateToLink("0rem"));

  navbarLinkSponsors.addEventListener("mouseover", () =>
    animateToLink("32rem")
  );
  navbarLinkSponsors.addEventListener("focus", () => animateToLink("32rem"));

  // Add mouseout and blur event listeners
  allLinks.forEach((link) => {
    link.addEventListener("mouseout", () => animateToLink(initialMarginLeft));
    link.addEventListener("blur", () => animateToLink(initialMarginLeft));
  });
});
