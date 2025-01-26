import { registrarPaciente, cargarPacientes } from './api.js';
import { calcularEdad } from './utils.js';

document.getElementById('btnRegistrar').addEventListener('click', () => {
    console.log('Registrar Paciente');
    document.getElementById('formRegistro').style.display = 'block';
    document.getElementById('tablaPacientes').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'none';
});

document.getElementById('btnListar').addEventListener('click', () => {
    console.log('Listar Pacientes');
    document.getElementById('tablaPacientes').style.display = 'block';
    document.getElementById('formRegistro').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'inline';
    cargarPacientes();  // Llama a la función para cargar los datos en la tabla
});

document.getElementById('btnDesaparecer').addEventListener('click', () => {
    console.log('Ocultar Tabla');
    document.getElementById('tablaPacientes').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'none';
});

document.getElementById('btnCancelar').addEventListener('click', () => {
    console.log('Cancelar Registro');
    document.getElementById('formPaciente').reset();
    document.getElementById('formRegistro').style.display = 'none';
});

document.getElementById('formPaciente').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Submit Paciente');
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const edad = calcularEdad(fechaNacimiento);

    const paciente = {
        cedula: document.getElementById('cedula').value,
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        edad: edad,
        genero: document.getElementById('genero').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        tipoSangre: document.getElementById('tipoSangre').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        correo: document.getElementById('correo').value,
        ocupacion: document.getElementById('ocupacion').value
    };

    console.log('Datos del Paciente:', paciente);

    const result = await registrarPaciente(paciente);
    if (result.success) {
        alert('Paciente registrado correctamente');
        document.getElementById('formPaciente').reset();
        document.getElementById('formRegistro').style.display = 'none';
        cargarPacientes();
    } else {
        alert(`Error al registrar el paciente: ${result.message}`);
    }
});
