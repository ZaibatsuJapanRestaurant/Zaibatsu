// Función para navegar a la siguiente página
function navigateToNextPage() {
    // Guardar el estado de la música
    const audio = document.getElementById('background-music');
    const currentTime = audio.currentTime;
    const isPlaying = !audio.paused;

    // Redirigir a la siguiente página
    window.location.href = 'next-page.html';

    // Guardar el estado de la música en localStorage
    localStorage.setItem('musicTime', currentTime);
    localStorage.setItem('musicPlaying', isPlaying);
}

// Cargar el estado de la música al cargar la página
window.onload = function () {
    const audio = document.getElementById('background-music');
    const savedTime = localStorage.getItem('musicTime');
    const isPlaying = localStorage.getItem('musicPlaying');

    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    if (isPlaying === 'true') {
        audio.play();
    }
};