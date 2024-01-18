document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".atf-video");

  if (video) {
    const controlsWrapper = document.querySelector(".video_controls-wrapper");
    const videoButton = document.querySelector(".video-button");
    const buttonIconPlay = document.querySelector(".video-button_icon.is-play");
    const buttonIconPause = document.querySelector(
      ".video-button_icon.is-pause"
    );
    const soundButton = document.querySelector(".sound-button");
    const soundButtonText = document.querySelector(".sound-button_text");
    const soundIconOn = document.querySelector(".sound-button_icon.is-on");
    const soundIconOff = document.querySelector(".sound-button_icon.is-off");
    const overlayScreen = document.querySelector(
      ".video-controls_overlay-screen"
    );

    function hideUiElements() {
      videoButton.style.opacity = 0;
      overlayScreen.style.opacity = 0;
    }

    function showUiElements() {
      videoButton.style.opacity = 1;
      overlayScreen.style.opacity = 0.6; // (LS): This is needed to let the video show through.
    }

    if (video.autoplay) {
      hideUiElements();
      // (LS): Show pause button.
      buttonIconPlay.style.opacity = 0;
      buttonIconPause.style.opacity = 1;
    }

    videoButton.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        buttonIconPlay.style.opacity = 0;
        buttonIconPause.style.opacity = 1;
      } else {
        video.pause();
        buttonIconPlay.style.opacity = 1;
        buttonIconPause.style.opacity = 0;
      }
    });

    video.addEventListener("play", () => hideUiElements());
    video.addEventListener("pause", () => showUiElements());
    controlsWrapper.addEventListener("mouseenter", showUiElements);
    controlsWrapper.addEventListener("touchstart", showUiElements);
    controlsWrapper.addEventListener("blur", () => {
      if (!video.paused) {
        hideUiElements();
      }
    });
    controlsWrapper.addEventListener("mouseleave", () => {
      if (!video.paused) {
        hideUiElements();
      }
    });

    soundButton.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        soundButtonText.textContent = "Sound On";
        soundIconOn.style.display = "block";
        soundIconOff.style.display = "none";
      } else {
        video.muted = true;
        soundButtonText.textContent = "Sound Off";
        soundIconOn.style.display = "none";
        soundIconOff.style.display = "block";
      }
    });
  }
});
