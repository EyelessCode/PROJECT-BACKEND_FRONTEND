// Establecer la fecha actual
document.getElementById('fechaActual').textContent = new Date().toLocaleDateString();

// Lógica para manejar la búsqueda del paciente, cancelar, siguiente, etc.
document.getElementById('btnBuscarPaciente').addEventListener('click', () => {
    const codigo = document.getElementById('codigoPaciente').value;
    // Lógica para buscar y mostrar los datos del paciente
});

document.getElementById('btnCancelar').addEventListener('click', () => {
    // Restablecer el formulario
    document.getElementById('formTomaSignos').reset();
    document.getElementById('datosPaciente').style.display = 'none';
});

document.getElementById('btnSiguiente').addEventListener('click', () => {
    // Guardar datos y navegar al siguiente formulario
    window.location.href = 'signo_paciente.html';
});
