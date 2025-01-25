document.getElementById('btnListarEnfermeras').addEventListener('click', () => {
    document.getElementById('tablaEnfermeras').style.display = 'block';
    document.getElementById('btnOcultarEnfermeras').style.display = 'inline';
    // Función para cargar las enfermeras
});

document.getElementById('btnOcultarEnfermeras').addEventListener('click', () => {
    document.getElementById('tablaEnfermeras').style.display = 'none';
    document.getElementById('btnOcultarEnfermeras').style.display = 'none';
});
