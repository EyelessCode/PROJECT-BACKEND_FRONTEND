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

async function cargarCentrosMedicos() {
    try {
        console.log('Cargando Centros Médicos');
        const response = await fetch(API_URL);
        const centros = await response.json();
        console.log('Centros Médicos Cargados:', centros);
        return centros;
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar los centros médicos');
    }
}

async function buscarCentroMedico(codigo) {
    try {
        console.log('Buscando Centro Médico con Código:', codigo);
        const response = await fetch(`${API_URL}/${codigo}`);
        if (response.ok) {
            const centro = await response.json();
            return { success: true, centro: centro };
        } else {
            return { success: false, message: 'Centro Médico no encontrado' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Error al buscar el centro médico' };
    }
}
