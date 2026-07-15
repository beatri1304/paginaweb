// script.js - Voces Chalatecas
console.log('¡Bienvenido al Colectivo Literario Voces Chalatecas!');

// Función para toggle de dropdowns al hacer clic
function toggleDropdown(element, event) {
    // Solo prevenir la navegación del enlace que abre/cierra el dropdown
    // No prevenimos la navegación de los enlaces internos (poetas, temas, etc.)
    // Por eso aquí NO hacemos event.preventDefault()
    
    // Obtener el contenedor del dropdown
    const dropdown = element.closest('.dropdown');
    
    if (!dropdown) return;
    
    // Cerrar todos los otros dropdowns abiertos
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(d => {
        if (d !== dropdown) {
            d.classList.remove('active');
        }
    });
    
    // Toggle el estado del dropdown actual
    dropdown.classList.toggle('active');
}

// Cerrar dropdowns al hacer clic fuera
document.addEventListener('click', function(event) {
    // Si el clic NO es dentro de un dropdown, cerramos todos
    const isDropdown = event.target.closest('.dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.classList.remove('active');
        });
    }
});

// Inicializar los dropdowns al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Prevenir que los enlaces de los dropdowns (los que abren el menú) naveguen
    // Esto SOLO aplica a los .dropbtn, no a los enlaces dentro del menú
    document.querySelectorAll('.dropbtn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Solo previene el clic en el botón principal
            // No hacemos nada más, el toggleDropdown se encarga del resto
        });
    });
});