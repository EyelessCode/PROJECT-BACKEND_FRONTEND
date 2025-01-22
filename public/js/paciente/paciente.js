
const API_URL="http://localhost:4000/comsulmed/paciente"

const formularioPaciente=document.getElementById("formularioPaciente")
const tablaPaciente=document.getElementById("tablaPaciente")

document.addEventListener("DOMContentLoaded",fetchPaciente)

formularioPaciente.addEventListener("submit",async(event)=>{
    event.preventDefault()

    const dataFormulario=new FormData(formularioPaciente)
    const data={
        cedula:dataFormulario.get("cedula"),
        nombres:dataFormulario.get("nombres"),
        fechaNacimiento:dataFormulario.get("fechaNacimiento")
    }

    try {
        const respuesta=await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })

        if (!respuesta.ok) {
            throw new Error(`Error al agregar al paciente`)
        }

        formularioPaciente.reset()
        fetchPaciente()
        alert(`Paciente agregado exitosamente`)
    } catch (error) {
        console.error(error);
        alert(`HUBO UN PROBLEMA AL AGREGAR EL PACIENTE`)
    }
})

async function fetchPaciente() {
    try {
        const respuesta=await fetch(API_URL)
        if (!respuesta.ok) {
            throw new Error(`Error al obtener pacientes!`)
        }

        const paciente=await respuesta.json()
        renderizarPaciente(paciente)
    } catch (error) {
        console.error(error);
        alert(`HUBO UN PROBLEMA AL CARGAR LOS PACIENTES!`)
    }
}

function renderizarPaciente(paciente) {
    tablaPaciente.innerHTML=""

    paciente.forEach((pacienteEach) => {
        const fila=document.createElement("tr")

        fila.innerHTML=`
        <td>${pacienteEach.cedula}</td>
        <td>${pacienteEach.nombres}</td>
        <td>${pacienteEach.fechaNacimiento}</td>`

        tablaPaciente.appendChild(fila)
    });
}