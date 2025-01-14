"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignoVital = void 0;
const signoVital_data_1 = require("../data/signoVital.data");
class SignoVital {
    constructor() {
        this.signoVital = signoVital_data_1.SV;
    }
    obtenerSignos() {
        return this.signoVital;
    }
    obtenerUnSigno(codigo) {
        return this.signoVital.find((signoFind) => signoFind.codigo === codigo);
    }
    crearSigno(signo) {
        this.signoVital.push(signo);
        return signo;
    }
    actualizarSigno(codigo, signo) {
        let codigoIndex = this.signoVital.findIndex((signoIndex) => signoIndex.codigo === codigo);
        if (codigoIndex != -1) {
            this.signoVital[codigoIndex] = Object.assign(Object.assign({}, signo), { codigo: codigo });
            return this.signoVital[codigoIndex];
        }
        return undefined;
    }
    eliminarSigno(codigo) {
        let codigoIndex = this.signoVital.findIndex((signoIndex) => signoIndex.codigo === codigo);
        if (codigoIndex != -1) {
            this.signoVital.splice(codigoIndex, 1);
            return true;
        }
        return false;
    }
}
exports.SignoVital = SignoVital;
//# sourceMappingURL=signoVital.repository.js.map