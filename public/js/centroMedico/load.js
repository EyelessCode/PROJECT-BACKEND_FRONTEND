const API_URL = "http://localhost:4000/comsulmed/centroMedico";

export async function cargarCentrosMedicos() {
    try {
        console.log('Cargando Centros Médicos');
        const response = await fetch(API_URL);
        const centros = await response.json();
        console.log('Centros Médicos Cargados:', centros);
        return centros;
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar los centros médicos');
    }
}

export async function buscarCentroMedico(codigo) {
    try {
        console.log('Buscando Centro Médico con Código:', codigo);
        const response = await fetch(`${API_URL}/${codigo}`);
        if (response.ok) {
            const centro = await response.json();
            return { success: true, centro: centro };
        } else {
            return { success: false, message: 'Centro Médico no encontrado' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Error al buscar el centro médico' };
    }
}