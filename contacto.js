document.addEventListener('DOMContentLoaded', () => {
    const formSolicitud = document.getElementById('form-solicitud');

    if (formSolicitud) {
        formSolicitud.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const proyecto = document.getElementById('proyecto').value.trim();

            if (!nombre || !telefono || !correo || !proyecto) {
                alert('Por favor, completa todos los campos antes de enviar tu solicitud.');
                return;
            }

            alert(`¡Solicitud enviada con éxito!\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\nProyecto: ${proyecto}`);
            formSolicitud.reset();
        });
    }
});