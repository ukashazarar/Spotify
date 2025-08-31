document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById("audio-player");
  const nowPlaying = document.getElementById("now-playing");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const progressBar = document.getElementById("progress-bar");

  let currentIndex = -1;
  const songCards = Array.from(document.querySelectorAll(".songs"));

  function loadAndPlay(index) {
    if (index < 0 || index >= songCards.length) return;
    const card = songCards[index];
    const src = card.getAttribute('data-src');
    const title = card.querySelector("h3").innerText;

    audio.src = src;
    audio.play();
    nowPlaying.textContent = "🎵 Now Playing: " + title;
    playPauseBtn.src = "image/pauseIcon.svg"; // You must add pauseIcon.svg in your project
    currentIndex = index;
  }

  songCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (currentIndex === index && !audio.paused) {
        audio.pause();
        nowPlaying.textContent = "⏸️ Paused: " + card.querySelector("h3").innerText;
        playPauseBtn.src = "image/playIcon.svg";
      } else {
        loadAndPlay(index);
      }
    });
  });

  // Play/pause toggle from play bar
  playPauseBtn.addEventListener("click", () => {
    if (audio.src) {
      if (audio.paused) {
        audio.play();
        nowPlaying.textContent = "🎵 Now Playing";
        playPauseBtn.src = "image/pauseIcon.svg";
      } else {
        audio.pause();
        nowPlaying.textContent = "⏸️ Paused";
        playPauseBtn.src = "image/playIcon.svg";
      }
    }
  });

  // Next song
  nextBtn.addEventListener("click", () => {
    if (currentIndex < songCards.length - 1) {
      loadAndPlay(currentIndex + 1);
    }
  });

  // Previous song
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      loadAndPlay(currentIndex - 1);
    }
  });

  // Update progress bar
  audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
      progressBar.value = (audio.currentTime / audio.duration) * 100;
    }
  });

  // Seek when user drags progress bar
  progressBar.addEventListener("input", () => {
    if (!isNaN(audio.duration)) {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
  });

  // When song ends, play next
  audio.addEventListener("ended", () => {
    if (currentIndex < songCards.length - 1) {
      loadAndPlay(currentIndex + 1);
    } else {
      nowPlaying.textContent = "🎵 No song playing";
      playPauseBtn.src = "image/playIcon.svg";
      progressBar.value = 0;
    }
  });
});


const hamburger = document.querySelector(".ham-burger");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
if (hamburger && left && right) {
  hamburger.addEventListener("click", () => {
    left.classList.toggle("show");
    // right.classLista.toggle("shifted");
  });
}

function scrollLeft() {
  const container = document.getElementById("song-scroll");
  container.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  const container = document.getElementById("song-scroll");
  container.scrollBy({ left: 300, behavior: "smooth" });
}
function scrollLeft() {
  const container = document.getElementById("song-scroll");
  container.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  const container = document.getElementById("song-scroll");
  container.scrollBy({ left: 300, behavior: "smooth" });
}
