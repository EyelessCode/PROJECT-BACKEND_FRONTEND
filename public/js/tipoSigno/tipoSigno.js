
const API_URL="http://localhost:4000/comsulmed/signoVital"

const formularioSignoVital=document.getElementById("formularioSignoVital")
const txtDescripcionVital=document.getElementById("txtDescripcionVital")
const txtUnidadVital=document.getElementById("txtUnidadVital")
const txtValorMin=document.getElementById("txtValorMin")
const txtValorMax=document.getElementById("txtValorMax")
const tablaSignosVitales=document.getElementById("tablaSignosVitales")

document.addEventListener("DOMContentLoaded",fetchSignoVital)

formularioSignoVital.addEventListener("submit",async(event)=>{
    event.preventDefault()

    const formulario=new FormData(formularioSignoVital)
    const data={
        descripcion:formulario.get(descripcion),
        unidad:formulario.get(unidad),
        valorMinimo:parseFloat(formulario.get(valorMinimo)),
        valorMaximo:parseFloat(formulario.get(valorMaximo))
    }

    try {
        // const respuesta=await fetch(API_URL)

        const respuesta=await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status} ${respuesta.statusText}`)
        }

        const signoVital=await respuesta.json()
        generadorFila(signoVital)
        formularioSignoVital.reset()
    } catch (error) {
        console.error(error)
        alert("Hubo un problema al registrar el signo vital")
    }
})

async function fetchSignoVital() {
    try {
        const respuesta=await fetch(API_URL)
        if (!respuesta.ok) {
            throw new Error(`Error al obtener los signos vitales ${respuesta.status} ${respuesta.statusText}`)
        }

        const signoVital=await respuesta.json()
        renderizarSignoVital(signoVital)
    } catch (error) {
        console.error(error)
        alert("Hubo un problema al cargar los signos vitales")
    }
}

function renderizarSignoVital(signoVital) {
    tablaSignosVitales.innerHTML=""

    signoVital.forEach(signoVitalEach => {
        generadorFila(signoVitalEach)
    });
}

function generadorFila(signo) {
    const fila=document.createElement("tr")

    fila.innerHTML=`
        <td>${signo.descripcion}</td>
        <td>${signo.unidad}</td>
        <td>${signo.valorMinimo}</td>
        <td>${signo.valorMaximo}</td>`

    tablaSignosVitales.appendChild(fila)
}