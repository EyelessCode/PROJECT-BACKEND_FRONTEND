import { mostrarEnfermerasTabla } from './utils.js';
import { buscarEnfermera, cargarEnfermeras } from './load.js';


document.getElementById('btnListarEnfermeras').addEventListener('click', async () => {
    console.log('Listar Enfermeras')
    document.getElementById('tablaEnfermeras').style.display = 'block'
    document.getElementById('btnOcultarEnfermeras').style.display = 'inline'
    const enfermera = await cargarEnfermeras()
    mostrarEnfermerasTabla(enfermera)
})

document.getElementById('btnOcultarEnfermeras').addEventListener('click', () => {
    console.log('Ocultar Tabla')
    document.getElementById('tablaEnfermeras').style.display = 'none'
    document.getElementById('btnOcultarEnfermeras').style.display = 'none'
})

document.getElementById('btnBuscarEnfermera').addEventListener('click', async () => {
    const codigo = document.getElementById('buscarEnfermera').value
    if (!codigo) {
        return alert('Ingrese el código de la enfermera')
    }

    const result = await buscarEnfermera(codigo)
    if (result.success) {
        alert(`Enfermera encontrada: ${result.enfermera.nombres} en ${result.enfermera.especialidad}`)
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
