export function mostrarCentrosEnTabla(centros) {
    const cuerpoTabla = document.getElementById('cuerpoTablaCentros');
    cuerpoTabla.innerHTML = '';  // Limpiar la tabla antes de agregar datos

    centros.forEach(centro => {
        const fila = document.createElement('tr');

        // Crear celdas y agregar los datos en el orden correcto
        let celda = document.createElement('td');
        celda.textContent = centro.codigo;
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = centro.RUC;
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = centro.nombre;
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = centro.direccion;
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = centro.telefono;
        fila.appendChild(celda);

        cuerpoTabla.appendChild(fila);
    });
}