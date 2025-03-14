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

// Función para abrir el modal con la imagen ampliada
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = modal.querySelector('img');
    modalImg.src = imageSrc; // Establecer la imagen en el modal
    modal.classList.add('active'); // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active'); // Ocultar el modal
}

// Asignar eventos a la imagen del menú y al modal
document.addEventListener('DOMContentLoaded', function () {
    const menuImage = document.querySelector('.menu-image img');
    const modal = document.getElementById('imageModal');

    if (menuImage) {
        menuImage.addEventListener('click', function () {
            openModal(this.src); // Abrir el modal con la imagen ampliada
        });
    }

    if (modal) {
        modal.addEventListener('click', function () {
            closeModal(); // Cerrar el modal al hacer clic fuera de la imagen
        });
    }
});

// Mostrar la sección de inicio por defecto
document.addEventListener('DOMContentLoaded', function () {
    showSection('home');
});

// Carrusel de noticias
let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Función para mostrar/ocultar el texto completo de la noticia
function toggleText(image) {
    const carouselItem = image.closest('.carousel-item');
    const fullText = carouselItem.querySelector('.full-text');
    const shortText = carouselItem.querySelector('.short-text');

    if (fullText.style.display === 'none' || fullText.style.display === '') {
        fullText.style.display = 'block';
        shortText.style.display = 'none';
    } else {
        fullText.style.display = 'none';
        shortText.style.display = 'block';
    }
}

// Mostrar la primera slide al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);
});