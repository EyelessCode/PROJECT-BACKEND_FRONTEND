// app.js

const API_URL_BASE = "http://localhost:4000/comsulmed";
const API_URL_ENFERMERAS = `${API_URL_BASE}/enfermera`;
const API_URL_TOMA_SIGNOS = `${API_URL_BASE}/tomaSigno`;
const API_URL_PACIENTES = `${API_URL_BASE}/paciente`;
const API_URL_CENTROS_MEDICOS = `${API_URL_BASE}/centroMedico`; // Nueva URL para centros médicos

document.addEventListener("DOMContentLoaded", () => {
    cargarCentrosMedicos();
    cargarEnfermeras();

    document.getElementById("btnBuscarPaciente").addEventListener("click", buscarPaciente);
    document.getElementById("btnRegistrar").addEventListener("click", registrarTomaSignos);
});

// Cargar centros médicos dinámicamente
async function cargarCentrosMedicos() {
    try {
        const response = await fetch(API_URL_CENTROS_MEDICOS);
        if (!response.ok) throw new Error("Error al cargar los centros médicos.");

        const centrosMedicos = await response.json();
        const selectCentroMedico = document.getElementById("centroMedico");

        centrosMedicos.forEach((centro) => {
            const option = document.createElement("option");
            option.value = centro.codigo; // Suponiendo que `codigo` es el ID del centro médico
            option.textContent = centro.nombre; // Suponiendo que `nombre` es el nombre del centro médico
            selectCentroMedico.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert("No se pudo cargar la lista de centros médicos.");
    }
}

// Registrar toma de signos
async function registrarTomaSignos() {
    const centroMedicoId = document.getElementById("centroMedico").value;
    const enfermeraId = document.getElementById("enfermera").value;
    const codigoPaciente = document.getElementById("codigoPaciente").value;

    if (!centroMedicoId || !enfermeraId || !codigoPaciente) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    const tomaSignos = {
        fecha: new Date().toISOString().split("T")[0], // Fecha en formato YYYY-MM-DD
        centroMedicoId: parseInt(centroMedicoId),
        pacienteId: parseInt(codigoPaciente),
        enfermeraId: parseInt(enfermeraId),
        observacion: ""
    };

    try {
        const response = await fetch(API_URL_TOMA_SIGNOS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tomaSignos)
        });

        if (!response.ok) throw new Error("Error al registrar la toma de signos.");

        const responseData = await response.json();
        alert("Toma de signos registrada correctamente.");
        window.location.href = `${API_URL_BASE}/signoPaciente/html?numero=${responseData.numero}`;
    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo registrar la toma de signos. Inténtelo más tarde.");
    }
}


///

// Agregar el evento de búsqueda de paciente
document.getElementById("btnBuscarPaciente").addEventListener("click", buscarPaciente);

// Función para buscar al paciente por código
async function buscarPaciente() {
    const codigoPaciente = document.getElementById("codigoPaciente").value;

    if (!codigoPaciente) {
        alert("Por favor, ingrese un código de paciente.");
        return;
    }

    try {
        const response = await fetch(`${API_URL_PACIENTES}/${codigoPaciente}`);
        if (!response.ok) throw new Error("Paciente no encontrado.");

        const paciente = await response.json();
        mostrarDatosPaciente(paciente);
    } catch (error) {
        console.error(error);
        alert("Error al buscar el paciente. Verifique el código ingresado.");
    }
}

// Función para mostrar los datos del paciente en etiquetas dinámicas
function mostrarDatosPaciente(paciente) {
    const datosPacienteDiv = document.getElementById("datosPaciente");
    datosPacienteDiv.innerHTML = ""; // Limpiar datos previos

    // Atributos a mostrar (excluyendo el código)
    const atributos = [
        { label: "Nombres y Apellidos", value: `${paciente.nombres} ${paciente.apellidos}` },
        { label: "Edad", value: calcularEdad(new Date(paciente.fechaNacimiento)) },
        { label: "Fecha de Nacimiento", value: paciente.fechaNacimiento },
        { label: "Género", value: paciente.genero },
        { label: "Teléfono", value: paciente.telefono },
        { label: "Tipo de Sangre", value: paciente.tipoSangre },
        { label: "Dirección", value: paciente.direccion || "No especificada" },
        { label: "Correo", value: paciente.correo },
        { label: "Ocupación", value: paciente.ocupacion || "No especificada" },
    ];

    // Crear etiquetas dinámicamente
    atributos.forEach((atributo) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${atributo.label}:</strong> ${atributo.value}`;
        datosPacienteDiv.appendChild(p);
    });

    datosPacienteDiv.style.display = "block"; // Mostrar el contenedor
}

// Calcular la edad del paciente
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) edad--;
    return edad;
}


document.addEventListener("DOMContentLoaded", () => {
    cargarEnfermeras();

    document.getElementById("btnRegistrar").addEventListener("click", registrarTomaSignos);
});

// Cargar las enfermeras en el select
async function cargarEnfermeras() {
    try {
        const response = await fetch(API_URL_ENFERMERAS);
        if (!response.ok) throw new Error("Error al cargar las enfermeras.");

        const enfermeras = await response.json();
        const selectEnfermera = document.getElementById("enfermera");

        enfermeras.forEach((enfermera) => {
            const option = document.createElement("option");
            option.value = enfermera.codigo; // ID de la enfermera
            option.textContent = `${enfermera.nombres} ${enfermera.apellidos}`;
            selectEnfermera.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert("No se pudo cargar la lista de enfermeras.");
    }
}
