document.addEventListener('DOMContentLoaded', () => {
    const imagenesProceso = document.querySelectorAll('.imagen-proceso');
    const btnVerVideo = document.getElementById('btn-ver-video');

    // Muestra el detalle del paso al hacer clic en una imagen
    imagenesProceso.forEach((img) => {
        img.addEventListener('click', () => {
            const fila = img.closest('.fila-proceso');
            const textoPaso = fila ? fila.querySelector('.columna-texto p')?.textContent.trim() : '';
            if (textoPaso) {
                alert(`Detalle del paso:\n\n${textoPaso}`);
            }
        });
    });

    // Acción al hacer clic en "▶ Ver Video" (puedes cambiar la URL por tu video)
    if (btnVerVideo) {
        btnVerVideo.addEventListener('click', () => {
            const urlVideo = 'https://www.youtube.com/watch?v=ewj3zkJm5bM';
            window.open(urlVideo, '_blank');
        });
    }
});