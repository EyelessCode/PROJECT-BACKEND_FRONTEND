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
exports.obtenerPacientes = exports.obtenerPaciente = exports.eliminarPaciente = exports.crearPaciente = exports.actualizarPaciente = void 0;
const paciente_repository_1 = require("../../infrastructure/repository/paciente.repository");
const repositorio = new paciente_repository_1.PacienteRepositorio();
const actualizarPaciente = (codigo, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.actualizarPaciente(codigo, data);
    }
    catch (error) {
        console.error(`Error al actualizar un Paciente: ${error}`);
        throw new Error('No se pudo actualizar un Paciente');
    }
});
exports.actualizarPaciente = actualizarPaciente;
const crearPaciente = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.crearPaciente(data);
    }
    catch (error) {
        console.error(`Error al crear un nuevo Paciente: ${error}`);
        throw new Error('No se pudo crear un nuevo Paciente');
    }
});
exports.crearPaciente = crearPaciente;
const eliminarPaciente = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.eliminarPaciente(codigo);
    }
    catch (error) {
        console.error(`Error al tratar de eliminar un Paciente con el código: ${codigo}`);
        throw new Error(`No se pudo eliminar un Paciente con el código: ${codigo}`);
    }
});
exports.eliminarPaciente = eliminarPaciente;
const obtenerPaciente = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerPaciente(codigo);
    }
    catch (error) {
        console.error(`Error al obtener un Paciente con el código: ${codigo}`);
        throw new Error(`No se pudo obtener un Paciente con el código: ${codigo}`);
    }
});
exports.obtenerPaciente = obtenerPaciente;
const obtenerPacientes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield repositorio.obtenerPacientes();
    }
    catch (error) {
        console.error(`Error al obtener todos los Pacientes, ${error}`);
        throw new Error(`No se pudo obtener los Pacientes`);
    }
});
exports.obtenerPacientes = obtenerPacientes;
//# sourceMappingURL=paciente.useCase.js.map