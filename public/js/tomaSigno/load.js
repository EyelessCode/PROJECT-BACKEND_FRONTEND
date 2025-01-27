const API_URL_CENTROS_MEDICOS = `${API_URL_BASE}/centroMedico`;


export async function cargarCentrosMedicos() {
    try {
        const response = await fetch(API_URL_CENTROS_MEDICOS);
        if (!response.ok) throw new Error("Error al cargar los centros médicos.");

        const centrosMedicos = await response.json();
        const selectCentroMedico = document.getElementById("centroMedico");

        centrosMedicos.forEach((centro) => {
            const option = document.createElement("option");
            option.value = centro.codigo;
            option.textContent = centro.nombre;
            selectCentroMedico.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert("No se pudo cargar la lista de centros médicos.");
    }
}