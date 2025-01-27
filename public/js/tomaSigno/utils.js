import {tiposSignos} from './load.js';

export function limpiarFormulario() {
    // Restablecer el formulario de TomaSignos
    const formTomaSignos = document.getElementById("formTomaSignos");
    if (formTomaSignos) {
        formTomaSignos.reset();
        document.getElementById("datosPaciente").innerHTML = "";
        document.getElementById("datosPaciente").style.display = "none";
    }

    // Restablecer el formulario de SignosPaciente
    const formSignoPaciente = document.getElementById("formSignoPaciente");
    if (formSignoPaciente) {
        formSignoPaciente.reset();
        document.getElementById("observacionSigno").value = "Sin observaciones";
        formSignoPaciente.style.display = "none";
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

export function validarValor() {
    const valorInput = document.getElementById("valorSigno").value;
    const unidadSeleccionada = document.getElementById("unidadSigno").value;

    if (!unidadSeleccionada || !valorInput) {
        document.getElementById("observacionSigno").value = "Sin observaciones";
        return;
    }

    const tipoSeleccionado = tiposSignos.find((tipo) => tipo.codigo == unidadSeleccionada);
    if (!tipoSeleccionado) return;

    const valor = parseFloat(valorInput);
    const { valorMinimo, valorMaximo } = tipoSeleccionado;

    if (valor < valorMinimo) {
        document.getElementById("observacionSigno").value = "Valor por debajo del rango permitido.";
    } else if (valor > valorMaximo) {
        document.getElementById("observacionSigno").value = "Valor por encima del rango permitido.";
    } else {
        document.getElementById("observacionSigno").value = "Valor dentro del rango normal.";
    }
}

export function manejarCambioUnidad() {
    document.getElementById("valorSigno").value = "";
    document.getElementById("observacionSigno").value = "Sin observaciones";
}
