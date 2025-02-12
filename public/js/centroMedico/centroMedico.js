import { mostrarCentrosEnTabla } from './utils.js';
import { buscarCentroMedico, cargarCentrosMedicos } from './load.js';


document.getElementById('btnListarCentros').addEventListener('click', async () => {
    console.log('Listar Centros Médicos')
    document.getElementById('tablaCentros').style.display = 'block'
    document.getElementById('btnOcultarCentros').style.display = 'inline'
    const centros = await cargarCentrosMedicos()
    mostrarCentrosEnTabla(centros)
})

document.getElementById('btnOcultarCentros').addEventListener('click', () => {
    console.log('Ocultar Tabla')
    document.getElementById('tablaCentros').style.display = 'none'
    document.getElementById('btnOcultarCentros').style.display = 'none'
})

document.getElementById('btnBuscarCentro').addEventListener('click', async () => {
    const codigo = document.getElementById('buscarCentro').value
    if (!codigo) {
        return alert('Ingrese el código del centro médico a buscar')
    }

    const result = await buscarCentroMedico(codigo)
    if (result.success) {
        alert(`Centro Médico encontrado: ${result.centro.nombre} en ${result.centro.direccion}`)
    } else {
        alert(result.message)
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        body.classList.toggle("sidebar-open");
    });
});

