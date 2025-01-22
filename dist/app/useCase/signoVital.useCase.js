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
exports.SignoVitalCasoUso = void 0;
class SignoVitalCasoUso {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    obtenerSignoVital(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerSignoVital(codigo);
            }
            catch (error) {
                console.error(`Error al obtener un Signo Vital, ${error}`);
                throw new Error(`No se pudo obtener un Signo Vital`);
            }
        });
    }
    actualizarSignoVital(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.actualizarSignoVital(codigo, data);
            }
            catch (error) {
                console.error(`Error al actualizar el signo vital ${error}`);
                throw new Error(`No se pudo actualizar el signo vital`);
            }
        });
    }
    crearSignoVital(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.crearSignoVital(data);
            }
            catch (error) {
                console.error(`Error al crear un nuevo Signo Vital: ${error}`);
                throw new Error('No se pudo crear un nuevo Signo Vital');
            }
        });
    }
    eliminarSignoVital(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.eliminarSignoVital(codigo);
            }
            catch (error) {
                console.error(`Error al tratar de eliminar un Signo Vital`);
                throw new Error(`No se pudo eliminar un Signo Vital`);
            }
        });
    }
    obtenerSignosVitales() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerSignoVitales();
            }
            catch (error) {
                console.error(`Error al obtener todos los Signos Vitales, ${error}`);
                throw new Error(`No se pudo obtener los Signos Vitales`);
            }
        });
    }
}
exports.SignoVitalCasoUso = SignoVitalCasoUso;
//# sourceMappingURL=signoVital.useCase.js.map