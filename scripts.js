// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");

    // Verificar si la música ya está en reproducción
    if (localStorage.getItem("musicPlaying") === "true") {
        audio.play();
    } else {
        audio.pause();
    }

    // Almacenar el estado de la música
    audio.addEventListener("play", function() {
        localStorage.setItem("musicPlaying", "true");
    });

    audio.addEventListener("pause", function() {
        localStorage.setItem("musicPlaying", "false");
    });

    // Controlar la reproducción
    playButton.addEventListener("click", function() {
        audio.play();
    });

    pauseButton.addEventListener("click", function() {
        audio.pause();
    });
});
