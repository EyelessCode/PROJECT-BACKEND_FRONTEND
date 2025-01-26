const API_URL_ENFERMERAS = "http://localhost:4000/comsulmed/enfermera";
const API_URL_PACIENTES = "http://localhost:4000/comsulmed/paciente";
const API_URL_TOMA_SIGNOS = "http://localhost:4000/comsulmed/tomaSignos";

// Establecer la fecha actual
document.getElementById('fechaActual').textContent = new Date().toLocaleDateString();

// Cargar dinámicamente las enfermeras en el combobox
async function cargarEnfermeras() {
    try {
        const response = await fetch(API_URL_ENFERMERAS);
        const enfermeras = await response.json();
        
        const selectEnfermera = document.getElementById('enfermera');
        selectEnfermera.innerHTML = '<option value="">Seleccione una enfermera</option>';  // Opción por defecto

        enfermeras.forEach(enfermera => {
            const option = document.createElement('option');
            option.value = enfermera.codigo;
            option.textContent = `${enfermera.nombres} ${enfermera.apellidos}`;
            selectEnfermera.appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar las enfermeras:', error);
        alert('Error al cargar las enfermeras');
    }
}

// Buscar y mostrar los datos del paciente
document.getElementById('btnBuscarPaciente').addEventListener('click', async () => {
    const codigo = document.getElementById('codigoPaciente').value;
    if (!codigo) {
        alert('Por favor, ingrese un código de paciente');
        return;
    }

    try {
        const response = await fetch(`${API_URL_PACIENTES}/${codigo}`);
        if (response.ok) {
            const paciente = await response.json();
            mostrarDatosPaciente(paciente);
        } else {
            alert('Paciente no encontrado');
        }
    } catch (error) {
        console.error('Error al buscar el paciente:', error);
        alert('Error al buscar el paciente');
    }
});

function mostrarDatosPaciente(paciente) {
    document.getElementById('nombrePaciente').textContent = `${paciente.nombres} ${paciente.apellidos}`;
    document.getElementById('edadPaciente').textContent = calcularEdad(new Date(paciente.fechaNacimiento));
    document.getElementById('datosPaciente').style.display = 'block';
}

// Calcular edad del paciente
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// Restablecer el formulario al estado inicial
document.getElementById('btnCancelar').addEventListener('click', () => {
    document.getElementById('formTomaSignos').reset();
    document.getElementById('datosPaciente').style.display = 'none';
});

// Navegar al siguiente formulario
document.getElementById('btnSiguiente').addEventListener('click', async () => {
    const enfermeraId = document.getElementById('enfermera').value;
    const codigoPaciente = document.getElementById('codigoPaciente').value;

    if (!enfermeraId || !codigoPaciente) {
        alert('Por favor, complete todos los campos antes de continuar');
        return;
    }

    try {
        const tomaSignos = {
            fecha: new Date().toLocaleDateString(),
            centroMedicoId: 1,  // Asumiendo que hay un ID fijo del centro médico
            pacienteId: codigoPaciente,
            enfermeraId: enfermeraId,
            observacion: ''
        };

        const response = await fetch(API_URL_TOMA_SIGNOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tomaSignos)
        });

        const responseData = await response.json();

        if (response.ok) {
            window.location.href = `http://localhost:4000/comsulmed/signoPaciente/html?numero=${responseData.numero}`;
        } else {
            alert(`Error al registrar la toma de signos: ${responseData.message || 'Desconocido'}`);
        }
    } catch (error) {
        console.error('Error al registrar la toma de signos:', error);
        alert('Error al registrar la toma de signos');
    }
});

// Inicializar la carga de enfermeras
cargarEnfermeras();
