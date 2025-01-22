
import { centrosMedicos } from "../BBDD.js";

// Función para generar la tabla
function generarTabla(centros) {
    const divCentro = document.getElementById("divCentro");

    // Limpiar contenido previo
    divCentro.innerHTML = "";

    // Crear tabla
    const table = document.createElement("table");
    table.border = "1";
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    // Crear encabezados
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Nombre", "Dirección", "Teléfono"].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        th.style.padding = "8px";
        th.style.backgroundColor = "#f2f2f2";
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear cuerpo de la tabla
    const tbody = document.createElement("tbody");
    centrosMedicos.forEach(centro => {
        const row = document.createElement("tr");
        Object.values(centro).forEach(valor => {
            const td = document.createElement("td");
            td.textContent = valor;
            td.style.padding = "8px";
            td.style.textAlign = "center";
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Agregar tabla al div
    divCentro.appendChild(table);
}

// Evento del botón
document.getElementById("buscar").addEventListener("click", () => {
    generarTabla(centrosMedicos);
});
