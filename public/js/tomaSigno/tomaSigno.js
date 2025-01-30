// Máximo de formularios permitidos
const MAX_SIGNOS = 5;
let currentSignosCount = 1;

document.addEventListener("DOMContentLoaded", () => {
    cargarUnidades();
    cargarCentrosMedicos();
    cargarEnfermeras();

    document.getElementById("btnBuscarPaciente").addEventListener("click", buscarPaciente);
    document.getElementById("btnSeleccionarPaciente").addEventListener("click", abrirPopup);
    document.getElementById("btnCerrarPopup").addEventListener("click", cerrarPopup);
    document.getElementById("btnContinuar").addEventListener("click", mostrarFormularioSignos);
    document.getElementById("btnNuevoSigno").addEventListener("click", agregarFormularioSigno);

    document.getElementById("formSignoPaciente").addEventListener("submit", registrarDatos);
    document.getElementById("unidadSigno").addEventListener("change", manejarCambioUnidad);
    document.getElementById("valorSigno").addEventListener("input", validarValor);
});

function agregarFormularioSigno() {
    if (currentSignosCount >= MAX_SIGNOS) {
        alert("No puedes agregar más de 5 signos.");
        return;
    }

    // Obtener el formulario base para clonarlo
    const formBase = document.getElementById("formSignoPaciente");
    const nuevoFormulario = formBase.cloneNode(true); // Clonar el formulario base
    nuevoFormulario.style.display = "block"; // Asegurar que sea visible
    nuevoFormulario.id = `formSignoPaciente_${currentSignosCount}`; // Asignar un nuevo ID único

    // Resetear los valores de los campos en el nuevo formulario
    const inputs = nuevoFormulario.querySelectorAll("input, select");
    inputs.forEach((input) => {
        input.value = ""; // Limpiar el valor
        input.id = `${input.id}_${currentSignosCount}`; // Cambiar ID único para evitar conflictos
    });

    // Agregar el nuevo formulario al contenedor
    document.querySelector("main").appendChild(nuevoFormulario);
    currentSignosCount++;

    // Registrar eventos para los nuevos campos
    nuevoFormulario.querySelector(`#unidadSigno_${currentSignosCount - 1}`).addEventListener("change", manejarCambioUnidad);
    nuevoFormulario.querySelector(`#valorSigno_${currentSignosCount - 1}`).addEventListener("input", validarValor);

    alert("Se agregó un nuevo formulario de signo.");
}
