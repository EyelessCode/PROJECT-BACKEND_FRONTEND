
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
        const response = await fetch(`${API_URL}/${codigo}`)
        if (response.ok) {
            const paciente = await response.json()
            document.getElementById('cedula').value = paciente.cedula
            document.getElementById('nombres').value = paciente.nombres
            document.getElementById('apellidos').value = paciente.apellidos
            document.getElementById('fechaNacimiento').value = paciente.fechaNacimiento
            document.getElementById('genero').value = paciente.genero
            document.getElementById('tipoSangre').value = paciente.tipoSangre
            document.getElementById('telefono').value = paciente.telefono
            document.getElementById('direccion').value = paciente.direccion
            document.getElementById('correo').value = paciente.correo
            document.getElementById('ocupacion').value = paciente.ocupacion
            document.getElementById('formRegistro').style.display = 'block'
            document.getElementById('tablaPacientes').style.display = 'none'
            document.getElementById('btnDesaparecer').style.display = 'none'

            const formPaciente = document.getElementById('formPaciente')
            formPaciente.removeEventListener('submit', handleUpdateSubmit)
            formPaciente.addEventListener('submit', handleUpdateSubmit)

            async function handleUpdateSubmit(e) {
                e.preventDefault() //! Evita que se recargue la página
                const pacienteActualizado = {
                    cedula: document.getElementById('cedula').value,
                    nombres: document.getElementById('nombres').value,
                    apellidos: document.getElementById('apellidos').value,
                    edad: calcularEdad(new Date(document.getElementById('fechaNacimiento').value)),
                    genero: document.getElementById('genero').value,
                    fechaNacimiento: document.getElementById('fechaNacimiento').value,
                    tipoSangre: document.getElementById('tipoSangre').value,
                    telefono: document.getElementById('telefono').value,
                    direccion: document.getElementById('direccion').value,
                    correo: document.getElementById('correo').value,
                    ocupacion: document.getElementById('ocupacion').value
                }

                try {
                    const response = await fetch(`${API_URL}/${codigo}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(pacienteActualizado)
                    })
                    console.log('Respuesta del Servidor (Editar):', response)
                    const responseData = await response.json()
                    console.log('Respuesta del Servidor:', responseData)
                    if (response.ok) {
                        alert('Paciente actualizado correctamente')
                        document.getElementById('formPaciente').reset()
                        document.getElementById('formRegistro').style.display = 'none'
                        cargarPacientes()
                    } else {
                        alert('Error al actualizar paciente')
                    }
                } catch (error) {
                    console.error('Error:', error)
                    console.error('Error en la respuesta del servidor (Editar):', response)
                    alert(`Error al actualizar el paciente: ${response.message || 'Desconocido'}`)
                }
            }
        } else {
            alert('Paciente no encontrado')
        }
    } catch (error) {
        console.error('Error:', error)
        alert('Error al cargar el paciente')
    }
}

export async function eliminarPaciente(codigo) {
    try {
        const response = await fetch(`${API_URL}/${codigo}`, {
            method: 'DELETE'
        })
        console.log('Respuesta del Servidor (Eliminar):', response)
        if (!response.ok) {
            alert('Error al eliminar el paciente')
        }

        alert('Paciente eliminado correctamente')
        cargarPacientes()
    } catch (error) {
        console.error('Error:', error)
        alert('Error al eliminar el paciente')
    }
}
