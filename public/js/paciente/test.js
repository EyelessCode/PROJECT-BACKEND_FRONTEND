// URL base de la API (ajusta esta URL según tu servidor backend)
const API_URL = 'http://localhost:4000/comsulmed/paciente';

// Obtener pacientes y mostrarlos
async function obtenerPacientes() {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error('Error al obtener pacientes');
        const pacientes = await respuesta.json();
        mostrarPacientesEnTabla(pacientes);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Crear un nuevo paciente
async function crearPaciente(paciente) {
    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paciente),
        });

        if (!respuesta.ok) throw new Error('Error al crear paciente');
        obtenerPacientes(); // Actualizar la tabla
    } catch (error) {
        console.error('Error:', error);
    }
}

// Mostrar pacientes en una tabla
function mostrarPacientesEnTabla(pacientes) {
    const tabla = document.getElementById('tabla-pacientes');
    tabla.innerHTML = ''; // Limpiar tabla antes de agregar datos

    pacientes.forEach(paciente => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${paciente.codigo}</td>
            <td>${paciente.cedula}</td>
            <td>${paciente.nombres}</td>
            <td>${paciente.fechaNacimiento}</td>
        `;
        tabla.appendChild(fila);
    });
}

// Evento para el formulario
document.getElementById('formulario-paciente').addEventListener('submit', async (e) => {
    document.getElementById('formulario-paciente').addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const cedula = document.getElementById('cedula').value;
        const nombres = document.getElementById('nombres').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
        // Validar formato de la fecha (YYYY-MM-DD)
        const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
        if (!regexFecha.test(fechaNacimiento)) {
            alert('La fecha debe tener el formato YYYY-MM-DD');
            return;
        }
    
        const paciente = { cedula, nombres, fechaNacimiento };
        await crearPaciente(paciente);
    
        // Limpiar el formulario
        document.getElementById('formulario-paciente').reset();
    });
    
});

// Cargar pacientes al iniciar
obtenerPacientes();
