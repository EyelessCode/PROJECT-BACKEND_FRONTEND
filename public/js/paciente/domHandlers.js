import { fetchPacienteById, updatePaciente } from './api.js';
import { toggleElementVisibility, resetForm } from './domHandlers.js';


export function toggleElementVisibility(elementId, isVisible) {
    const element = document.getElementById(elementId);
    element.style.display = isVisible ? 'block' : 'none';
}

export function resetForm(formId) {
    document.getElementById(formId).reset();
}

export function populateTable(pacientes, tableBodyId) {
    const cuerpoTabla = document.getElementById(tableBodyId);
    cuerpoTabla.innerHTML = ''; // Limpiar la tabla antes de agregar datos

    pacientes.forEach(paciente => {
        const fila = document.createElement('tr');

        // Crear las celdas
        let celda = document.createElement('td');
        celda.textContent = paciente.cedula; // Cédula
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.nombres; // Nombres
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.apellidos; // Apellidos
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.edad; // Edad
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.genero; // Género
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.fechaNacimiento; // Fecha de Nacimiento
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.tipoSangre; // Tipo de Sangre
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.telefono; // Teléfono
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.direccion; // Dirección
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.correo; // Correo
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = paciente.ocupacion; // Ocupación
        fila.appendChild(celda);

        // Crear las acciones
        const acciones = document.createElement('td');
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarPaciente(paciente.cedula); // Conectar a editarPaciente
        acciones.appendChild(btnEditar);

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarPaciente(paciente.cedula); // Conectar a eliminarPaciente
        acciones.appendChild(btnEliminar);

        fila.appendChild(acciones);
        cuerpoTabla.appendChild(fila);
    });
}



export async function editarPaciente(cedula) {
    try {
        // Obtener los datos del paciente por cédula
        const paciente = await fetchPacienteById(cedula);

        // Cargar los datos en el formulario
        document.getElementById('cedula').value = paciente.cedula;
        document.getElementById('nombres').value = paciente.nombres;
        document.getElementById('apellidos').value = paciente.apellidos;
        document.getElementById('fechaNacimiento').value = paciente.fechaNacimiento;
        document.getElementById('genero').value = paciente.genero;
        document.getElementById('tipoSangre').value = paciente.tipoSangre;
        document.getElementById('telefono').value = paciente.telefono;
        document.getElementById('direccion').value = paciente.direccion;
        document.getElementById('correo').value = paciente.correo;
        document.getElementById('ocupacion').value = paciente.ocupacion;

        // Mostrar el formulario de edición
        toggleElementVisibility('formRegistro', true);
        toggleElementVisibility('tablaPacientes', false);

        // Cambiar el comportamiento del botón de guardar
        const formPaciente = document.getElementById('formPaciente');
        formPaciente.removeEventListener('submit', handleSubmitCreate); // Quitar evento de creación
        formPaciente.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Crear un objeto con los datos actualizados
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
                ocupacion: document.getElementById('ocupacion').value,
            };

            try {
                // Enviar los datos actualizados al servidor
                await updatePaciente(cedula, pacienteActualizado);
                alert('Paciente actualizado correctamente');

                // Reiniciar el formulario y mostrar la tabla
                resetForm('formPaciente');
                toggleElementVisibility('formRegistro', false);
                toggleElementVisibility('tablaPacientes', true);

                // Actualizar la tabla
                const pacientes = await fetchPacientes();
                populateTable(pacientes, 'cuerpoTabla');
            } catch (error) {
                alert('Error al actualizar el paciente');
                console.error(error);
            }
        });
    } catch (error) {
        alert('Error al cargar los datos del paciente');
        console.error(error);
    }
}

