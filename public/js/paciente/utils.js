export function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    const dia = hoy.getDate() - fechaNacimiento.getDate();

    // Ajuste para el caso en que el cumpleaños no ha sido cumplido este año aún
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edadCalculada--;
    }

    return Number(edadCalculada);
}