// script.js - Voces Chalatecas
console.log('¡Bienvenido al Colectivo Literario Voces Chalatecas!');

function toggleDropdown(element, event) {
    if (event) {
        event.preventDefault();
    }
    const dropdown = element.closest('.dropdown');
    if (!dropdown) return;
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(d => {
        if (d !== dropdown) {
            d.classList.remove('active');
        }
    });
    dropdown.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const isDropdown = event.target.closest('.dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.classList.remove('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropbtn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});