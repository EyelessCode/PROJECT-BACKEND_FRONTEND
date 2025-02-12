import { cerrarPopup, validarValor, manejarCambioUnidad, limpiarFormularioTotal, actualizarEstadoBotonAgregar } from './utils.js';
import {
    abrirPopup, buscarPaciente, cargarCentrosMedicos, cargarEnfermeras, cargarUnidades,
    registrarDatos, cargarUnidadesEnSelect
} from './load.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarUnidades()
    cargarCentrosMedicos()
    cargarEnfermeras()
    actualizarEstadoBotonAgregar();

    document.getElementById("btnBuscarPaciente").addEventListener("click", buscarPaciente)
    document.getElementById("btnSeleccionarPaciente").addEventListener("click", abrirPopup)
    document.getElementById("btnCerrarPopup").addEventListener("click", cerrarPopup)
    document.getElementById("btnContinuar").addEventListener("click", mostrarFormularioSignos)
    document.getElementById("btnAgregarSigno").addEventListener("click", agregarNuevoSigno)
    document.getElementById("formSignoPaciente").addEventListener("submit", registrarDatos)
    document.getElementById("btnCancelar").addEventListener("click", limpiarFormularioTotal)

    const contenedorSignos = document.getElementById("contenedorSignos")
    contenedorSignos.addEventListener("change", (e) => {
        if (e.target.classList.contains("unidadSigno")) {
            manejarCambioUnidad(e.target)
        }
    })
    contenedorSignos.addEventListener("input", (e) => {
        if (e.target.classList.contains("valorSigno")) {
            validarValor(e.target)
        }
    })
})

function mostrarFormularioSignos() {
    const centroMedico = document.getElementById("centroMedico").value
    const enfermera = document.getElementById("enfermera").value
    const paciente = document.getElementById("codigoPaciente").value

    if (!centroMedico || !enfermera || !paciente) {
        alert("Complete todos los campos para continuar")
        return
    }

    document.getElementById("formSignoPaciente").style.display = "block"
}

function agregarNuevoSigno() {
    const contenedorSignos = document.getElementById("contenedorSignos");
    const signosExistentes = document.querySelectorAll(".signo").length; // Contar signos actuales

    // Validar máximo de 5 signos
    if (signosExistentes >= 5) {
        alert("¡Máximo 5 signos permitidos!");
        return; // Detener la ejecución
    }

    const nuevoSigno = document.createElement("div");
    nuevoSigno.classList.add("signo");
    nuevoSigno.innerHTML = `
        <button type="button" class="btn-eliminar-signo">Eliminar Signo</button> <!-- Botón para eliminar -->
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
    cargarUnidadesEnSelect(nuevoSigno.querySelector(".unidadSigno"));

    // Agregar evento al botón de eliminar
    nuevoSigno.querySelector(".btn-eliminar-signo").addEventListener("click", () => {
        nuevoSigno.remove(); // Eliminar el signo
        actualizarEstadoBotonAgregar(); // Actualizar el botón
    });

    actualizarEstadoBotonAgregar(); // Actualizar el botón después de agregar
}

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        body.classList.toggle("sidebar-open");
    });
});
