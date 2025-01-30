import {cerrarPopup,validarValor,manejarCambioUnidad} from './utils.js';
import {abrirPopup,buscarPaciente,cargarCentrosMedicos,
    cargarEnfermeras,cargarUnidades,registrarDatos
} from './load.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarUnidades();
    cargarCentrosMedicos();
    cargarEnfermeras();

    // Botones principales
    document.getElementById("btnBuscarPaciente").addEventListener("click", buscarPaciente);
    document.getElementById("btnSeleccionarPaciente").addEventListener("click", abrirPopup);
    document.getElementById("btnCerrarPopup").addEventListener("click", cerrarPopup);
    document.getElementById("btnContinuar").addEventListener("click", mostrarFormularioSignos);
    document.getElementById("btnNuevoSigno").addEventListener("click", mostrarNuevoFormularioSignos);
    document.getElementById("formSignoPaciente").addEventListener("submit", registrarDatos);

    // Eventos de unidad y valor
    document.getElementById("unidadSigno").addEventListener("change", manejarCambioUnidad);
    document.getElementById("valorSigno").addEventListener("input", validarValor);
});

function mostrarFormularioSignos() {
    const centroMedico = document.getElementById("centroMedico").value;
    const enfermera = document.getElementById("enfermera").value;
    const paciente = document.getElementById("codigoPaciente").value;

    if (!centroMedico || !enfermera || !paciente) {
        alert("Complete todos los campos para continuar.");
        return;
    }

    document.getElementById("formSignoPaciente").style.display = "block";
}

function mostrarNuevoFormularioSignos() {
    const unidadSigno = document.getElementById("unidadSigno").value;
    const valorSigno = document.getElementById("valorSigno").value;

    if (!unidadSigno||!valorSigno) {
        alert(`1ro rellene el 1er campo antes de agregar uno nuevo!`)
    }
    document.getElementById("formSignoPaciente").style.display = "block";
}