const contenedor = document.querySelector('.carrusel-contenedor');
const wrapper = document.querySelector('.carrusel-wrapper');
const btnIzquierda = document.querySelector('.izquierda');
const btnDerecha = document.querySelector('.derecha');

const items = document.querySelectorAll('.artista');
const gap = 20; // el mismo gap que en CSS
const anchoItem = items[0].offsetWidth + gap;
const totalItems = items.length;

// Número máximo de desplazamientos (total - visibles)
const maxDesplazamiento = -(anchoItem * (totalItems - 3)); // 3 visibles
let desplazamiento = 0;

btnDerecha.addEventListener('click', () => {
  desplazamiento -= anchoItem;
  if (desplazamiento < maxDesplazamiento) {
    desplazamiento = maxDesplazamiento; // no pasar del final
  }
  contenedor.style.transform = `translateX(${desplazamiento}px)`;
});

btnIzquierda.addEventListener('click', () => {
  desplazamiento += anchoItem;
  if (desplazamiento > 0) {
    desplazamiento = 0; // no pasar del inicio
  }
  contenedor.style.transform = `translateX(${desplazamiento}px)`;
});
