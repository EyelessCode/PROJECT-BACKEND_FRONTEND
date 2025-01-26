const API_URL = "http://localhost:4000/comsulmed/paciente";

export async function registrarPaciente(paciente) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paciente)
        });

        const responseData = await response.json();
        console.log('Respuesta del Servidor:', responseData);

        if (response.ok) {
            return { success: true };
        } else {
            console.error('Error en la respuesta del servidor:', responseData);
            return { success: false, message: responseData.message || 'Desconocido' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Error al registrar el paciente' };
    }
}

export async function cargarPacientes() {
    try {
        console.log('Cargando Pacientes');
        const response = await fetch(API_URL);
        const pacientes = await response.json();
        console.log('Pacientes Cargados:', pacientes);
        return pacientes;
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar los pacientes');
    }
}
