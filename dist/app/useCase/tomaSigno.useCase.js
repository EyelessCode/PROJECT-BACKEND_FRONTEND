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
exports.TomaSignoCasoUso = void 0;
class TomaSignoCasoUso {
    constructor(pacienteRepositorio, centroMedicoRepositorio, enfermeraRepositorio, tomaSignosRepositorio) {
        this.pacienteRepositorio = pacienteRepositorio;
        this.centroMedicoRepositorio = centroMedicoRepositorio;
        this.enfermeraRepositorio = enfermeraRepositorio;
        this.tomaSignosRepositorio = tomaSignosRepositorio;
    }
    obtenerTomaSignos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.tomaSignosRepositorio.obtenerTomaSignos();
        });
    }
    registrarTomaSigno(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validarPaciente(data.pacienteId);
            yield this.validarEnfermera(data.enfermeraId);
            yield this.validarCentroMedico(data.centroMedicoId);
            return yield this.tomaSignosRepositorio.crearTomaSigno(data);
        });
    }
    validarPaciente(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente = yield this.pacienteRepositorio.obtenerPaciente(codigo);
            if (!paciente)
                throw new Error(`El Paciente con el codigo ${codigo} no existe`);
        });
    }
    validarEnfermera(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            const enfermera = yield this.enfermeraRepositorio.obtenerEnfermera(codigo);
            if (!enfermera)
                throw new Error(`La Enfermera con el codigo ${codigo} no existe`);
        });
    }
    validarCentroMedico(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            const centroMedico = yield this.centroMedicoRepositorio.obtenerCentroMedico(codigo);
            if (!centroMedico)
                throw new Error(`El Centro Médico con el codigo ${codigo} no existe`);
        });
    }
}
exports.TomaSignoCasoUso = TomaSignoCasoUso;
//# sourceMappingURL=tomaSigno.useCase.js.map