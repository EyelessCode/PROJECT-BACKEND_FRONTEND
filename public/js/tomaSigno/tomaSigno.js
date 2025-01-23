
const API_URL="http://localhost:4000/comsulmed/tomaSigno"

const txtPacienteId=document.getElementById("txtPacienteId")
const txtEnfermeraId=document.getElementById("txtEnfermeraId")
const txtCentroMedicoId=document.getElementById("txtCentroMedicoId")
const txtFecha=document.getElementById("txtFecha")
const tablaTomaSignos=document.getElementById("tablaTomaSignos")
const formularioTomaSigno=document.getElementById("formularioTomaSigno")

document.addEventListener("DOMContentLoaded",()=>{
    const fechaActual=new Date()
    const anio=fechaActual.getFullYear()
    const mes=String(fechaActual.getMonth()+1).padStart(2,"0")
    const dia=String(fechaActual.getDate()).padStart(2,"0")

    txtFecha.value=`${anio}-${mes}-${dia}`
    fetchTomaSigno()
})

formularioTomaSigno.addEventListener("submit",async(event)=>{
    event.preventDefault()

    const formulario=new FormData(formularioTomaSigno)
    const data={
        pacienteId:parseInt(formulario.get("pacienteId")),
        enfermeraId:parseInt(formulario.get("enfermeraId")),
        centroMedicoId:parseInt(formulario.get("centroMedicoId")),
        fecha:formulario.get("fecha")
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
            throw new Error(`No se pudo registrar la Toma Signo`)
        }

        const tomaSigno=await respuesta.json()
        generadorFila(tomaSigno)
        formularioTomaSigno.reset()
        txtFecha.value=`${anio}-${mes}-${dia}`
    } catch (error) {
        console.error(error);
        alert(`Hubo un error al registrar la Toma Signo`)
    }
})

async function fetchTomaSigno() {
    try {
        const respuesta=await fetch(API_URL)
        if (!respuesta.ok) {
            throw new Error(`No se pudo obtener la lista de Toma Signo`)
        }
        const tomaSignos=await respuesta.json()
        renderizarTomaSigno(tomaSignos)
    } catch (error) {
        console.error(error);
        alert(`Hubo un error al cargar las Tomas de Signos`)
    }
}

function renderizarTomaSigno(tomaSigno) {
    tablaTomaSignos.innerHTML=""
    tomaSigno.forEach(tomaSignoEach => {
        generadorFila(tomaSignoEach)
    });
}

function generadorFila(tomaSigno) {
    const fila=document.createElement("tr")

    fila.innerHTML=`
        <td>${tomaSigno.pacienteId}</td>
        <td>${tomaSigno.enfermeraId}</td>
        <td>${tomaSigno.centroMedicoId}</td>
        <td>${tomaSigno.fecha}</td>`

        tablaTomaSignos.appendChild(fila)
}