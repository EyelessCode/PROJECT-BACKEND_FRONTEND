import { calcularEdad, cerrarPopup, limpiarFormularioTotal, limpiarContenedorSignos
    ,cerrarPopupClickAfuera
 } from './utils.js';

const API_URL_BASE = "http://localhost:4000/comsulmed"
const API_URL_ENFERMERAS = `${API_URL_BASE}/enfermera`
const API_URL_TOMA_SIGNOS = `${API_URL_BASE}/tomaSigno`
const API_URL_PACIENTES = `${API_URL_BASE}/paciente`
const API_URL_CENTROS_MEDICOS = `${API_URL_BASE}/centroMedico`
const API_URL_TIPO_SIGNO = `${API_URL_BASE}/tipoSigno`
const API_URL_SIGNO_PACIENTE = `${API_URL_BASE}/signoPaciente`

export let tiposSignos = []

export async function abrirPopup() {
    const popup = document.getElementById("popupPacientes")
    popup.style.display = "flex"

    try {
        const response = await fetch(API_URL_PACIENTES)
        if (!response.ok) throw new Error("Error al cargar los pacientes.")

        const pacientes = await response.json()
        const tablaPacientes = document.getElementById("tablaPacientes")
        tablaPacientes.innerHTML = ""
        pacientes.sort((a,b)=>a.codigo-b.codigo)
        pacientes.forEach((paciente) => {
            const fila = document.createElement("tr")
            fila.innerHTML = `
                <td>${paciente.codigo}</td>
                <td>${paciente.nombres}</td>
                <td>${paciente.apellidos}</td>
                <td>${calcularEdad(new Date(paciente.fechaNacimiento))}</td>
                <td>${paciente.telefono || "N/A"}</td>
            `
            fila.addEventListener("click", () => seleccionarPaciente(paciente))
            tablaPacientes.appendChild(fila)

            popup.addEventListener("click", cerrarPopupClickAfuera);
        })
    } catch (error) {
        console.error(error)
        alert("Error al cargar los pacientes.")
    }
}

function mostrarDatosPaciente(paciente) {
    const datosPacienteDiv = document.getElementById("datosPaciente");
    datosPacienteDiv.innerHTML = "";

    // Definimos pares de atributos que deben ir juntos
    const gruposAtributos = [
        [
            { label: "Nombres y Apellidos", value: `${paciente.nombres} ${paciente.apellidos}` }
        ],
        [
            { label: "Edad", value: calcularEdad(new Date(paciente.fechaNacimiento)) },
            { label: "Fecha de Nacimiento", value: paciente.fechaNacimiento }
        ],
        [
            { label: "Género", value: paciente.genero },
            { label: "Tipo de Sangre", value: paciente.tipoSangre || "N/A" }
        ],
        [
            { label: "Teléfono", value: paciente.telefono || "N/A" },
            { label: "Correo", value: paciente.correo }
        ],
        [
            { label: "Dirección", value: paciente.direccion || "No especificada" }
        ],
        [
            { label: "Ocupación", value: paciente.ocupacion || "No especificada" }
        ]
    ];

    gruposAtributos.forEach((grupo) => {
        const contenedor = document.createElement("div");
        contenedor.className = "fila-atributos"; // Clase para el CSS
        
        grupo.forEach((atributo) => {
            const p = document.createElement("p");
            p.className = "item-atributo"; // Clase para el CSS
            p.innerHTML = `<strong>${atributo.label}:</strong> ${atributo.value}`;
            contenedor.appendChild(p);
        });

        datosPacienteDiv.appendChild(contenedor);
    });

    datosPacienteDiv.style.display = "block";
}

function seleccionarPaciente(paciente) {
    if (confirm(`¿Desea seleccionar al paciente ${paciente.nombres} ${paciente.apellidos}?`)) {
        cerrarPopup()
        document.getElementById("codigoPaciente").value = paciente.codigo
        mostrarDatosPaciente(paciente)
    }
    limpiarContenedorSignos()
}

export async function buscarPaciente() {
    const codigoPaciente = document.getElementById("codigoPaciente").value

    if (!codigoPaciente) {
        alert("Por favor, ingrese un código de paciente.")
        return
    }

    try {
        const response = await fetch(`${API_URL_PACIENTES}/${codigoPaciente}`)
        if (!response.ok) throw new Error("Paciente no encontrado.")

        const paciente = await response.json()
        mostrarDatosPaciente(paciente)
        limpiarContenedorSignos()
    } catch (error) {
        console.error(error)
        alert("Error al buscar el paciente. Verifique el código ingresado.")
    }
}

export async function cargarCentrosMedicos() {
    try {
        const response = await fetch(API_URL_CENTROS_MEDICOS)
        if (!response.ok) throw new Error("Error al cargar los centros médicos.")

        const centros = await response.json()
        const selectCentro = document.getElementById("centroMedico")

        centros.forEach((centro) => {
            const option = document.createElement("option")
            option.value = centro.codigo
            option.textContent = centro.nombre
            selectCentro.appendChild(option)
        })
    } catch (error) {
        console.error("Error al cargar centros médicos:", error)
        alert("No se pudieron cargar los centros médicos.")
    }
}

export async function cargarEnfermeras() {
    try {
        const response = await fetch(API_URL_ENFERMERAS)
        if (!response.ok) throw new Error("Error al cargar las enfermeras.")

        const enfermeras = await response.json()
        const selectEnfermera = document.getElementById("enfermera")

        enfermeras.forEach((enfermera) => {
            const option = document.createElement("option")
            option.value = enfermera.codigo
            option.textContent = `${enfermera.nombres} ${enfermera.apellidos}`
            selectEnfermera.appendChild(option)
        })
    } catch (error) {
        console.error("Error al cargar enfermeras:", error)
        alert("No se pudieron cargar las enfermeras.")
    }
}

export async function cargarUnidades() {
    try {
        const response = await fetch(API_URL_TIPO_SIGNO)
        if (!response.ok) throw new Error("Error al cargar las unidades")

        tiposSignos = await response.json()
        const unidadSelects = document.querySelectorAll(".unidadSigno")

        unidadSelects.forEach((select) => {
            cargarUnidadesEnSelect(select)
        })
    } catch (error) {
        console.error("Error al cargar unidades:", error)
        alert("No se pudieron cargar las unidades")
    }
}

export function cargarUnidadesEnSelect(elementoSelect) {
    elementoSelect.innerHTML = '<option value>Seleccione una unidad</option>'
    tiposSignos.forEach((tipo) => {
        const option = document.createElement("option")
        option.value = tipo.codigo
        option.textContent = `${tipo.descripcion} (${tipo.unidad})`
        elementoSelect.appendChild(option)
    })
}

export async function registrarDatos(e) {
    e.preventDefault() //! Evita que se recargue la página

    const centroMedico = document.getElementById("centroMedico").value
    const enfermera = document.getElementById("enfermera").value
    const paciente = document.getElementById("codigoPaciente").value

    if (!centroMedico || !enfermera || !paciente) {
        alert("Complete todos los campos obligatorios")
        return
    }

    const tomaSignosData = {
        fecha: new Date().toISOString().split("T")[0],
        centroMedicoId: parseInt(centroMedico),
        pacienteId: parseInt(paciente),
        enfermeraId: parseInt(enfermera),
        observacion: "",
    }

    const signosPacienteData = []
    const signos = document.querySelectorAll(".signo")
    signos.forEach((signo) => {
        const unidadSigno = signo.querySelector(".unidadSigno").value
        const valorSigno = signo.querySelector(".valorSigno").value
        const observacionSigno = signo.querySelector(".observacionSigno").value

        if (unidadSigno && valorSigno) {
            signosPacienteData.push({
                tipoSignoId: Number(unidadSigno),
                valor: parseFloat(valorSigno),
                fecha: new Date().toISOString().split("T")[0],
                comentario: observacionSigno,
            })
        }
    })

    if (signosPacienteData.length === 0) {
        alert("Debe agregar al menos un signo")
        return
    }

    try {
        //? 1. Registrar TomaSigno
        const responseTomaSigno = await fetch(API_URL_TOMA_SIGNOS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tomaSignosData),
        })

        if (!responseTomaSigno.ok) {
            const errorData = await responseTomaSigno.json()
            throw new Error(`Error al registrar TomaSigno: ${errorData.message || "Desconocido"}`)
        }

        const tomaSignosResult = await responseTomaSigno.json()
        console.log("TomaSigno registrado:", tomaSignosResult)

        //? 2. Registrar cada SignoPaciente
        for (const signoData of signosPacienteData) {
            signoData.tomaSignosId = tomaSignosResult.numero //! Instalando el ID de tomaSigno

            const responseSignoPaciente = await fetch(`${API_URL_SIGNO_PACIENTE}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signoData),
            })

            if (!responseSignoPaciente.ok) {
                const errorData = await responseSignoPaciente.json()
                throw new Error(`Error al registrar SignosPaciente: ${errorData.message || "Desconocido"}`)
            }
        }

        alert("Toma de signos y signos del paciente registrados correctamente")
        console.log("TomaSignos Data:", tomaSignosData)
        console.log("SignosPaciente Data:", signosPacienteData)
        limpiarFormularioTotal() //! Limpia los formularios después del registro
    } catch (error) {
        console.error("Error:", error)
        alert(error.message)
    }
}
