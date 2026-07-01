// script.js - Voces Chalatecas
console.log('¡Bienvenido al Colectivo Literario Voces Chalatecas!');

// Función para toggle de dropdowns al hacer clic
function toggleDropdown(element, event) {
    // Prevenir que el enlace recargue la página
    if (event) {
        event.preventDefault();
    }
    
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
    const isDropdown = event.target.closest('.dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.classList.remove('active');
        });
    }
});

// Inicializar los dropdowns al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Prevenir que los enlaces de los dropdowns naveguen
    document.querySelectorAll('.dropbtn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});