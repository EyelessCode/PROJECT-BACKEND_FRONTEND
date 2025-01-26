const API_URL_ENFERMERAS = "http://localhost:4000/comsulmed/enfermera";
const API_URL_PACIENTES = "http://localhost:4000/comsulmed/paciente";
const API_URL_TOMA_SIGNOS = "http://localhost:4000/comsulmed/tomaSigno";

// Establecer la fecha actual
document.getElementById('fechaActual').textContent = new Date().toLocaleDateString();

// Cargar dinámicamente las enfermeras en el combobox
async function cargarEnfermeras() {
    try {
        console.log('Cargando enfermeras...');
        const response = await fetch(API_URL_ENFERMERAS);
        if (!response.ok) {
            throw new Error(`Error al cargar las enfermeras: ${response.statusText}`);
        }
        const enfermeras = await response.json();
        console.log('Enfermeras cargadas:', enfermeras);
        
        const selectEnfermera = document.getElementById('enfermera');
        selectEnfermera.innerHTML = '<option value="">Seleccione una enfermera</option>';  // Opción por defecto

        enfermeras.forEach(enfermera => {
            const option = document.createElement('option');
            option.value = enfermera.codigo;
            option.textContent = `${enfermera.nombres} ${enfermera.apellidos}`;
            selectEnfermera.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        alert('Error al cargar las enfermeras');
    }
}

async function obtenerProximoNumeroConsulta() {
    try {
        console.log('Obteniendo próximo número de consulta...');
        const response = await fetch(API_URL_TOMA_SIGNOS);
        if (!response.ok) {
            throw new Error(`Error al obtener el número de consulta: ${response.statusText}`);
        }
        const tomaSignos = await response.json();
        console.log('Toma de signos actuales:', tomaSignos);
        return tomaSignos.length + 1;  // Suponiendo que tomaSignos es un array con todas las entradas
    } catch (error) {
        console.error(error);
        alert('Error al obtener el número de consulta');
        return 1;  // Valor predeterminado en caso de error
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
        console.log(`Buscando paciente con código: ${codigo}...`);
        const response = await fetch(`${API_URL_PACIENTES}/${codigo}`);
        if (!response.ok) {
            throw new Error(`Error al buscar el paciente: ${response.statusText}`);
        }
        const paciente = await response.json();
        console.log('Paciente encontrado:', paciente);
        mostrarDatosPaciente(paciente);
    } catch (error) {
        console.error(error);
        alert('Error al buscar el paciente');
    }
});

function mostrarDatosPaciente(paciente) {
    document.getElementById('cedulaPaciente').textContent = `${paciente.cedula}`;
    document.getElementById('nombrePaciente').textContent = `${paciente.nombres} ${paciente.apellidos}`;
    document.getElementById('edadPaciente').textContent = calcularEdad(new Date(paciente.fechaNacimiento));
    document.getElementById('fechaPaciente').textContent = `${paciente.fechaNacimiento}`;
    document.getElementById('generoPaciente').textContent = `${paciente.genero}`;
    document.getElementById('telefonoPaciente').textContent = `${paciente.telefono}`;
    document.getElementById('sangrePaciente').textContent = `${paciente.tipoSangre}`;
    document.getElementById('direccionPaciente').textContent = `${paciente.direccion}`;
    document.getElementById('correoPaciente').textContent = `${paciente.correo}`;
    document.getElementById('ocupacionPaciente').textContent = `${paciente.ocupacion}`;
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
    console.log('Restableciendo el formulario...');
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
        console.log('Obteniendo próximo número de consulta...');
        const proximoNumeroConsulta = await obtenerProximoNumeroConsulta();
        console.log('Próximo número de consulta:', proximoNumeroConsulta);

        const tomaSignos = {
            numero: proximoNumeroConsulta,
            fecha: new Date().toLocaleDateString(),
            centroMedicoId: 1,  // Asumiendo que hay un ID fijo del centro médico
            pacienteId: codigoPaciente,
            enfermeraId: enfermeraId,
            observacion: ''
        };

        console.log('Registrando toma de signos:', tomaSignos);

        const response = await fetch(API_URL_TOMA_SIGNOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tomaSignos)
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(`Error al registrar la toma de signos: ${response.statusText}`);
        }
        console.log('Toma de signos registrada:', responseData);
        window.location.href = `http://localhost:4000/comsulmed/signoPaciente/html?numero=${responseData.numero}`;
    } catch (error) {
        console.error(error);
        alert('Error al registrar la toma de signos');
    }
});

// Inicializar la carga de enfermeras y el número de consulta
async function inicializarPagina() {
    console.log('Inicializando la página...');
    await cargarEnfermeras();
    const proximoNumeroConsulta = await obtenerProximoNumeroConsulta();
    document.getElementById('numeroConsulta').textContent = proximoNumeroConsulta.toString();
}

inicializarPagina();
