document.addEventListener('DOMContentLoaded', () => {
    const imgCatalogo = document.getElementById('img-catalogo');
    const tarjetasCategorias = document.querySelectorAll('.tarjeta-categoria');

    // Abre la imagen del catálogo en grande al hacer clic
    if (imgCatalogo) {
        imgCatalogo.addEventListener('click', () => {
            const rutaImagen = imgCatalogo.getAttribute('src');
            if (rutaImagen) {
                window.open(rutaImagen, '_blank');
            }
        });
    }

    // Muestra información de la categoría al seleccionarla
    tarjetasCategorias.forEach((tarjeta) => {
        tarjeta.addEventListener('click', () => {
            const titulo = tarjeta.querySelector('h3').textContent;
            const descripcion = tarjeta.querySelector('p').textContent;
            alert(`Categoría: ${titulo}\n${descripcion}`);
        });
    });
});