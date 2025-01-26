const API_URL_TIPO_SIGNO = "http://localhost:4000/comsulmed/tipoSigno"; // Endpoint para obtener tipos de signos

document.addEventListener("DOMContentLoaded", () => {
    cargarUnidades(); // Cargar las unidades dinámicamente

    document.getElementById("unidadSigno").addEventListener("change", manejarCambioUnidad);
    document.getElementById("valorSigno").addEventListener("input", validarValor);
    document.getElementById("btnCancelar").addEventListener("click", limpiarFormulario);
    document.getElementById("btnRegresar").addEventListener("click", regresar);
    document.getElementById("formSignoPaciente").addEventListener("submit", registrarSignoPaciente);
});

let tiposSignos = []; // Lista de tipos de signos cargados desde el backend

// Cargar dinámicamente las unidades en el combobox
async function cargarUnidades() {
    try {
        const response = await fetch(API_URL_TIPO_SIGNO);
        if (!response.ok) throw new Error("Error al cargar las unidades.");

        tiposSignos = await response.json();
        const unidadSelect = document.getElementById("unidadSigno");

        tiposSignos.forEach((tipo) => {
            const option = document.createElement("option");
            option.value = tipo.codigo; // ID de la unidad
            option.textContent = `${tipo.descripcion} (${tipo.unidad})`; // Nombre + unidad
            unidadSelect.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert("No se pudieron cargar las unidades. Inténtelo nuevamente.");
    }
}

// Manejar el cambio de unidad seleccionada
function manejarCambioUnidad() {
    document.getElementById("valorSigno").value = ""; // Limpiar el valor ingresado
    document.getElementById("observacionSigno").value = "Sin observaciones"; // Restablecer la observación
}

// Validar el valor ingresado según la unidad seleccionada
function validarValor() {
    const valorInput = document.getElementById("valorSigno").value;
    const unidadSeleccionada = document.getElementById("unidadSigno").value;

    if (!unidadSeleccionada || !valorInput) {
        document.getElementById("observacionSigno").value = "Sin observaciones";
        return;
    }

    const tipoSeleccionado = tiposSignos.find((tipo) => tipo.codigo == unidadSeleccionada);

    if (!tipoSeleccionado) {
        console.error("Unidad seleccionada no encontrada en la lista.");
        return;
    }

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

// Limpiar el formulario
function limpiarFormulario() {
    document.getElementById("formSignoPaciente").reset();
    document.getElementById("observacionSigno").value = "Sin observaciones";
}

// Regresar al formulario anterior
function regresar() {
    window.location.href = "http://localhost:4000/comsulmed/tomaSigno/html";
}

// Registrar el signo del paciente
async function registrarSignoPaciente(event) {
    event.preventDefault(); // Prevenir el envío por defecto

    const unidadSeleccionada = document.getElementById("unidadSigno").value;
    const valorSigno = document.getElementById("valorSigno").value;

    if (!unidadSeleccionada || !valorSigno) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    const comentario = document.getElementById("observacionSigno").value;
    const fecha = new Date().toISOString().split("T")[0]; // Fecha actual en formato YYYY-MM-DD

    const datosSigno = {
        tipoSignoId: parseInt(unidadSeleccionada),
        valor: parseFloat(valorSigno),
        tomaSignosId: 1, // Cambia según el ID de la toma de signos actual
        fecha: fecha,
        comentario: comentario,
    };

    try {
        const response = await fetch("http://localhost:4000/comsulmed/signoPaciente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosSigno),
        });

        if (!response.ok) throw new Error("Error al registrar el signo del paciente.");

        alert("Signo del paciente registrado correctamente.");
        limpiarFormulario();
    } catch (error) {
        console.error(error);
        alert("No se pudo registrar el signo del paciente. Inténtelo más tarde.");
    }
}
