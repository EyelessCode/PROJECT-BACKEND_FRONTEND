export function mostrarCentrosEnTabla(centros) {
    const cuerpoTabla = document.getElementById('cuerpoTablaCentros')
    cuerpoTabla.innerHTML = ''

    centros.sort((a, b) => a.codigo - b.codigo);
    centros.forEach(centro => {
        const fila = document.createElement('tr')

        let celda = document.createElement('td')
        celda.textContent = centro.codigo
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = centro.RUC
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = centro.nombre
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = centro.direccion
        fila.appendChild(celda)

        celda = document.createElement('td')
        celda.textContent = centro.telefono
        fila.appendChild(celda)

        cuerpoTabla.appendChild(fila)
    })
}
