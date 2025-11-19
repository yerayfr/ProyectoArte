document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.slide-up, .imagen_entrada.slide-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elementos.forEach(el => observer.observe(el));
});
