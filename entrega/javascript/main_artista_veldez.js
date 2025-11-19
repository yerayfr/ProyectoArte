document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.fila img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // animar solo una vez
            }
        });
    }, {
        threshold: 0.2 // cuando el 20% de la imagen sea visible
    });

    images.forEach(img => observer.observe(img));
});