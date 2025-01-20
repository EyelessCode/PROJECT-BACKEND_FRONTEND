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
exports.obtenerUnSignoVital = exports.obtenerSignosVitales = exports.eliminarSignoVital = exports.crearSignoVital = exports.actualizarSignoVital = void 0;
const signoVital_repository_1 = require("../../infrastructure/repository/signoVital.repository");
const repositorio = new signoVital_repository_1.SignoVitalRepositorio();
const actualizarSignoVital = (codigo, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.actualizarSignoVital(codigo, data);
    }
    catch (error) {
        console.error(`Error al actualizar el signo vital ${error}`);
        throw new Error(`No se pudo actualizar el signo vital`);
    }
});
exports.actualizarSignoVital = actualizarSignoVital;
const crearSignoVital = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.crearSignoVital(data);
    }
    catch (error) {
        console.error(`Error al crear un nuevo Signo Vital: ${error}`);
        throw new Error('No se pudo crear un nuevo Signo Vital');
    }
});
exports.crearSignoVital = crearSignoVital;
const eliminarSignoVital = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.eliminarSignoVital(codigo);
    }
    catch (error) {
        console.error(`Error al tratar de eliminar un Signo Vital`);
        throw new Error(`No se pudo eliminar un Signo Vital`);
    }
});
exports.eliminarSignoVital = eliminarSignoVital;
const obtenerSignosVitales = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerSignoVitales();
    }
    catch (error) {
        console.error(`Error al obtener todos los Signos Vitales, ${error}`);
        throw new Error(`No se pudo obtener los Signos Vitales`);
    }
});
exports.obtenerSignosVitales = obtenerSignosVitales;
const obtenerUnSignoVital = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerSignoVital(codigo);
    }
    catch (error) {
        console.error(`Error al obtener un Signo Vital, ${error}`);
        throw new Error(`No se pudo obtener un Signo Vital`);
    }
});
exports.obtenerUnSignoVital = obtenerUnSignoVital;
//# sourceMappingURL=signoVital.useCase.js.map