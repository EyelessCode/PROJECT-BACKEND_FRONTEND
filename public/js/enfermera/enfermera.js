import { patientsData } from "../BBDD.js";
import { nursesData } from "../BBDD.js";

const consultarBtn = document.getElementById('consultarBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const nursesTableBody = document.getElementById('nursesTableBody');
const infoAsignacion = document.getElementById('infoAsignacion');

const cargarEnfermeras = () => {
   
    nursesTableBody.innerHTML = '';  // Limpiar tabla

    
    patientsData.forEach((patient, index) => {
        const nurse = nursesData[index];

    
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nurse.name}</td>
            <td>${patient.id}</td>
            <td>${nurse.shift}</td>
            <td>${nurse.contact}</td>
            <td>${patient.id}</td>
            <td><button class="assignBtn" data-id="${patient.id}">Asignar</button></td>
            <td><button class="deactivateBtn" data-id="${patient.id}">Desactivar</button></td>
        `;
        nursesTableBody.appendChild(row);
    });
};


const limpiarTabla = () => {
    nursesTableBody.innerHTML = '';
    infoAsignacion.innerHTML = ''; 
};


const mostrarInfoAsignacion = (id) => {
    
    const paciente = patientsData.find((patient) => patient.id === parseInt(id));
    const enfermera = nursesData.find((nurse) => nurse.name === paciente.company.name);

    
    infoAsignacion.innerHTML = '';

    // Crear la nueva tabla 
    if (paciente && enfermera) {
        const tableHTML = `
            <h2>Información de Asignación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre del Paciente</th>
                        <th>Edad</th>
                        <th>Teléfono</th>
                        <th>Nombre de la Enfermera</th>
                        <th>Turno</th>
                        <th>Contacto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${paciente.name}</td>
                        <td>${paciente.age}</td>
                        <td>${paciente.phone}</td>
                        <td>${enfermera.name}</td>
                        <td>${enfermera.shift}</td>
                        <td>${enfermera.contact}</td>
                    </tr>
                </tbody>
            </table>
        `;

        
        infoAsignacion.innerHTML = tableHTML;
    } else {
        infoAsignacion.innerHTML = `<p>No se encontró información para el paciente con ID ${id}.</p>`;
    }
};


const desactivarPaciente = (id) => {
    // Eliminar el div con la tabla de asignación
    infoAsignacion.innerHTML = '';
    
    // Mostrar alerta 
    const alerta = document.createElement('div');
    alerta.classList.add('alerta-roja');
    alerta.innerHTML = `Paciente con ID ${id} desactivado.`;
    
    
    document.body.appendChild(alerta);

    // Después de un tiempo, eliminar la alerta
    setTimeout(() => {
        alerta.remove();
    }, 3000); // La alerta desaparecerá
};

// Eventos principales
consultarBtn.addEventListener('click', cargarEnfermeras);
limpiarBtn.addEventListener('click', limpiarTabla);


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('assignBtn')) {
        const id = event.target.getAttribute('data-id');
        mostrarInfoAsignacion(id); // Mostrar la tabla de información

        
        const alerta = document.createElement('div');
        alerta.classList.add('alerta-verde');
        alerta.innerHTML = `Paciente con ID ${id} asignado.`;
        
        
        
        document.body.appendChild(alerta);

        
        setTimeout(() => {
            alerta.remove();}, 3000); 
    } else if (event.target.classList.contains('deactivateBtn')) {
        const id = event.target.getAttribute('data-id');
        desactivarPaciente(id); // Desactivar el paciente 
    }
});
