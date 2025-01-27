const API_URL = "http://localhost:4000/comsulmed/enfermera";


export async function cargarEnfermeras() {
    try {
        console.log('Cargando Enfermeras');
        const response = await fetch(API_URL);
        const enfermeras = await response.json();
        console.log('Enfermeras Cargadas:', enfermeras);
        return enfermeras;
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar las Enfermeras');
    }
}

export async function buscarEnfermera(codigo) {
    try {
        console.log('Buscando Enfermera con Código:', codigo);
        const response = await fetch(`${API_URL}/${codigo}`);
        if (response.ok) {
            const enfermera = await response.json();
            return { success: true, enfermera: enfermera };
        } else {
            return { success: false, message: 'Enfermera no encontrada' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Error al buscar la Enfermera' };
    }
}