// Datos simulados localmente
let patientsData = [
    { id: 1, name: 'Juan Perez', age: 30, phone: '123456789', company: { name: 'Enfermera 1' } },
    { id: 2, name: 'Ana Gomez', age: 25, phone: '987654321', company: { name: 'Enfermera 2' } },
    { id: 3, name: 'Luis Martinez', age: 40, phone: '456123789', company: { name: 'Enfermera 3' } }
];

// Helper para crear celdas de tabla
function createCell(content) {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}

// Helper para limpiar la tabla
function clearTableBody(tableBody) {
    tableBody.innerHTML = '';
}

// Renderizar pacientes en la tabla
function loadPatients(searchTerm = '') {
    const patientsTableBody = document.getElementById('patientsTableBody');
    clearTableBody(patientsTableBody);

    const filteredPatients = patientsData.filter(patient => 
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toString().includes(searchTerm)
    );

    if (filteredPatients.length === 0 && searchTerm !== '') {
        alert('Paciente no encontrado.');
    }

    filteredPatients.forEach(patient => {
        const row = document.createElement('tr');

        row.appendChild(createCell(patient.id));
        row.appendChild(createCell(patient.name));
        row.appendChild(createCell(patient.age || 'N/A'));
        row.appendChild(createCell(patient.phone || 'N/A'));
        row.appendChild(createCell(patient.company?.name || 'No asignado'));

        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => editPatient(patient));
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => deletePatient(patient.id));
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        patientsTableBody.appendChild(row);
    });
}

// Mostrar u ocultar el formulario de registro
document.getElementById('btnMostrarRegistro').addEventListener('click', () => {
    const form = document.getElementById('registroPaciente');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    clearForm();
});

// Agregar nuevo paciente
function addPatient(event) {
    event.preventDefault();

    const idPaciente = document.getElementById('idPaciente').value.trim();
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const idEnfermera = document.getElementById('idEnfermera').value.trim();

    if (!idPaciente || !name || !age || !contact || !idEnfermera) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Verificar si el ID del paciente ya existe
    const existingPatient = patientsData.find(patient => patient.id === parseInt(idPaciente));
    if (existingPatient) {
        alert('El paciente con este ID ya está registrado.');
        return;
    }

    const newPatient = {
        id: parseInt(idPaciente),
        name: name,
        age: parseInt(age),
        phone: contact,
        company: { name: idEnfermera }
    };

    patientsData.push(newPatient);
    document.getElementById('registerPatientForm').reset();
    loadPatients();
    alert('Paciente registrado exitosamente.');

    // Ocultar el formulario después de registrar
    const form = document.getElementById('registroPaciente');
    form.style.display = 'none';
}

// Editar paciente
function editPatient(patient) {
    // Mostrar formulario y cargar datos del paciente en el formulario
    const form = document.getElementById('registroPaciente');
    form.style.display = 'block';

    const idPaciente = document.getElementById('idPaciente');
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const contact = document.getElementById('contact');
    const idEnfermera = document.getElementById('idEnfermera');

    idPaciente.value = patient.id;
    name.value = patient.name;
    age.value = patient.age || '';
    contact.value = patient.phone || '';
    idEnfermera.value = patient.company?.name || '';

    // Actualizar el evento de envío del formulario para guardar cambios en lugar de agregar
    const formSubmit = document.getElementById('registerPatientForm');
    formSubmit.onsubmit = function(event) {
        event.preventDefault();
        updatePatient(patient.id);
    };

    alert('Edita los datos en el formulario y guarda los cambios.');
}

// Actualizar paciente
function updatePatient(patientId) {
    const idPaciente = document.getElementById('idPaciente').value.trim();
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const idEnfermera = document.getElementById('idEnfermera').value.trim();

    if (!idPaciente || !name || !age || !contact || !idEnfermera) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    const updatedPatient = {
        id: parseInt(idPaciente),
        name: name,
        age: parseInt(age),
        phone: contact,
        company: { name: idEnfermera }
    };

    // Actualizamos el paciente en el array
    const index = patientsData.findIndex(patient => patient.id === patientId);
    if (index !== -1) {
        patientsData[index] = updatedPatient;
    }

    document.getElementById('registerPatientForm').reset();
    loadPatients();
    alert('Paciente actualizado exitosamente.');

    // Limpiar la acción de envío para prevenir problemas futuros
    const formSubmit = document.getElementById('registerPatientForm');
    formSubmit.onsubmit = addPatient;

    // Ocultar el formulario después de actualizar
    const form = document.getElementById('registroPaciente');
    form.style.display = 'none';
}

// Eliminar paciente
function deletePatient(patientId) {
    const index = patientsData.findIndex(patient => patient.id === patientId);
    if (index !== -1) {
        patientsData.splice(index, 1);
        loadPatients();
        alert('Paciente eliminado exitosamente.');
    }
}

// Buscar pacientes
function setupSearch() {
    const searchInput = document.getElementById('idInput');
    const searchButton = document.getElementById('btnbuscarP');

    // Buscar en tiempo real mientras se escribe en el campo
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim();
        loadPatients(searchTerm);
    });

    // Función al hacer clic en el botón de búsqueda
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        loadPatients(searchTerm);
    });
}

// Limpiar el formulario
function clearForm() {
    document.getElementById('registerPatientForm').reset();
}

// Inicialización
document.getElementById('registerPatientForm').addEventListener('submit', addPatient);
document.addEventListener('DOMContentLoaded', () => {
    loadPatients();
    setupSearch();
});
