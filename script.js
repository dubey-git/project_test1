window.addEventListener("load", () => {
  const imposterSound = document.getElementById("imposterSound");
  const breakingSound = document.getElementById("breakingSound");
  const mirror = document.getElementById("mirror");
  const brokenMirror = document.getElementById("brokenMirror");
  const message = document.getElementById("message");
  const ukhda = document.getElementById("ukhda");
  const birthday = document.getElementById("birthday");
  const videoWrapper = document.getElementById("videoWrapper");
  const verifyButton = document.getElementById("verifyButton");

  verifyButton.addEventListener("click", () => {
    verifyButton.style.display = "none";
    imposterSound.play();

    setTimeout(() => {
      mirror.style.display = "none";
      brokenMirror.style.display = "block";
      message.style.display = "none";
      ukhda.style.display = "block";
      birthday.style.display = "block";

      breakingSound.play();

      setTimeout(() => {
        brokenMirror.style.display = "none";
        ukhda.style.display = "none";
        birthday.style.display = "none";
        videoWrapper.style.display = "flex";
        videoWrapper.innerHTML = "";

        const oiaVideo = document.createElement("video");
        oiaVideo.id = "oiaVideo";
        oiaVideo.controls = true;
        oiaVideo.autoplay = true;

        const source = document.createElement("source");
        source.src = "oia.mp4";
        source.type = "video/mp4";

        oiaVideo.appendChild(source);
        videoWrapper.appendChild(oiaVideo);

        // WHEN OIA VIDEO ENDS → trigger next slide
        oiaVideo.addEventListener("ended", () => {
          oiaVideo.pause();
          oiaVideo.src = "";
          videoWrapper.innerHTML = "";
          videoWrapper.style.display = "none";
          document.getElementById("nameSlide").style.display = "block";
        });
      }, 4000);
    }, 5000);
  });
});

// Slide 2 logic
function submitName() {
  const name = document.getElementById("nameInput").value.trim();
  const catImg = document.getElementById("catImage");

  if (!name) return;

  document.getElementById("nameInput").disabled = true;
  document.querySelector("#nameSlide button").disabled = true;

  const startsWithA = name[0].toLowerCase() === 'a';

  if (startsWithA) {
    catImg.src = "cat_3.webp";
    setTimeout(() => {
      catImg.src = "cat_5.webp";
      setTimeout(showWelcomeVideo, 4000);
    }, 4000);
  } else {
    catImg.src = "cat_2.webp";
    setTimeout(() => {
      catImg.src = "cat_3.webp";
      setTimeout(() => {
        catImg.src = "cat_5.webp";
        setTimeout(showWelcomeVideo, 4000);
      }, 4000);
    }, 4000);
  }
}

function showWelcomeVideo() {
  document.getElementById("nameSlide").style.display = "none";
  const wrapper = document.getElementById("welcomeWrapper");
  wrapper.style.display = "flex";

  const video = document.createElement("video");
  video.src = "welcome.mp4";
  video.autoplay = true;
  video.controls = true;
  video.style.width = "80%";
  video.style.maxWidth = "640px";
  video.style.borderRadius = "12px";
  video.style.boxShadow = "0 6px 16px rgba(255, 255, 255, 0.3)";

  // Fix: Attach the "ended" event listener right here
  video.addEventListener("ended", () => {
    video.pause();
    video.src = "";
    wrapper.innerHTML = "";
    wrapper.style.display = "none";
    showChoiceSlide();
  });

  wrapper.innerHTML = "";
  wrapper.appendChild(video);
}
// After welcome.mp4 ends → start choice slide
function showChoiceSlide() {
  document.getElementById("welcomeWrapper").style.display = "none";
  document.getElementById("choiceSlide").style.display = "block";
}

function handleChoice(answeredYes) {
  const catImg = document.getElementById("catChoiceImage");
  const buttons = document.querySelectorAll("#choiceSlide button");

  buttons.forEach(btn => btn.disabled = true);

  if (answeredYes) {
    catImg.src = "cat_7.webp";
  } else {
    catImg.src = "cat_8.webp";
  }

  setTimeout(() => {
    document.getElementById("choiceSlide").style.display = "none";
    showDreamVideo();
  }, 5000);
}

function showDreamVideo() {
  const dream = document.getElementById("dreamWrapper");
  dream.style.display = "flex";

  const video = document.createElement("video");
  video.src = "dream.mp4";
  video.autoplay = true;
  video.controls = true;
  video.style.width = "80%";
  video.style.maxWidth = "640px";
  video.style.borderRadius = "12px";
  video.style.boxShadow = "0 6px 16px rgba(255,255,255,0.3)";

  dream.appendChild(video);

  video.addEventListener("ended", () => {
    video.pause();
    video.src = "";
    dream.innerHTML = "";
    dream.style.display = "none";
    showLoveVideo();
  });
}

function showLoveVideo() {
  const love = document.getElementById("loveWrapper");
  love.style.display = "flex";

  const video = document.createElement("video");
  video.src = "love.mp4";
  video.autoplay = true;
  video.controls = true;
  video.style.width = "80%";
  video.style.maxWidth = "640px";
  video.style.borderRadius = "12px";
  video.style.boxShadow = "0 6px 16px rgba(255,255,255,0.3)";

  video.addEventListener("ended", () => {
    video.pause();
    video.src = "";
    love.innerHTML = "";
    love.style.display = "none";
    showCat9Slide();
  });

  love.appendChild(video);
}

// trigger choiceSlide only after welcome video ends
document.addEventListener("DOMContentLoaded", () => {
  const welcomeWrapper = document.getElementById("welcomeWrapper");
  const video = welcomeWrapper.querySelector("video");
  if (video) {
    video.addEventListener("ended", showChoiceSlide);
  }
});
function showCat9Slide() {
  document.getElementById("loveWrapper").innerHTML = "";
  document.getElementById("loveWrapper").style.display = "none";

  document.getElementById("cat9Slide").style.display = "block";
  const audio = document.getElementById("stfuSound");
  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("cat9Slide").style.display = "none";
    showNikloVideo();
  }, 5000);
}

function showNikloVideo() {
  const wrapper = document.getElementById("nikloWrapper");
  wrapper.style.display = "flex";

  const video = document.createElement("video");
  video.src = "niklo.mp4";
  video.autoplay = true;
  video.controls = true;
  video.style.width = "80%";
  video.style.maxWidth = "640px";
  video.style.borderRadius = "12px";
  video.style.boxShadow = "0 6px 16px rgba(255,255,255,0.3)";

  video.addEventListener("ended", () => {
    video.pause();
    video.src = "";
    wrapper.innerHTML = '<div class="video-text">jaa rha hu 🙏🏻</div>';
    wrapper.style.display = "none";
    showPoemSlides();
  });

  wrapper.innerHTML = '<div class="video-text">jaa rha hu 🙏🏻</div>';
  wrapper.appendChild(video);
}

function showPoemSlides() {
  const slide = document.getElementById("poemSlide");
  const img = document.getElementById("poemImage");
  const btn = document.getElementById("nextPoem");

  slide.style.display = "block";
  let index = 1;

  btn.onclick = () => {
    index++;
    if (index === 2) {
      img.src = "poem_2.webp";
    } else if (index === 3) {
      img.src = "poem_3.webp";
    } else {
      slide.style.display = "none";
      showSorryVideo();
    }
  };
}

function showSorryVideo() {
  const wrapper = document.getElementById("sorryWrapper");
  wrapper.style.display = "flex";

  const video = document.createElement("video");
  video.src = "sorry.mp4";
  video.autoplay = true;
  video.controls = true;
  video.style.width = "80%";
  video.style.maxWidth = "640px";
  video.style.borderRadius = "12px";
  video.style.boxShadow = "0 6px 16px rgba(255,255,255,0.3)";

  video.addEventListener("ended", () => {
    video.pause();
    video.src = "";
    wrapper.innerHTML = "";
    wrapper.style.display = "none";
    showLastSlide();
  });

  wrapper.appendChild(video);
}

function showLastSlide() {
  document.getElementById("lastSlide").style.display = "block";
}