const playButton = document.querySelector('#play-video-btn');
let videoElem = document.querySelector('#vision-video');

function changeText(text) {
  playButton.innerHTML = text;
}

async function playVideo() {
  try {
    await videoElem.play();
  } catch (err) {
    alert('Error: Cannot play video');
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
    changeText('Pause video');
  } else {
    videoElem.pause();
    changeText('Watch video');
  }
}

playButton.addEventListener('click', () => {
  handlePlayButton();
});
