"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignoVitalEntity = void 0;
class SignoVitalEntity {
    constructor(codigo, descipcion, unidad, valorMinimo, valorMaximo) {
        this.codigo = codigo;
        this.descipcion = descipcion;
        this.unidad = unidad;
        this.valorMinimo = valorMinimo;
        this.valorMaximo = valorMaximo;
    }
    validarValores() {
        return this.valorMinimo >= 0 && this.valorMaximo > this.valorMinimo;
    }
    validarDescripcion() {
        return this.descipcion.trim().length > 0;
    }
}
exports.SignoVitalEntity = SignoVitalEntity;
//# sourceMappingURL=signoVital.entity.js.map