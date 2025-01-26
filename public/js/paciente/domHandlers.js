export function toggleElementVisibility(elementId, isVisible) {
    const element = document.getElementById(elementId);
    element.style.display = isVisible ? 'block' : 'none';
}

export function resetForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
}

export function populateTable(data, tableBodyId) {
    const cuerpoTabla = document.getElementById(tableBodyId);
    cuerpoTabla.innerHTML = '';

    data.forEach(paciente => {
        const fila = document.createElement('tr');
        Object.values(paciente).forEach(value => {
            const celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });
        cuerpoTabla.appendChild(fila);
    });
}
