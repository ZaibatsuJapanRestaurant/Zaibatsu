// Aquí puedes añadir interacciones con JavaScript
// Por ejemplo, animaciones o funcionalidades adicionales

// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");

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
});
