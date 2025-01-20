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
exports.obtenerEnfermeras = exports.obtenerEnfermera = exports.eliminarEnfermera = exports.crearEnfermera = exports.actualizarEnfermeras = void 0;
const enfermera_repository_1 = require("../../infrastructure/repository/enfermera.repository");
const repositorio = new enfermera_repository_1.EnfermeraRepositorio();
const actualizarEnfermeras = (codigo, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.actualizarEnfermera(codigo, data);
    }
    catch (error) {
        console.error(`Error al actualizar una Enfermera: ${error}`);
        throw new Error('No se pudo actualizar una Enfermera');
    }
});
exports.actualizarEnfermeras = actualizarEnfermeras;
const crearEnfermera = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.crearEnfermera(data);
    }
    catch (error) {
        console.error(`Error al crear una Enfermera: ${error}`);
        throw new Error('No se pudo crear una nuevo Enfermera');
    }
});
exports.crearEnfermera = crearEnfermera;
const eliminarEnfermera = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.eliminarEnfermera(codigo);
    }
    catch (error) {
        console.error(`Error al eliminar una Enfermera: ${error}`);
        throw new Error('No se pudo eliminar una Enfermera');
    }
});
exports.eliminarEnfermera = eliminarEnfermera;
const obtenerEnfermera = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerEnfermera(codigo);
    }
    catch (error) {
        console.error(`Error al obtener una Enfermera: ${error}`);
        throw new Error('No se pudo obtener una Enfermera');
    }
});
exports.obtenerEnfermera = obtenerEnfermera;
const obtenerEnfermeras = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerEnfermeras();
    }
    catch (error) {
        console.error(`Error al obtener las Enfermeras: ${error}`);
        throw new Error('No se pudo obtener las Enfermeras');
    }
});
exports.obtenerEnfermeras = obtenerEnfermeras;
//# sourceMappingURL=enfermera.useCase.js.map