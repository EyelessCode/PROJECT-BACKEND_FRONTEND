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