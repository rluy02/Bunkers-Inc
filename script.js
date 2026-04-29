// =========================================================
// Bunkers Inc. — pequeñas interacciones
// =========================================================

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Sombra/opacidad extra en la nav cuando se hace scroll
(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const onScroll = () => {
        if (window.scrollY > 40) {
            nav.style.background = 'rgba(12, 8, 5, 0.92)';
            nav.style.boxShadow  = '0 2px 12px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(12, 8, 5, 0.7)';
            nav.style.boxShadow  = 'none';
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
