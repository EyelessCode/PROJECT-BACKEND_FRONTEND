import {tiposSignos} from './load.js';

export function limpiarFormulario() {
    // Restablecer el formulario de TomaSignos
    const formTomaSignos = document.getElementById("formTomaSignos");
    if (formTomaSignos) {
        formTomaSignos.reset(); // Restablece los campos del formulario
        document.getElementById("datosPaciente").innerHTML = ""; // Limpia los datos del paciente
        document.getElementById("datosPaciente").style.display = "none"; // Oculta el contenedor de datos
    }

    // Restablecer el formulario de SignosPaciente
    const formSignoPaciente = document.getElementById("formSignoPaciente");
    if (formSignoPaciente) {
        formSignoPaciente.reset(); // Restablece los campos del formulario
        document.getElementById("observacionSigno").value = "Sin observaciones"; // Restablece la observación
        formSignoPaciente.style.display = "none"; // Oculta el formulario de signos
    }

    // Limpiar el contenedor de signos dinámicos
    const contenedorSignos = document.getElementById("contenedorSignos");
    if (contenedorSignos) {
        contenedorSignos.innerHTML = `
            <div class="signo">
                <label for="unidadSigno">Unidad:</label>
                <select class="unidadSigno">
                    <option value>Seleccione una unidad</option>
                </select>

                <label for="valorSigno">Valor:</label>
                <input type="number" class="valorSigno" required>

                <label for="observacionSigno">Observación:</label>
                <input type="text" class="observacionSigno" readonly>
            </div>
        `;
    }

    // Mostrar el formulario de TomaSignos
    if (formTomaSignos) {
        formTomaSignos.style.display = "block";
    }
}

export function cerrarPopup() {
    document.getElementById("popupPacientes").style.display = "none";
}

export function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) edad--;
    return edad;
}

export function validarValor(inputValor) {
    const unidadSeleccionada = inputValor.closest(".signo").querySelector(".unidadSigno").value;
    const observacionInput = inputValor.closest(".signo").querySelector(".observacionSigno");

    if (!unidadSeleccionada || !inputValor.value) {
        observacionInput.value = "Sin observaciones";
        return;
    }

    const tipoSeleccionado = tiposSignos.find((tipo) => tipo.codigo == unidadSeleccionada);
    if (!tipoSeleccionado) return;

    const valor = parseFloat(inputValor.value);
    const { valorMinimo, valorMaximo } = tipoSeleccionado;

    if (valor < valorMinimo) {
        observacionInput.value = "Valor por debajo del rango permitido.";
    } else if (valor > valorMaximo) {
        observacionInput.value = "Valor por encima del rango permitido.";
    } else {
        observacionInput.value = "Valor dentro del rango normal.";
    }
}

export function manejarCambioUnidad(selectUnidad) {
    const signoDiv = selectUnidad.closest(".signo");
    signoDiv.querySelector(".valorSigno").value = "";
    signoDiv.querySelector(".observacionSigno").value = "Sin observaciones";
}