const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const indicators = document.querySelectorAll('.carousel-indicators button');
const slides = document.querySelectorAll('.carousel-item');
let activeIndex = 0;

function showSlide(index) {
  // Ocultar todos los slides
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  // Mostrar el slide activo
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + slides.length) % slides.length; // Desplazamiento circular
  showSlide(activeIndex);
});

nextButton.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % slides.length; // Desplazamiento circular
  showSlide(activeIndex);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    activeIndex = index;
    showSlide(activeIndex);
  });
});
