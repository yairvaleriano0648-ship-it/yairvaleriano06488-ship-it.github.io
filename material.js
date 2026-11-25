document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta-material');

    // Efecto interactivo al hacer clic en alguna tarjeta de material
    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener('click', () => {
            const titulo = tarjeta.querySelector('h3').textContent;
            const detalle = tarjeta.querySelector('p').textContent;
            alert(`Material seleccionado: ${titulo}\nBeneficio: ${detalle}`);
        });
    });
});