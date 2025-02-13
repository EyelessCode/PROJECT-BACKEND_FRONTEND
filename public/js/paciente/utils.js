import { editarPaciente, eliminarPaciente, actualizarPaciente, cargarPacientes } from './load.js';

export function calcularEdad(fechaNacimiento) {
    const hoy = new Date() //! Obtiene la fecha actual
    let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear() //! El año actual MENOS el año que se introdujo
    const mes = hoy.getMonth() - fechaNacimiento.getMonth() //! El mes actual MENOS el mes que se introdujo
    const dia = hoy.getDate() - fechaNacimiento.getDate() //! El día actual MENOS el día que se introdujo

    //! Ajuste para el caso en que el cumpleaños no ha sido cumplido este año aún
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edadCalculada--
    }

    return Number(edadCalculada)
}

export function mostrarTablaPaciente(pacientes) {
    const cuerpoTabla = document.getElementById('cuerpoTabla')
    cuerpoTabla.innerHTML = ''
    pacientes.sort((a, b) => a.codigo - b.codigo);

    pacientes.forEach(paciente => {
        const fila = document.createElement('tr')

        let celda = document.createElement('td')
        celda.textContent = Number(paciente.codigo)
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = paciente.cedula
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = paciente.nombres
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = paciente.apellidos
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = Number(paciente.edad)
        fila.appendChild(celda)

        /* celda = document.createElement('td')
        celda.textContent = paciente.genero
        fila.appendChild(celda) */

        celda = document.createElement('td')
        celda.textContent = paciente.fechaNacimiento
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = paciente.tipoSangre
        fila.appendChild(celda)

        /* celda = document.createElement('td')
        celda.textContent = paciente.telefono
        fila.appendChild(celda) */

        /* celda = document.createElement('td')
        celda.textContent = paciente.direccion
        fila.appendChild(celda) */

        /* celda = document.createElement('td')
        celda.textContent = paciente.correo
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = paciente.ocupacion
        fila.appendChild(celda) */

        const acciones = document.createElement('td')
        const btnEditar = document.createElement('button')
        btnEditar.textContent = 'Editar'
        btnEditar.addEventListener('click', () => {
            console.log(`Botón editar presionado para código: ${paciente.codigo}`); // 🔹 Depuración
            editarPaciente(Number(paciente.codigo));
        });
        acciones.appendChild(btnEditar)

        const btnEliminar = document.createElement('button')
        btnEliminar.textContent = 'Eliminar'
        btnEliminar.onclick = () => eliminarPaciente(Number(paciente.codigo))
        acciones.appendChild(btnEliminar)

        fila.appendChild(acciones)
        cuerpoTabla.appendChild(fila)
    })
}

export function volverAInicio() {
    document.getElementById('formContainer').innerHTML = '';
    document.getElementById('tablaPacientes').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'none';
    cargarPacientes();
}


export function generarFormularioEdicion(paciente) {
    const contenedor = document.getElementById('formContainer');
    contenedor.innerHTML = `
        <div id="formRegistro">
            <h2 id="titulo-paciente">Editar Paciente</h2>
            <form id="formPaciente">
                <label for="cedula">Cédula:</label>
                <input type="text" id="cedula" value="${paciente.cedula}" required maxlength="10" minlength="10" disabled>
                
                <label for="nombres">Nombres:</label>
                <input type="text" id="nombres" value="${paciente.nombres}" required>
                
                <label for="apellidos">Apellidos:</label>
                <input type="text" id="apellidos" value="${paciente.apellidos}" required>
                
                <label for="genero">Género:</label>
                <select id="genero" required>
                    <option value="Masculino" ${paciente.genero === 'Masculino' ? 'selected' : ''}>Masculino</option>
                    <option value="Femenino" ${paciente.genero === 'Femenino' ? 'selected' : ''}>Femenino</option>
                </select>
                
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" value="${paciente.fechaNacimiento}" required>
                
                <label for="tipoSangre">Tipo de Sangre:</label>
                <input type="text" id="tipoSangre" value="${paciente.tipoSangre}" required>
                
                <label for="telefono">Teléfono:</label>
                <input type="tel" id="telefono" value="${paciente.telefono}" required>
                
                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" value="${paciente.direccion || ''}">
                
                <label for="correo">Correo:</label>
                <input type="email" id="correo" value="${paciente.correo}" required>
                
                <label for="ocupacion">Ocupación:</label>
                <input type="text" id="ocupacion" value="${paciente.ocupacion || 'ninguno'}" required>
                
                <div class="form-buttons">
                    <button id="btnActualizar" class="btn-accion" type="submit">
                    Actualizar
                    <svg class="svgEditar xmlns="http://www.w3.org/2000/svg"
                                height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#000000"><path
                                    d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                    </button>

                    <button id="btnCancelar" class="btn-accion" type="button">
                    Cancelar
                    <svg class="svgCancelar"
                                xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px"
                                fill="#000000"><path
                                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>
            </form>
        </div>
    `;

    document.getElementById('tablaPacientes').style.display = 'none';
    document.getElementById('btnDesaparecer').style.display = 'none';

    document.getElementById('formPaciente').addEventListener('submit', (e) => actualizarPaciente(e, paciente.codigo));
    document.getElementById('btnCancelar').addEventListener('click', () => volverAInicio());
}