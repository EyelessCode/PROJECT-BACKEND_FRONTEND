const API_URL_BASE = "http://localhost:4000/comsulmed";
const API_URL_ENFERMERAS = `${API_URL_BASE}/enfermera`;
const API_URL_PACIENTES = `${API_URL_BASE}/paciente`;
const API_URL_TOMA_SIGNOS = `${API_URL_BASE}/tomaSigno`;

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar la página cargando enfermeras y configurando eventos
    inicializarPagina();

    // Configurar eventos
    document.getElementById("btnBuscarPaciente").addEventListener("click", buscarPaciente);
    document.getElementById("btnCancelar").addEventListener("click", resetearFormulario);
    document.getElementById("btnSiguiente").addEventListener("click", registrarTomaSignos);
});

// Cargar enfermeras dinámicamente en el combobox
async function cargarEnfermeras() {
    try {
        const response = await fetch(API_URL_ENFERMERAS);
        if (!response.ok) throw new Error("Error al cargar las enfermeras");

        const enfermeras = await response.json();
        const selectEnfermera = document.getElementById("enfermera");
        selectEnfermera.innerHTML = '<option value="">Seleccione una enfermera</option>';

        enfermeras.forEach((enfermera) => {
            const option = document.createElement("option");
            option.value = enfermera.codigo; // Suponiendo que `codigo` es el ID de la enfermera
            option.textContent = `${enfermera.nombres} ${enfermera.apellidos}`;
            selectEnfermera.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert("Error al cargar las enfermeras. Por favor, inténtelo de nuevo.");
    }
}

// Buscar datos del paciente
async function buscarPaciente() {
    const codigoPaciente = document.getElementById("codigoPaciente").value;

    if (!codigoPaciente) {
        alert("Por favor, ingrese un código de paciente.");
        return;
    }

    try {
        const response = await fetch(`${API_URL_PACIENTES}/${codigoPaciente}`);
        if (!response.ok) throw new Error("Paciente no encontrado");

        const paciente = await response.json();
        mostrarDatosPaciente(paciente);
    } catch (error) {
        console.error(error);
        alert("Error al buscar el paciente. Verifique el código ingresado.");
    }
}

// Mostrar datos del paciente en la interfaz
function mostrarDatosPaciente(paciente) {
    document.getElementById("cedulaPaciente").textContent = paciente.cedula || "N/A";
    document.getElementById("nombrePaciente").textContent = `${paciente.nombres} ${paciente.apellidos}`;
    document.getElementById("edadPaciente").textContent = calcularEdad(new Date(paciente.fechaNacimiento));
    document.getElementById("fechaPaciente").textContent = paciente.fechaNacimiento || "N/A";
    document.getElementById("generoPaciente").textContent = paciente.genero || "N/A";
    document.getElementById("telefonoPaciente").textContent = paciente.telefono || "N/A";
    document.getElementById("sangrePaciente").textContent = paciente.tipoSangre || "N/A";
    document.getElementById("direccionPaciente").textContent = paciente.direccion || "N/A";
    document.getElementById("correoPaciente").textContent = paciente.correo || "N/A";
    document.getElementById("ocupacionPaciente").textContent = paciente.ocupacion || "N/A";

    document.getElementById("datosPaciente").style.display = "block";
}

// Calcular la edad del paciente
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// Registrar una nueva toma de signos
async function registrarTomaSignos() {
    const enfermeraId = document.getElementById("enfermera").value;
    const codigoPaciente = document.getElementById("codigoPaciente").value;
    const centroMedicoId = 1; // Este puede ser dinámico si es necesario

    if (!enfermeraId || !codigoPaciente) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    const tomaSignos = {
        fecha: new Date().toLocaleDateString(),
        centroMedicoId,
        pacienteId: parseInt(codigoPaciente),
        enfermeraId: parseInt(enfermeraId),
        observacion: "" // Opcional
    };

    try {
        const response = await fetch(API_URL_TOMA_SIGNOS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tomaSignos),
        });
    
        const responseData = await response.json();
    
        if (!response.ok) {
            throw new Error(responseData.message || "Error desconocido");
        }
    
        alert("Toma de signos registrada correctamente.");
        window.location.href = `http://localhost:4000/comsulmed/signoPaciente/html?numero=${responseData.numero}`;
    } catch (error) {
        console.error("Error al registrar la toma de signos:", error);
    
        // Si la respuesta tiene más detalles, mostrarlos
        if (error.response) {
            console.error("Respuesta del servidor:", error.response);
        }
    
        alert(error.message || "Error al registrar la toma de signos.");
    }
    
}

// Restablecer el formulario al estado inicial
function resetearFormulario() {
    document.getElementById("formTomaSignos").reset();
    document.getElementById("datosPaciente").style.display = "none";
}

// Inicializar la página
async function inicializarPagina() {
    document.getElementById("fechaActual").textContent = new Date().toLocaleDateString();
    await cargarEnfermeras();
}
