const API_URL = "http://localhost:4000/comsulmed/paciente";

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

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paciente)
        });

        const responseData = await response.json();
        console.log('Respuesta del Servidor:', responseData);

        if (response.ok) {
            alert('Paciente registrado correctamente');
            document.getElementById('formPaciente').reset();
            document.getElementById('formRegistro').style.display = 'none';
            cargarPacientes();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al registrar el paciente');
        console.error('Error en la respuesta del servidor:', responseData);
        alert(`Error al registrar el paciente: ${responseData.message || 'Desconocido'}`);
    }
});





function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    const dia = hoy.getDate() - fechaNacimiento.getDate();

    // Ajuste para el caso en que el cumpleaños no ha sido cumplido este año aún
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edadCalculada--;
    }

    return edadCalculada;
}

async function cargarPacientes() {
    try {
        console.log('Cargando Pacientes');
        const response = await fetch(API_URL);
        const pacientes = await response.json();
        console.log('Pacientes Cargados:', pacientes);

        const cuerpoTabla = document.getElementById('cuerpoTabla');
        cuerpoTabla.innerHTML = '';  // Limpiar la tabla antes de agregar datos

        pacientes.forEach(paciente => {
            const fila = document.createElement('tr');

            // Crear celdas y agregar los datos en el orden correcto
            let celda = document.createElement('td');
            celda.textContent = paciente.cedula;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.nombres;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.apellidos;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.edad;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.genero;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.fechaNacimiento;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.tipoSangre;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.telefono;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.direccion;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.correo;
            fila.appendChild(celda);

            celda = document.createElement('td');
            celda.textContent = paciente.ocupacion;
            fila.appendChild(celda);

            const acciones = document.createElement('td');
            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = () => editarPaciente(paciente.codigo);
            acciones.appendChild(btnEditar);

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => eliminarPaciente(paciente.codigo);
            acciones.appendChild(btnEliminar);

            fila.appendChild(acciones);
            cuerpoTabla.appendChild(fila);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar los pacientes');
    }
}


document.getElementById('btnBuscar').addEventListener('click', async () => {
    const codigo = document.getElementById('buscarCodigo').value;
    try {
        console.log('Buscando Paciente con Código:', codigo);
        const response = await fetch(`${API_URL}/${codigo}`);
        if (response.ok) {
            const paciente = await response.json();
            alert(`Paciente encontrado: ${paciente.nombres} ${paciente.apellidos}`);
        } else {
            alert('Paciente no encontrado');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al buscar el paciente');
    }
});

async function editarPaciente(codigo) {
    try {
        const response = await fetch(`${API_URL}/${codigo}`);
        if (response.ok) {
            const paciente = await response.json();
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
            document.getElementById('formRegistro').style.display = 'block';
            document.getElementById('tablaPacientes').style.display = 'none';
            document.getElementById('btnDesaparecer').style.display = 'none';

            const formPaciente = document.getElementById('formPaciente');
            formPaciente.removeEventListener('submit', handleUpdateSubmit);
            formPaciente.addEventListener('submit', handleUpdateSubmit);

            async function handleUpdateSubmit(e) {
                e.preventDefault();
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
                };
                try {
                    const response = await fetch(`${API_URL}/${codigo}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(pacienteActualizado)
                    });
                    console.log('Respuesta del Servidor (Editar):', response);
                    const responseData = await response.json();
                    if (response.ok) {
                        alert('Paciente actualizado correctamente');
                        document.getElementById('formPaciente').reset();
                        document.getElementById('formRegistro').style.display = 'none';
                        cargarPacientes();
                    } else {
                        console.error('Error en la respuesta del servidor (Editar):', responseData);
                        alert(`Error al actualizar el paciente: ${responseData.message || 'Desconocido'}`);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error al actualizar el paciente');
                }
            }
        } else {
            alert('Paciente no encontrado');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar el paciente');
    }
}


async function eliminarPaciente(codigo) {
    try {
        const response = await fetch(`${API_URL}/${codigo}`, {
            method: 'DELETE'
        });
        console.log('Respuesta del Servidor (Eliminar):', response);
        if (response.ok) {
            alert('Paciente eliminado correctamente');
            cargarPacientes();  // Recargar la lista de pacientes después de eliminar uno
        } else {
            alert('Error al eliminar el paciente');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al eliminar el paciente');
    }
}
