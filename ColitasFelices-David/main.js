// === Carga dinámica de menú y pie de página ===
function loadHTML(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(`Error al cargar ${url}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("menu-container", "menu.html");
  loadHTML("piePagina-container", "piePagina.html"); 
});

// === Carrusel automático ===
const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  const contenedor = document.querySelector('.carrusel-contenedor');
  if (contenedor) {
    contenedor.style.transform = `translateX(-${i * 100}%)`;
  }
}

if (slides.length > 0) {
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);
}

// === Acordeón de preguntas frecuentes ===
const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    const item = pregunta.parentElement;
    item.classList.toggle('abierta');
  });
});
