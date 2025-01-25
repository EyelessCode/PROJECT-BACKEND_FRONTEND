document.getElementById('btnListarCentros').addEventListener('click', () => {
    document.getElementById('tablaCentros').style.display = 'block';
    document.getElementById('btnOcultarCentros').style.display = 'inline';
    // Función para cargar los centros médicos
});

document.getElementById('btnOcultarCentros').addEventListener('click', () => {
    document.getElementById('tablaCentros').style.display = 'none';
    document.getElementById('btnOcultarCentros').style.display = 'none';
});
