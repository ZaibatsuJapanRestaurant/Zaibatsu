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

    // Resetear la sección de menú si se cambia de página
    if (sectionId !== 'menu') {
        showCategories();
    }
}

// Mostrar la sección de inicio por defecto
document.addEventListener('DOMContentLoaded', function () {
    showSection('home');
});

// Funcionalidad del Menú
const menuData = {
    food: [
        { name: "Sushi Hanabi", description: "Exquisito sushi tradicional.", image: "img/sushi.png" },
        { name: "Tempura Tenkasu", description: "Gambas en tempura crujiente.", image: "img/tempura.png" },
        { name: "Gyoza de Pollo", description: "Empanadillas japonesas rellenas de pollo.", image: "img/gyoza.png" }
    ],
    drinks: [
        { name: "Té Verde Hikari", description: "Refrescante té verde frío.", image: "img/tea.png" },
        { name: "Ramune de Fresa", description: "Soda japonesa con sabor a fresa.", image: "img/ramune.png" },
        { name: "Limonada de Yuzu", description: "Limonada con cítrico yuzu.", image: "img/yuzu.png" }
    ],
    packs: [
        { name: "Pack Tradicional", description: "Combina sushi y tempura.", image: "img/pack1.png" },
        { name: "Pack Especial", description: "Incluye ramen y gyoza.", image: "img/pack2.png" }
    ]
};

function showMenu(menuType) {
    document.querySelector('.menu-categories').classList.add('hidden');
    const menuDetails = document.getElementById('menu-details');
    menuDetails.classList.remove('hidden');
    menuDetails.classList.add('fade-in');
    updateMenuItems(menuType);
}

function showCategories() {
    document.querySelector('.menu-categories').classList.remove('hidden');
    document.getElementById('menu-details').classList.add('hidden');
}

function updateMenuItems(menuType) {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = menuData[menuType].map(item => `
        <div class="menu-item fade-in">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

// Inicialización del menú
document.addEventListener('DOMContentLoaded', () => {
    updateMenuItems(); // Asegurarse de que el menú se cargue correctamente al inicio
});
