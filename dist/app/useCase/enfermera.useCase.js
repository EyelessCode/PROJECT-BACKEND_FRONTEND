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
exports.EnfermeraCasoUso = void 0;
class EnfermeraCasoUso {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    actualizarEnfermera(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.actualizarEnfermera(codigo, data);
            }
            catch (error) {
                console.error(`Error al actualizar una Enfermera: ${error}`);
                throw new Error('No se pudo actualizar una Enfermera');
            }
        });
    }
    crearEnfermera(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.crearEnfermera(data);
            }
            catch (error) {
                console.error(`Error al crear una Enfermera: ${error}`);
                throw new Error('No se pudo crear una nuevo Enfermera');
            }
        });
    }
    eliminarEnfermera(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.eliminarEnfermera(codigo);
            }
            catch (error) {
                console.error(`Error al eliminar una Enfermera: ${error}`);
                throw new Error('No se pudo eliminar una Enfermera');
            }
        });
    }
    obtenerEnfermera(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerEnfermera(codigo);
            }
            catch (error) {
                console.error(`Error al obtener una Enfermera: ${error}`);
                throw new Error('No se pudo obtener una Enfermera');
            }
        });
    }
    obtenerEnfermeras() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerEnfermeras();
            }
            catch (error) {
                console.error(`Error al obtener las Enfermeras: ${error}`);
                throw new Error('No se pudo obtener las Enfermeras');
            }
        });
    }
}
exports.EnfermeraCasoUso = EnfermeraCasoUso;
//# sourceMappingURL=enfermera.useCase.js.map