import {cerrarPopup, validarValor, manejarCambioUnidad} from './utils.js';
import {
    abrirPopup,
    buscarPaciente,
    cargarCentrosMedicos,
    cargarEnfermeras,
    cargarUnidades,
    registrarDatos,cargarUnidadesEnSelect
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
    document.getElementById("btnAgregarSigno").addEventListener("click", agregarNuevoSigno);
    document.getElementById("formSignoPaciente").addEventListener("submit", registrarDatos);

    // Eventos de unidad y valor (usando delegación de eventos)
    const contenedorSignos = document.getElementById("contenedorSignos");
    contenedorSignos.addEventListener("change", (event) => {
        if (event.target.classList.contains("unidadSigno")) {
            manejarCambioUnidad(event.target);
        }
    });
    contenedorSignos.addEventListener("input", (event) => {
        if (event.target.classList.contains("valorSigno")) {
            validarValor(event.target);
        }
    });
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

function agregarNuevoSigno() {
    const contenedorSignos = document.getElementById("contenedorSignos");
    const nuevoSigno = document.createElement("div");
    nuevoSigno.classList.add("signo");
    nuevoSigno.innerHTML = `
        <label for="unidadSigno">Unidad:</label>
        <select class="unidadSigno">
            <option value>Seleccione una unidad</option>
        </select>

        <label for="valorSigno">Valor:</label>
        <input type="number" class="valorSigno" required>

        <label for="observacionSigno">Observación:</label>
        <input type="text" class="observacionSigno" readonly>
    `;
    contenedorSignos.appendChild(nuevoSigno);

    // Cargar unidades en el nuevo combobox
    cargarUnidadesEnSelect(nuevoSigno.querySelector(".unidadSigno"));
}


