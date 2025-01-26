import {mostrarEnfermerasTabla} from './utils.js';

const API_URL = "http://localhost:4000/comsulmed/enfermera";

document.getElementById('btnListarEnfermeras').addEventListener('click', async () => {
    console.log('Listar Enfermeras');
    document.getElementById('tablaEnfermeras').style.display = 'block';
    document.getElementById('btnOcultarEnfermeras').style.display = 'inline';
    const enfermera = await cargarEnfermeras();
    mostrarEnfermerasTabla(enfermera);
});

document.getElementById('btnOcultarEnfermeras').addEventListener('click', () => {
    console.log('Ocultar Tabla');
    document.getElementById('tablaEnfermeras').style.display = 'none';
    document.getElementById('btnOcultarEnfermeras').style.display = 'none';
});

document.getElementById('btnBuscarEnfermera').addEventListener('click', async () => {
    const codigo = document.getElementById('buscarEnfermera').value;
    const result = await buscarEnfermera(codigo);
    if (result.success) {
        alert(`Enfermera encontrada: ${result.enfermera.nombres} en ${result.enfermera.especialidad}`);
    } else {
        alert(result.message);
    }
});

async function cargarEnfermeras() {
    try {
        console.log('Cargando Enfermeras');
        const response = await fetch(API_URL);
        const enfermeras = await response.json();
        console.log('Enfermeras Cargadas:', enfermeras);
        return enfermeras;
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar las Enfermeras');
    }
}

async function buscarEnfermera(codigo) {
    try {
        console.log('Buscando Enfermera con Código:', codigo);
        const response = await fetch(`${API_URL}/${codigo}`);
        if (response.ok) {
            const centro = await response.json();
            return { success: true, centro: centro };
        } else {
            return { success: false, message: 'Enfermera no encontrada' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Error al buscar la Enfermera' };
    }
}
