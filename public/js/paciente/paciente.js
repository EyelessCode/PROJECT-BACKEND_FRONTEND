import { calcularEdad, mostrarTablaPaciente, } from './utils.js';
import { API_URL, cargarPacientes } from './load.js';


document.getElementById('btnRegistrar').addEventListener('click', () => {
    console.log('Registrar Paciente')
    document.getElementById('formRegistro').style.display = 'block'
    document.getElementById('tablaPacientes').style.display = 'none'
    document.getElementById('btnDesaparecer').style.display = 'none'
})

document.getElementById('btnListar').addEventListener('click', async () => {
    console.log('Listar Pacientes')
    document.getElementById('tablaPacientes').style.display = 'block'
    document.getElementById('formRegistro').style.display = 'none'
    document.getElementById('btnDesaparecer').style.display = 'inline'
    const paciente = await cargarPacientes()
    mostrarTablaPaciente(paciente)
})

document.getElementById('btnDesaparecer').addEventListener('click', () => {
    console.log('Ocultando Tabla...')
    document.getElementById('tablaPacientes').style.display = 'none'
    document.getElementById('btnDesaparecer').style.display = 'none'
})

document.getElementById('btnCancelar').addEventListener('click', () => {
    console.log('Cancelando Registro')
    document.getElementById('formPaciente').reset()
    document.getElementById('formRegistro').style.display = 'none'
})

document.getElementById('formPaciente').addEventListener('submit', async (e) => {
    e.preventDefault() //! Evita que se recargue la página
    console.log('Entrega de Paciente')
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value)
    const edad = calcularEdad(fechaNacimiento)

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
    }

    console.log('Datos del Paciente:', paciente)

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paciente)
        })

        const responseData = await response.json()
        console.log('Respuesta del Servidor:', responseData)

        if (!response.ok) {
            alert('Error al registrar el paciente')

        }
        alert('Paciente registrado correctamente')
        document.getElementById('formPaciente').reset()
        document.getElementById('formRegistro').style.display = 'none'
        cargarPacientes()
    } catch (error) {
        console.error('Error:', error)
        console.error('Error en la respuesta del servidor:', responseData)
        alert(`Error al registrar el paciente: ${responseData.message || 'Desconocido'}`)
    }
})

document.getElementById('btnBuscar').addEventListener('click', async () => {
    const codigo = document.getElementById('buscarCodigo').value
    try {
        console.log('Buscando Paciente con Código:', codigo)
        const response = await fetch(`${API_URL}/${codigo}`)
        if (!response.ok) {
            alert('Paciente no encontrado')
        }

        const paciente = await response.json()
        alert(`Paciente encontrado: ${paciente.nombres} ${paciente.apellidos}`)
    } catch (error) {
        console.error('Error:', error)
        alert('Error al buscar el paciente')
    }
})
