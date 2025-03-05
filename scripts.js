// Control del reproductor
const musicIframe = document.getElementById("music-iframe");
const playPauseBtn = document.getElementById("play-pause-btn");
const muteBtn = document.getElementById("mute-btn");
const volumeSlider = document.getElementById("volume-slider");

let isPlaying = true;
let isMuted = false;

// Pausar/reanudar
playPauseBtn.addEventListener("click", () => {
    const audio = musicIframe.contentDocument.getElementById("background-music");
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "⏯️";
    } else {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
});

// Silenciar/desilenciar
muteBtn.addEventListener("click", () => {
    const audio = musicIframe.contentDocument.getElementById("background-music");
    if (isMuted) {
        audio.muted = false;
        muteBtn.textContent = "🔊";
    } else {
        audio.muted = true;
        muteBtn.textContent = "🔇";
    }
    isMuted = !isMuted;
});

// Control de volumen
volumeSlider.addEventListener("input", () => {
    const audio = musicIframe.contentDocument.getElementById("background-music");
    audio.volume = volumeSlider.value;
});
