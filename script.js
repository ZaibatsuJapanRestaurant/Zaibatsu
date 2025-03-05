let player;

// Función para inicializar el reproductor de YouTube
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '4ZBLaHCh8Bs', // ID del video de YouTube
        playerVars: {
            autoplay: 0, // No autoplay (requiere interacción del usuario)
            controls: 0, // Sin controles
            disablekb: 1, // Deshabilitar teclado
            modestbranding: 1, // Ocultar logo de YouTube
            loop: 1, // Repetir el video
            playlist: '4ZBLaHCh8Bs' // Necesario para el loop
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

// Función que se ejecuta cuando el reproductor está listo
function onPlayerReady(event) {
    console.log("Reproductor de YouTube listo.");
    // Establecer el volumen inicial al 50%
    player.setVolume(50);
    // No reproduzcas el video automáticamente aquí
}

// Función que se ejecuta cuando el estado del reproductor cambia
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo(); // Repetir el video cuando termine
    }
}

// Función para reproducir la música
function playMusic() {
    if (player && player.playVideo) {
        player.playVideo();
        console.log("Reproduciendo música...");
    } else {
        console.error("El reproductor no está listo.");
    }
}

// Función para pausar la música
function pauseMusic() {
    if (player && player.pauseVideo) {
        player.pauseVideo();
        console.log("Música pausada.");
    } else {
        console.error("El reproductor no está listo.");
    }
}

// Función para cambiar el volumen
function changeVolume(volume) {
    if (player && player.setVolume) {
        player.setVolume(volume);
        console.log("Volumen cambiado a:", volume);
    } else {
        console.error("El reproductor no está listo.");
    }
}

// Asegúrate de que la música solo se reproduzca después de la interacción del usuario
document.getElementById('play-button').addEventListener('click', function() {
    playMusic();
});