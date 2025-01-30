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
exports.CentroMedicoCasoUso = void 0;
class CentroMedicoCasoUso {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    actualizarCentroMedico(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.actualizarCentroMedico(codigo, data);
            }
            catch (error) {
                console.error(`Error al actualizar Centro Médico: ${error}`);
                throw new Error('No se pudo actualizar un Centro Médico');
            }
        });
    }
    crearCentroMedico(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.crearCentroMedico(data);
            }
            catch (error) {
                console.error(`Error al crear un nuevo un Centro Médico: ${error}`);
                throw new Error('No se pudo crear un nuevo Centro Médico');
            }
        });
    }
    eliminarCentroMedico(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.eliminarCentroMedico(codigo);
            }
            catch (error) {
                console.error(`Error al eliminar Centro Médico: ${error}`);
                throw new Error('No se pudo eliminar un Centro Médico');
            }
        });
    }
    obtenerCentroMedico(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerCentroMedico(codigo);
            }
            catch (error) {
                console.error(`Error al obtener un Centro Médico: ${error}`);
                throw new Error('No se pudo obtener un Centro Médico');
            }
        });
    }
    obtenerCentrosMedicos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerCentrosMedicos();
            }
            catch (error) {
                console.error(`Error al obtener los Centros Médicos: ${error}`);
                throw new Error('No se pudo obtener los Centros Médicos');
            }
        });
    }
}
exports.CentroMedicoCasoUso = CentroMedicoCasoUso;
//# sourceMappingURL=centroMedico.useCase.js.map