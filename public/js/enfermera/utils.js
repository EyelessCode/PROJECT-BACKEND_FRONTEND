export function mostrarEnfermerasTabla(enfermeras) {
    const cuerpoTabla = document.getElementById('cuerpoTablaEnfermeras')
    cuerpoTabla.innerHTML = ''

    enfermeras.forEach(enfermera => {
        const fila = document.createElement('tr')

        let celda = document.createElement('td')
        celda.textContent = enfermera.codigo
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = enfermera.cedula
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = enfermera.nombres
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = enfermera.apellidos
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = enfermera.especialidad
        fila.appendChild(celda)

        cuerpoTabla.appendChild(fila)
    })
}
