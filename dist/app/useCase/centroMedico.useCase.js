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
exports.obtenerCentrosMedicos = exports.obtenerCentroMedico = exports.eliminarCentroMedico = exports.crearCentroMedico = exports.actualizarCentroMedico = void 0;
const centroMedico_repository_1 = require("../../infrastructure/repository/centroMedico.repository");
const repositorio = new centroMedico_repository_1.CentroMedicoRepositorio();
const actualizarCentroMedico = (codigo, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.actualizarCentroMedico(codigo, data);
    }
    catch (error) {
        console.error(`Error al actualizar Centro Médico: ${error}`);
        throw new Error('No se pudo actualizar un Centro Médico');
    }
});
exports.actualizarCentroMedico = actualizarCentroMedico;
const crearCentroMedico = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.crearCentroMedico(data);
    }
    catch (error) {
        console.error(`Error al crear un nuevo un Centro Médico: ${error}`);
        throw new Error('No se pudo crear un nuevo Centro Médico');
    }
});
exports.crearCentroMedico = crearCentroMedico;
const eliminarCentroMedico = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.eliminarCentroMedico(codigo);
    }
    catch (error) {
        console.error(`Error al eliminar Centro Médico: ${error}`);
        throw new Error('No se pudo eliminar un Centro Médico');
    }
});
exports.eliminarCentroMedico = eliminarCentroMedico;
const obtenerCentroMedico = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerCentroMedico(codigo);
    }
    catch (error) {
        console.error(`Error al obtener un Centro Médico: ${error}`);
        throw new Error('No se pudo obtener un Centro Médico');
    }
});
exports.obtenerCentroMedico = obtenerCentroMedico;
const obtenerCentrosMedicos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerCentrosMedicos();
    }
    catch (error) {
        console.error(`Error al obtener los Centros Médicos: ${error}`);
        throw new Error('No se pudo obtener los Centros Médicos');
    }
});
exports.obtenerCentrosMedicos = obtenerCentrosMedicos;
//# sourceMappingURL=centroMedico.useCase.js.map