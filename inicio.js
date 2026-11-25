document.addEventListener('DOMContentLoaded', () => {
    const btnPromocion = document.getElementById('btn-promocion');
    const formEncuesta = document.getElementById('form-encuesta');

    // Acción al hacer clic en el botón "Promocion?"
    if (btnPromocion) {
        btnPromocion.addEventListener('click', () => {
            alert('¡Promoción especial! 15% de descuento en pedidos mayores a 10 pines personalizados.');
        });
    }

    // Acción al enviar la Encuesta de Satisfacción
    if (formEncuesta) {
        formEncuesta.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const calificacion = document.getElementById('calificacion').value;
            const comentarios = document.getElementById('comentarios').value.trim();

            if (!calificacion) {
                alert('Por favor, selecciona una opción antes de enviar.');
                return;
            }

            alert(`¡Gracias por responder la encuesta!\nCalificación: ${calificacion.toUpperCase()}${comentarios ? '\nComentario: ' + comentarios : ''}`);
            formEncuesta.reset();
        });
    }
});