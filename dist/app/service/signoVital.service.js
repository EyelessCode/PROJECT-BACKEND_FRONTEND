"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignoVitalService = void 0;
class SignoVitalService {
    constructor(repository) {
        this.repository = repository;
    }
    obtenerSignos() {
        return this.repository.obtenerSignos();
    }
    obtenerUnSigno(codigo) {
        if (isNaN(codigo)) {
            throw new Error("Código inválido!");
        }
        return this.repository.obtenerUnSigno(codigo);
    }
    crearSigno(signo) {
        return this.repository.crearSigno(signo);
    }
    actualizarSigno(codigo, signo) {
        if (isNaN(codigo)) {
            throw new Error("Código inválido!");
        }
        return this.repository.actualizarSigno(codigo, signo);
    }
    eliminarSigno(codigo) {
        if (isNaN(codigo)) {
            throw new Error("Código inválido!");
        }
        return this.repository.eliminarSigno(codigo);
    }
}
exports.SignoVitalService = SignoVitalService;
//# sourceMappingURL=signoVital.service.js.map