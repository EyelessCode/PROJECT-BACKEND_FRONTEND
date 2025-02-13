import { tiposSignos, cargarUnidadesEnSelect } from './load.js';

export function limpiarFormularioTotal() {
    //? 1. Restablecer el formulario de TomaSignos
    const formTomaSignos = document.getElementById("formTomaSignos")
    if (formTomaSignos) {
        formTomaSignos.reset()
        document.getElementById("datosPaciente").innerHTML = ""
        document.getElementById("datosPaciente").style.display = "none"
    }

    //? 2. Limpiar el contenedor de signos dinámicos y dejar solo uno inicial
    limpiarContenedorSignos()
    
}

export function limpiarContenedorSignos() {
    //? 3. Ocultar y resetear el formulario de SignosPaciente
    const formSignoPaciente = document.getElementById("formSignoPaciente")
    if (formSignoPaciente) {
        formSignoPaciente.reset()
        formSignoPaciente.style.display = "none"
    }

    const contenedorSignos = document.getElementById("contenedorSignos")
    if (contenedorSignos) {
        contenedorSignos.innerHTML =
        `
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
        `

        //? 4. Cargar unidades en el nuevo select
        const nuevoSelect = contenedorSignos.querySelector(".unidadSigno")
        cargarUnidadesEnSelect(nuevoSelect)
    }
    const formTomaSignos = document.getElementById("formTomaSignos")

    //? 5. Mostrar el formulario principal
    if (formTomaSignos) {
        formTomaSignos.style.display = "block"
    }
    actualizarEstadoBotonAgregar()

}

export function cerrarPopup() {
    const popup = document.getElementById("popupPacientes")
    popup.style.display = "none"

    popup.removeEventListener("click", cerrarPopupClickAfuera);
}

export function cerrarPopupClickAfuera(e) {
    const contenidoPopup = document.querySelector(".popup-content"); // Ajusta según tu HTML
    if (!contenidoPopup.contains(e.target)) {
        cerrarPopup();
    }
}

export function calcularEdad(fechaNacimiento) {
    const hoy = new Date() //! Obtiene la fecha actual
    let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear() //! El año actual MENOS el año que se introdujo
    const mes = hoy.getMonth() - fechaNacimiento.getMonth() //! El mes actual MENOS el mes que se introdujo
    const dia = hoy.getDate() - fechaNacimiento.getDate() //! El día actual MENOS el día que se introdujo

    //! Ajuste para el caso en que el cumpleaños no ha sido cumplido este año aún
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edadCalculada--
    }

    return edadCalculada
}

export function validarValor(inputValor) {
    const unidadSeleccionada = inputValor.closest(".signo").querySelector(".unidadSigno").value
    const observacionInput = inputValor.closest(".signo").querySelector(".observacionSigno")

    if (!unidadSeleccionada || !inputValor.value) {
        observacionInput.value = "Sin observaciones"
        return
    }

    const tipoSeleccionado = tiposSignos.find((tipo) => tipo.codigo == unidadSeleccionada)
    if (!tipoSeleccionado) return

    const valor = parseFloat(inputValor.value)
    const { valorMinimo, valorMaximo } = tipoSeleccionado

    if (valor < valorMinimo) {
        observacionInput.value = "Valor por debajo del rango permitido"
    } else if (valor > valorMaximo) {
        observacionInput.value = "Valor por encima del rango permitido"
    } else {
        observacionInput.value = "Valor dentro del rango normal"
    }
}

export function manejarCambioUnidad(selectUnidad) {
    const signoDiv = selectUnidad.closest(".signo")
    signoDiv.querySelector(".valorSigno").value = ""
    signoDiv.querySelector(".observacionSigno").value = "Sin observaciones"
}

export function actualizarEstadoBotonAgregar() {
    const btnAgregar = document.getElementById("btnAgregarSigno");
    const signosExistentes = document.querySelectorAll(".signo").length;

    //// btnAgregar.disabled = signosExistentes >= 5;
    if (signosExistentes>=5) { //! Deshabilitar botón si hay 5 signos
        btnAgregar.disabled=true
    }else{
        btnAgregar.disabled=false
    }

    //? Cambiar estilo visual si está deshabilitado
    // btnAgregar.style.backgroundColor = signosExistentes >= 5 ? "#cccccc" : "#4CAF50";
}
