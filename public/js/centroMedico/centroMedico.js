
const API_URL="http://localhost:4000/comsulmed/centroMedico"

const btnBuscarPaciente=document.getElementById("btnBuscarPaciente")
const tablaCentroMedico=document.getElementById("tablaCentroMedico")

document.addEventListener("DOMContentLoaded",fetchCentroMedico)


async function fetchCentroMedico() {
    try {
        const respuesta=await fetch(API_URL)
        if (!respuesta) {
            throw new Error(`No se pudo obtener la información del centro médico`)
        }

        const centroMedico=await respuesta.json()
        renderizarCentroMedico(centroMedico)
    } catch (error) {
        console.error(error)
        alert("Hubo un problema al registrar el Centro Médico")
    }
}

function renderizarCentroMedico(centroMedico) {
    tablaCentroMedico.innerHTML=""

    centroMedico.forEach(centroMedicoEach => {
        const fila=document.createElement("tr")
        fila.innerHTML=`
            <td>${centroMedicoEach.nombre}</td>
            <td>${centroMedicoEach.direccion}</td>`

            tablaCentroMedico.appendChild(fila)
    });
}