document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.img1_clas, .img2_clas, .slide-up, .imagen_entrada');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target; // ✅ referencia correcta al elemento

            if (entry.isIntersecting) {
                el.classList.add('visible');
                el.classList.remove('leave');
            } else {
                el.classList.remove('visible');
                el.classList.add('leave'); // se va hacia el lado correspondiente
            }
        });
    }, { threshold: 0.05 });

    elementos.forEach(el => observer.observe(el));
});
