const API_URL = "http://localhost:4000/comsulmed/paciente";

export async function fetchPacientes() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function fetchPaciente(codigo) {
    const response = await fetch(`${API_URL}/${codigo}`);
    return response.json();
}

export async function createPaciente(paciente) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paciente)
    });
    return response.json();
}

export async function updatePaciente(codigo, paciente) {
    const response = await fetch(`${API_URL}/${codigo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paciente)
    });
    return response.json();
}

export async function deletePaciente(codigo) {
    const response = await fetch(`${API_URL}/${codigo}`, { method: 'DELETE' });
    return response.ok;
}
