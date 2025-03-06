let player;
let isPlaying = false;

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
