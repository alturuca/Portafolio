document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Obtén los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('Asunto').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;

    // Variables para realizar las validaciones
    let validacion = true;
    let mensajeError = '';

    // Validación del nombre (no vacío y máximo 50 caracteres)
    if (nombre.length === 0 || nombre.length > 50) {
        validacion = false;
        mensajeError += 'El nombre debe tener entre 1 y 50 caracteres.\n';
    }

    // Validación del asunto (no vacío y máximo 50 caracteres)
    if (asunto.length === 0 || asunto.length > 50) {
        validacion = false;
        mensajeError += 'El asunto debe tener entre 1 y 50 caracteres.\n';
    }

    // Validación del correo (no vacío y formato válido)
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo.length === 0 || !correoRegex.test(correo)) {
        validacion = false;
        mensajeError += 'El correo debe estar en formato válido (ejemplo: texto@texto.com).\n';
    }

    // Validación del mensaje (no vacío y máximo 300 caracteres)
    if (mensaje.length === 0 || mensaje.length > 300) {
        validacion = false;
        mensajeError += 'El mensaje debe tener entre 1 y 300 caracteres.\n';
    }

    // Si el formulario no pasa las validaciones, evita el envío
    if (!validacion) {
        alert(mensajeError);
        event.preventDefault();
    }
});
    