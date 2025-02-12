import {editarPaciente,eliminarPaciente} from './load.js';

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
        btnEditar.onclick = () => editarPaciente(Number(paciente.codigo))
        acciones.appendChild(btnEditar)

        const btnEliminar = document.createElement('button')
        btnEliminar.textContent = 'Eliminar'
        btnEliminar.onclick = () => eliminarPaciente(Number(paciente.codigo))
        acciones.appendChild(btnEliminar)

        fila.appendChild(acciones)
        cuerpoTabla.appendChild(fila)
    })
}
