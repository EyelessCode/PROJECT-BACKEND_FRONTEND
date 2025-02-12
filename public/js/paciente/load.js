
import { calcularEdad,volverAInicio,generarFormularioEdicion } from './utils.js';

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
    console.log(`Llamando a editarPaciente con código: ${codigo}`);
    
    if (!codigo || isNaN(codigo)) {
        console.error("Error: Código inválido recibido en editarPaciente");
        alert("Error: Código del paciente no es válido.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${codigo}`);
        if (!response.ok) {
            alert(`Error: Paciente con código ${codigo} no encontrado.`);
            return;
        }

        const paciente = await response.json();
        console.log("Paciente obtenido de la API:", paciente);

        generarFormularioEdicion(paciente);
    } catch (error) {
        console.error('Error al cargar el paciente:', error);
        alert('Error al obtener los datos del paciente.');
    }
}



export async function actualizarPaciente(e, codigo) {
    e.preventDefault();
    
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
        const response = await fetch(`${API_URL}/${codigo}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pacienteData)
        });
        
        if (!response.ok) {
            const responseData = await response.json();
            alert(`Error: ${responseData.message || 'Error desconocido'}`);
            return;
        }

        alert('Paciente actualizado correctamente');
        volverAInicio();
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
            document.getElementById('formRegistro').style.display = 'none';
            document.getElementById('tablaPacientes').style.display = 'none';
            document.getElementById('btnDesaparecer').style.display = 'none';
            cargarPacientes()
        } else {
            alert('Error al eliminar el paciente')
        }
    } catch (error) {
        console.error('Error:', error)
        alert('Error al eliminar el paciente')
    }
}
