document.addEventListener('DOMContentLoaded', () => {
    const trabajos = document.querySelectorAll('.img1_clas, .img2_clas');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // se anima solo una vez
            }
        });
    }, {
        threshold: 0.2 // se activa cuando 20% del elemento es visible
    });

    trabajos.forEach(trabajo => observer.observe(trabajo));
});
