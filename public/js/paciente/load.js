
import { calcularEdad } from './utils.js';

export const API_URL = "http://localhost:4000/comsulmed/paciente"

export async function cargarPacientes() {
    try {
        console.log('Cargando Pacientes...')
        const response = await fetch(API_URL)
        const pacientes = await response.json()
        console.log('Pacientes Cargados:', pacientes)
        return pacientes
    } catch (error) {
        console.error('Error:', error)
        alert('Error al cargar los pacientes')
    }
}

export async function editarPaciente(codigo) {
    try {
        const response = await fetch(`${API_URL}/${codigo}`);

        if (!response.ok) {
            alert(`Error: Paciente con código ${codigo} no encontrado.`);
            return;
        }

        const paciente = await response.json();

        // 🔹 Llenar el formulario con los datos del paciente
        document.getElementById('cedula').value = paciente.cedula;
        document.getElementById('cedula').dataset.codigo = codigo; // Guardar el código en dataset
        document.getElementById('nombres').value = paciente.nombres;
        document.getElementById('apellidos').value = paciente.apellidos;
        document.getElementById('fechaNacimiento').value = paciente.fechaNacimiento;
        document.getElementById('genero').value = paciente.genero;
        document.getElementById('tipoSangre').value = paciente.tipoSangre;
        document.getElementById('telefono').value = paciente.telefono;
        document.getElementById('direccion').value = paciente.direccion || "";
        document.getElementById('correo').value = paciente.correo;
        document.getElementById('ocupacion').value = paciente.ocupacion || "ninguno";

        // 🔹 Cambiar el formulario a modo "edición"
        const formPaciente = document.getElementById('formPaciente');
        formPaciente.dataset.mode = "edit";

        // 🔹 Cambiar el texto del botón
        document.getElementById('btnGuardar').innerText = "Actualizar";

        // 🔹 Mostrar el formulario y ocultar la tabla
        document.getElementById('formRegistro').style.display = 'block';
        document.getElementById('tablaPacientes').style.display = 'none';
        document.getElementById('btnDesaparecer').style.display = 'none'
        document.getElementById('titulo-paciente').innerText = 'Editar Paciente';

        // 🔹 Asegurar que solo se agregue un event listener al formulario
        formPaciente.removeEventListener('submit', handleFormSubmit);
        formPaciente.addEventListener('submit', handleFormSubmit);

    } catch (error) {
        console.error('Error al cargar el paciente:', error);
        alert('Error al obtener los datos del paciente.');
    }
}


async function handleFormSubmit(e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    const formPaciente = document.getElementById('formPaciente');
    const mode = formPaciente.dataset.mode; // Detectar si es "create" o "edit"
    const codigo = document.getElementById('cedula').dataset.codigo; // Obtener código solo si es edición

    const pacienteData = {
        cedula: document.getElementById('cedula').value,
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        edad: calcularEdad(new Date(document.getElementById('fechaNacimiento').value)),
        genero: document.getElementById('genero').value,
        tipoSangre: document.getElementById('tipoSangre').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value || "",
        correo: document.getElementById('correo').value,
        ocupacion: document.getElementById('ocupacion').value || "ninguno"
    };

    try {
        let response;

        if (mode === "edit") {
            // 🔹 Modo edición: Actualizar el paciente
            response = await fetch(`${API_URL}/${codigo}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pacienteData)
            });
        } else {
            // 🔹 Modo creación: Registrar un nuevo paciente
            response = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pacienteData)
            });
        }

        console.log('Respuesta del Servidor:', response);

        if (!response.ok) {
            const responseData = await response.json();
            alert(`Error: ${responseData.message || 'Error desconocido'}`);
            return;
        }

        alert(mode === "edit" ? 'Paciente actualizado correctamente' : 'Paciente registrado correctamente');
        document.getElementById('formPaciente').reset();
        document.getElementById('formRegistro').style.display = 'none';

        // 🔹 Volver a cargar la lista de pacientes
        cargarPacientes();

    } catch (error) {
        console.error('Error en la operación:', error);
        alert('Error de red: ' + error.message);
    }
}



export async function eliminarPaciente(codigo) {
    try {
        const response = await fetch(`${API_URL}/${codigo}`, {
            method: 'DELETE'
        })
        console.log('Respuesta del Servidor (Eliminar):', response)
        if (response.ok) {
            alert('Paciente eliminado correctamente')
            cargarPacientes()
        } else {
            alert('Error al eliminar el paciente')
        }
    } catch (error) {
        console.error('Error:', error)
        alert('Error al eliminar el paciente')
    }
}
