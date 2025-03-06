let player;
let isPlaying = false;

// Inicializa el reproductor de YouTube
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '4ZBLaHCh8Bs', // Cambia este ID por el de tu video
        playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            loop: 1,
            playlist: '4ZBLaHCh8Bs' // Repite el mismo video
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

// Ejecutar cuando el reproductor esté listo
function onPlayerReady(event) {
    console.log("Reproductor de YouTube listo.");
    player.setVolume(50); // Volumen inicial al 50%
    updateProgressBar();
}

// Repetir el video cuando termine
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo(); // Repetir el video
    }
}

// Función para reproducir la música
function playMusic() {
    if (player && player.playVideo) {
        player.playVideo();
        isPlaying = true;
        togglePlayPauseButton();
        updateProgressBar();
        console.log("Reproduciendo música...");
    }
}

// Función para pausar la música
function pauseMusic() {
    if (player && player.pauseVideo) {
        player.pauseVideo();
        isPlaying = false;
        togglePlayPauseButton();
        console.log("Música pausada.");
    }
}

// Función para cambiar el volumen
function changeVolume(volume) {
    if (player && player.setVolume) {
        player.setVolume(volume);
        console.log("Volumen cambiado a:", volume);
    }
}

// Alternar iconos de reproducción y pausa
function togglePlayPauseButton() {
    document.getElementById('play-button').style.display = isPlaying ? 'none' : 'inline';
    document.getElementById('pause-button').style.display = isPlaying ? 'inline' : 'none';
}

// Actualizar la barra de progreso de la música
function updateProgressBar() {
    if (player && player.getCurrentTime) {
        setInterval(() => {
            let currentTime = player.getCurrentTime();
            let duration = player.getDuration();
            let progress = (currentTime / duration) * 100;
            document.getElementById('progress-bar').value = progress;
            document.getElementById('current-time').innerText = formatTime(currentTime);
            document.getElementById('total-time').innerText = formatTime(duration);
        }, 1000);
    }
}

// Formatear tiempo en mm:ss
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Ajustar botones al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('pause-button').style.display = 'none';

    // Crear barra de progreso si no existe
    if (!document.getElementById('progress-bar')) {
        let progressBarContainer = document.createElement('div');
        progressBarContainer.classList.add('progress-container');
        progressBarContainer.innerHTML = `
            <span id="current-time">0:00</span>
            <input type="range" id="progress-bar" min="0" max="100" value="0" disabled>
            <span id="total-time">0:00</span>
        `;
        document.querySelector('.music-controls-container').appendChild(progressBarContainer);
    }
});

// Función para mostrar una sección y ocultar las demás
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        section.style.display = 'block';
    }
}

// Mostrar la sección de inicio por defecto
document.addEventListener('DOMContentLoaded', function () {
    showSection('home');
});