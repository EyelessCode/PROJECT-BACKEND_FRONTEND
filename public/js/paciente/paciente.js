document.getElementById('btnRegistrar').addEventListener('click', () => {
    document.getElementById('formRegistro').style.display = 'block';
    document.getElementById('tablaPacientes').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'none';
});

document.getElementById('btnListar').addEventListener('click', () => {
    document.getElementById('tablaPacientes').style.display = 'block';
    document.getElementById('formRegistro').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'inline';
    // Aquí puedes llamar a una función para cargar los datos en la tabla
});

document.getElementById('btnDesaparecer').addEventListener('click', () => {
    document.getElementById('tablaPacientes').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'none';
});

document.getElementById('btnCancelar').addEventListener('click', () => {
    document.getElementById('formPaciente').reset();
    document.getElementById('formRegistro').style.display = 'none';
});

// Puedes añadir funciones adicionales para manejar el CRUD
