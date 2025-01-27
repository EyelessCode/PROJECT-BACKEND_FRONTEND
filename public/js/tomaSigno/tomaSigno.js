import {limpiarFormulario} from './utils.js';
import {cargarCentrosMedicos} from './load.js';

const API_URL_BASE = "http://localhost:4000/comsulmed";
const API_URL_ENFERMERAS = `${API_URL_BASE}/enfermera`;
const API_URL_TOMA_SIGNOS = `${API_URL_BASE}/tomaSigno`;
const API_URL_PACIENTES = `${API_URL_BASE}/paciente`;
const API_URL_TIPO_SIGNO = `${API_URL_BASE}/tipoSigno`;

let tiposSignos = []; // Lista para almacenar los tipos de signos

//limpiar tomado

document.addEventListener("DOMContentLoaded", () => {
    cargarCentrosMedicos();
    cargarEnfermeras();
    cargarUnidades();

    // Botones principales
    document.getElementById("btnBuscarPaciente").addEventListener("click", buscarPaciente);
    document.getElementById("btnSeleccionarPaciente").addEventListener("click", abrirPopup);
    document.getElementById("btnCerrarPopup").addEventListener("click", cerrarPopup);
    document.getElementById("btnContinuar").addEventListener("click", mostrarFormularioSignos);
    document.getElementById("formSignoPaciente").addEventListener("submit", registrarDatos);

    // Eventos de unidad y valor
    document.getElementById("unidadSigno").addEventListener("change", manejarCambioUnidad);
    document.getElementById("valorSigno").addEventListener("input", validarValor);
});

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

// **Funciones para Centros Médicos**
//???

// **Funciones para Enfermeras**
async function cargarEnfermeras() {
    try {
        const response = await fetch(API_URL_ENFERMERAS);
        if (!response.ok) throw new Error("Error al cargar las enfermeras.");

        const enfermeras = await response.json();
        const selectEnfermera = document.getElementById("enfermera");

        enfermeras.forEach((enfermera) => {
            const option = document.createElement("option");
            option.value = enfermera.codigo;
            option.textContent = `${enfermera.nombres} ${enfermera.apellidos}`;
            selectEnfermera.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert("No se pudo cargar la lista de enfermeras.");
    }
}

// **Popup de Selección**
async function abrirPopup() {
    const popup = document.getElementById("popupPacientes");
    popup.style.display = "flex";

    try {
        const response = await fetch(API_URL_PACIENTES);
        if (!response.ok) throw new Error("Error al cargar los pacientes.");

        const pacientes = await response.json();
        const tablaPacientes = document.getElementById("tablaPacientes");
        tablaPacientes.innerHTML = ""; // Limpiar tabla antes de llenarla

        pacientes.forEach((paciente) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${paciente.codigo}</td>
                <td>${paciente.nombres}</td>
                <td>${paciente.apellidos}</td>
                <td>${calcularEdad(new Date(paciente.fechaNacimiento))}</td>
                <td>${paciente.telefono || "N/A"}</td>
            `;
            fila.addEventListener("click", () => seleccionarPaciente(paciente));
            tablaPacientes.appendChild(fila);
        });
    } catch (error) {
        console.error(error);
        alert("Error al cargar los pacientes.");
    }
}

function cerrarPopup() {
    document.getElementById("popupPacientes").style.display = "none";
}

function seleccionarPaciente(paciente) {
    if (confirm(`¿Desea seleccionar al paciente ${paciente.nombres} ${paciente.apellidos}?`)) {
        cerrarPopup();
        document.getElementById("codigoPaciente").value = paciente.codigo;
        mostrarDatosPaciente(paciente);
    }
}

// **Mostrar Datos del Paciente**
function mostrarDatosPaciente(paciente) {
    const datosPacienteDiv = document.getElementById("datosPaciente");
    datosPacienteDiv.innerHTML = ""; // Limpiar datos previos

    const atributos = [
        { label: "Nombres y Apellidos", value: `${paciente.nombres} ${paciente.apellidos}` },
        { label: "Edad", value: calcularEdad(new Date(paciente.fechaNacimiento)) },
        { label: "Fecha de Nacimiento", value: paciente.fechaNacimiento },
        { label: "Género", value: paciente.genero },
        { label: "Teléfono", value: paciente.telefono || "N/A" },
        { label: "Tipo de Sangre", value: paciente.tipoSangre || "N/A" },
        { label: "Dirección", value: paciente.direccion || "No especificada" },
        { label: "Correo", value: paciente.correo },
        { label: "Ocupación", value: paciente.ocupacion || "No especificada" },
    ];

    atributos.forEach((atributo) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${atributo.label}:</strong> ${atributo.value}`;
        datosPacienteDiv.appendChild(p);
    });

    datosPacienteDiv.style.display = "block";
}

// **Formulario de Signos**
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

// **Cargar Unidades de Signos**
async function cargarUnidades() {
    try {
        const response = await fetch(API_URL_TIPO_SIGNO);
        if (!response.ok) throw new Error("Error al cargar las unidades.");

        tiposSignos = await response.json();
        const unidadSelect = document.getElementById("unidadSigno");

        tiposSignos.forEach((tipo) => {
            const option = document.createElement("option");
            option.value = tipo.codigo;
            option.textContent = `${tipo.descripcion} (${tipo.unidad})`;
            unidadSelect.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert("No se pudieron cargar las unidades.");
    }
}

// **Validaciones y Registro**
function manejarCambioUnidad() {
    document.getElementById("valorSigno").value = "";
    document.getElementById("observacionSigno").value = "Sin observaciones";
}

function validarValor() {
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

async function registrarDatos(event) {
    event.preventDefault();

    const centroMedico = document.getElementById("centroMedico").value;
    const enfermera = document.getElementById("enfermera").value;
    const paciente = document.getElementById("codigoPaciente").value;

    if (!centroMedico || !enfermera || !paciente) {
        alert("Complete todos los campos obligatorios.");
        return;
    }

    const tomaSignosData = {
        fecha: new Date().toISOString().split("T")[0],
        centroMedicoId: parseInt(centroMedico),
        pacienteId: parseInt(paciente),
        enfermeraId: parseInt(enfermera),
        observacion: "",
    };
    
    const signoPacienteData = {
        tipoSignoId: Number(document.getElementById("unidadSigno").value),
        valor: parseFloat(document.getElementById("valorSigno").value),
        fecha: new Date().toISOString().split("T")[0],
        comentario: document.getElementById("observacionSigno").value,
    };

    console.log("TomaSignos Data:", tomaSignosData);
    console.log("SignoPaciente Data:", signoPacienteData);

    

    try {
        // 1. Registrar TomaSigno
        const responseTomaSigno = await fetch(API_URL_TOMA_SIGNOS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tomaSignosData), // Enviar datos de TomaSignos
        });
    
        if (!responseTomaSigno.ok) {
            const errorData = await responseTomaSigno.json();
            throw new Error(`Error al registrar TomaSigno: ${errorData.message || "Desconocido"}`);
        }
    
        const tomaSignosResult = await responseTomaSigno.json();
        console.log("TomaSigno registrado:", tomaSignosResult);
    
        // 2. Agregar tomaSignoId al signoPacienteData
        signoPacienteData.tomaSignosId = tomaSignosResult.numero; // Añadir el ID generado
        console.log("SignoPaciente Data con tomaSignoId:", signoPacienteData);
    
        // 3. Registrar SignosPaciente
        const responseSignoPaciente = await fetch(`${API_URL_BASE}/signoPaciente`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signoPacienteData), // Enviar datos de SignosPaciente
        });
    
        if (!responseSignoPaciente.ok) {
            const errorData = await responseSignoPaciente.json();
            throw new Error(`Error al registrar SignosPaciente: ${errorData.message || "Desconocido"}`);
        }
    
        alert("Toma de signos y signos del paciente registrados correctamente.");
        limpiarFormulario(); // Limpia los formularios después del registro
    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
    
}

// **Cálculo de Edad**
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) edad--;
    return edad;
}
