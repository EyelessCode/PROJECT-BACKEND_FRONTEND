
const API_URL="http://localhost:4000/comsulmed/enfermera"

const tablaEnfermera=document.getElementById("tablaEnfermera")
const btnRegresar=document.getElementById("btnRegresar")

document.addEventListener("DOMContentLoaded",fecthEnfermera)


async function fecthEnfermera() {
    try {
        const respuesta=await fetch(API_URL)
        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status} ${respuesta.statusText}`)
        }

        const enfermera=await respuesta.json()
        renderizarEnfermera(enfermera)
    } catch (error) {
        console.error(error);
        alert(`Hubo un problema al cargar las enfermeras!`)
    }
}

function renderizarEnfermera(enfermera) {
    tablaEnfermera.innerHTML=""

    enfermera.forEach(enfermeraEach => {
        const fila=document.createElement("tr")

        fila.innerHTML`
        <td>${enfermeraEach.cedula}</td>
        <td>${enfermeraEach.nombres}</td>`
        tablaEnfermera.appendChild(fila)
    });
}