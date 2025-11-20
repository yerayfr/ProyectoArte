const contenedor = document.querySelector('.carrusel-contenedor');
const btnIzquierda = document.querySelector('.izquierda');
const btnDerecha = document.querySelector('.derecha');

const itemsOriginales = [...document.querySelectorAll('.artista')];
const gap = 20;
const anchoItem = itemsOriginales[0].offsetWidth + gap;

// Duplicamos para efecto infinito
itemsOriginales.forEach(item => {
  const clon = item.cloneNode(true);
  contenedor.appendChild(clon);
});

let index = 0;

// Smooth transform usando translate3d
function moverCarrusel(direccion) {
  index += direccion;

  contenedor.style.transition = "transform 0.45s cubic-bezier(.25,.46,.45,.94)";
  contenedor.style.transform = `translate3d(${-index * anchoItem}px, 0, 0)`;

  // Loop suave
  setTimeout(() => {
    if (index >= itemsOriginales.length) {
      // Paso 1: quitar transición
      contenedor.style.transition = "none";

      // Paso 2: usar RAF para evitar jump visible
      requestAnimationFrame(() => {
        index = 0;
        contenedor.style.transform = `translate3d(0px, 0, 0)`;
      });
    }

    if (index < 0) {
      contenedor.style.transition = "none";

      requestAnimationFrame(() => {
        index = itemsOriginales.length - 1;
        contenedor.style.transform = `translate3d(${-index * anchoItem}px, 0, 0)`;
      });
    }
  }, 460); // 10 ms más que la transition para evitar cortes
}

// Botones
btnDerecha.addEventListener('click', () => moverCarrusel(1));
btnIzquierda.addEventListener('click', () => moverCarrusel(-1));
