export function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (hoy.getMonth() < fechaNacimiento.getMonth() || 
       (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}
