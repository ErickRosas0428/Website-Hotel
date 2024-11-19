const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('header ul');
const hero = document.querySelector('.hero');

// Establecer el estado inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth < 770;

  if (isMobile) {
    menu.classList.add('closed'); // Menú cerrado por defecto
  } else {
    menu.classList.remove('closed', 'open'); // Menú siempre visible en pantallas grandes
  }
});

// Manejar clic en el botón de hamburguesa
hamburger.addEventListener('click', () => {
  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    menu.classList.add('closed');
    hero.classList.remove('open');
  } else {
    menu.classList.remove('closed');
    menu.classList.add('open');
    hero.classList.add('open');
  }
});

// Manejar redimensionamiento de la pantalla
window.addEventListener('resize', () => {
  const isMobile = window.innerWidth < 770;

  if (isMobile) {
    if (!menu.classList.contains('open')) {
      menu.classList.add('closed'); // Asegurar que permanezca cerrado
    }
  } else {
    menu.classList.remove('closed', 'open'); // Restablecer menú en pantallas grandes
    hero.classList.remove('open');
  }
});


  