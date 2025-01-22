"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignoPacienteCasoUso = void 0;
class SignoPacienteCasoUso {
    constructor(tomaSignoRepositorio, signoVitalRepositorio, signoPacienteRepositorio) {
        this.tomaSignoRepositorio = tomaSignoRepositorio;
        this.signoVitalRepositorio = signoVitalRepositorio;
        this.signoPacienteRepositorio = signoPacienteRepositorio;
    }
    registrarSignoPaciente(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validarSignoVital(data.signoVitalId, data.valor);
            yield this.validarTomaSigno(data.tomaSignosId);
            return yield this.signoPacienteRepositorio.crearSignoPaciente(data);
        });
    }
    validarTomaSigno(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            const tomaSigno = yield this.tomaSignoRepositorio.obtenerTomaSigno(codigo);
            if (!tomaSigno)
                throw new Error(`La Toma de Signo con el código ${codigo} no existe`);
        });
    }
    validarSignoVital(codigo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            const signoVital = yield this.signoVitalRepositorio.obtenerSignoVital(codigo);
            if (!signoVital)
                throw new Error(`El Signo Vital con el código ${codigo} no existe`);
            if (valor < signoVital.valorMinimo || valor > signoVital.valorMaximo) {
                throw new Error(`El Valor ${valor} está fuera del rango permitido (${signoVital.valorMinimo} - ${signoVital.valorMaximo})`);
            }
        });
    }
}
exports.SignoPacienteCasoUso = SignoPacienteCasoUso;
//# sourceMappingURL=signoPaciente.useCase.js.map