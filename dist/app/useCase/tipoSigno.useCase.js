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
exports.TipoSignoCasoUso = void 0;
class TipoSignoCasoUso {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    obtenerTipoSigno(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerTipoSigno(codigo);
            }
            catch (error) {
                console.error(`Error al obtener un Signo Vital, ${error}`);
                throw new Error(`No se pudo obtener un Signo Vital`);
            }
        });
    }
    actualizarTipoSigno(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.actualizarTipoSigno(codigo, data);
            }
            catch (error) {
                console.error(`Error al actualizar el signo vital ${error}`);
                throw new Error(`No se pudo actualizar el signo vital`);
            }
        });
    }
    crearTipoSigno(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.crearTipoSigno(data);
            }
            catch (error) {
                console.error(`Error al crear un nuevo Signo Vital: ${error}`);
                throw new Error('No se pudo crear un nuevo Signo Vital');
            }
        });
    }
    eliminarTipoSigno(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.eliminarTipoSigno(codigo);
            }
            catch (error) {
                console.error(`Error al tratar de eliminar un Signo Vital`);
                throw new Error(`No se pudo eliminar un Signo Vital`);
            }
        });
    }
    obtenerTiposSignos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerTiposSignos();
            }
            catch (error) {
                console.error(`Error al obtener todos los Signos Vitales, ${error}`);
                throw new Error(`No se pudo obtener los Signos Vitales`);
            }
        });
    }
}
exports.TipoSignoCasoUso = TipoSignoCasoUso;
//# sourceMappingURL=tipoSigno.useCase.js.map