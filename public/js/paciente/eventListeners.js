import { fetchPacientes, fetchPacienteById, createPaciente } from './api.js';
import { calcularEdad } from './utils.js';
import { toggleElementVisibility, resetForm, populateTable } from './domHandlers.js';

export function configureEventListeners() {
    document.getElementById('btnRegistrar').addEventListener('click', () => {
        toggleElementVisibility('formRegistro', true);
        toggleElementVisibility('tablaPacientes', false);
    });

    document.getElementById('btnListar').addEventListener('click', async () => {
        const pacientes = await fetchPacientes();
        populateTable(pacientes, 'cuerpoTabla');
    });

    document.getElementById('btnBuscar').addEventListener('click', async () => {
        const codigo = document.getElementById('buscarCodigo').value;
        try {
            const paciente = await fetchPacienteById(codigo);
            alert(`Paciente encontrado: ${paciente.nombres} ${paciente.apellidos}`);
        } catch (error) {
            alert(error.message);
        }
    });

    document.getElementById('formPaciente').addEventListener('submit', async (e) => {
        e.preventDefault();
        const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
        const paciente = {
            cedula: document.getElementById('cedula').value,
            nombres: document.getElementById('nombres').value,
            apellidos: document.getElementById('apellidos').value,
            edad: calcularEdad(fechaNacimiento),
            genero: document.getElementById('genero').value,
            fechaNacimiento: document.getElementById('fechaNacimiento').value,
            tipoSangre: document.getElementById('tipoSangre').value,
            telefono: document.getElementById('telefono').value,
            direccion: document.getElementById('direccion').value,
            correo: document.getElementById('correo').value,
            ocupacion: document.getElementById('ocupacion').value
        };

        try {
            await createPaciente(paciente);
            alert('Paciente registrado correctamente');
            resetForm('formPaciente');
        } catch (error) {
            alert('Error al registrar paciente');
        }
    });
}
