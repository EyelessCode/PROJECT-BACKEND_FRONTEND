import {mostrarCentrosEnTabla} from './utils.js';

const API_URL = "http://localhost:4000/comsulmed/centroMedico";

document.getElementById('btnListarCentros').addEventListener('click', async () => {
    console.log('Listar Centros Médicos');
    document.getElementById('tablaCentros').style.display = 'block';
    document.getElementById('btnOcultarCentros').style.display = 'inline';
    const centros = await cargarCentrosMedicos();
    mostrarCentrosEnTabla(centros);  // Mostrar los centros médicos en la tabla
});

document.getElementById('btnOcultarCentros').addEventListener('click', () => {
    console.log('Ocultar Tabla');
    document.getElementById('tablaCentros').style.display = 'none';
    document.getElementById('btnOcultarCentros').style.display = 'none';
});

document.getElementById('btnBuscarCentro').addEventListener('click', async () => {
    const codigo = document.getElementById('buscarCentro').value;
    const result = await buscarCentroMedico(codigo);
    if (result.success) {
        alert(`Centro Médico encontrado: ${result.centro.nombre} en ${result.centro.direccion}`);
    } else {
        alert(result.message);
    }
});


