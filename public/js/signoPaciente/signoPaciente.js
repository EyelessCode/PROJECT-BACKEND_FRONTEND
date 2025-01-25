document.getElementById('btnRegresar').addEventListener('click', () => {
    // Regresar al formulario anterior manteniendo los datos
    window.location.href = 'toma_signos.html';
});

document.getElementById('btnCancelar').addEventListener('click', () => {
    // Limpiar el formulario
    document.getElementById('formSignoPaciente').reset();
});

document.getElementById('formSignoPaciente').addEventListener('submit', (e) => {
    e.preventDefault();
    // Guardar datos y mostrar mensaje
    alert('Datos registrados correctamente');
    window.location.href = 'index.html';
});
