window.addEventListener("load", () => {
    const imposterSound = document.getElementById("imposterSound");
    const breakingSound = document.getElementById("breakingSound");
    const mirror = document.getElementById("mirror");
    const brokenMirror = document.getElementById("brokenMirror");
    const message = document.getElementById("message");
    const ukhda = document.getElementById("ukhda");
    const birthday = document.getElementById("birthday");
    const videoWrapper = document.getElementById("videoWrapper");
  
    // Play imposter sound on load
    imposterSound.play();
  
    setTimeout(() => {
      // Switch to broken mirror
      mirror.style.display = "none";
      brokenMirror.style.display = "block";
      message.style.display = "none";
      ukhda.style.display = "block";
      birthday.style.display = "block";
  
      breakingSound.play();
  
      // After 4 seconds, show video
      setTimeout(() => {
        brokenMirror.style.display = "none";
        ukhda.style.display = "none";
        birthday.style.display = "none";
        videoWrapper.style.display = "flex";
  
        const video = document.createElement("video");
        video.id = "oiaVideo";
        video.controls = true;
        video.autoplay = true;
  
        const source = document.createElement("source");
        source.src = "oia.mp4";
        source.type = "video/mp4";
  
        video.appendChild(source);
        videoWrapper.appendChild(video);
        video.play();
      }, 4000);
    }, 5000);
  });