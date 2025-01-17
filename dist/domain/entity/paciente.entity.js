"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteEntity = void 0;
class PacienteEntity {
    constructor(codigo, cedula, nombres, fechaNacimiento) {
        this.codigo = codigo;
        this.cedula = cedula;
        this.nombres = nombres;
        this.fechaNacimiento = fechaNacimiento;
    }
    calcularEdad() {
        const hoy = new Date();
        const edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            return edad - 1;
        }
        return edad;
    }
    validarCedula() {
        return this.cedula.trim().length > 0;
    }
    validarNombres() {
        return this.nombres.trim().length > 0;
    }
}
exports.PacienteEntity = PacienteEntity;
//# sourceMappingURL=paciente.entity.js.map