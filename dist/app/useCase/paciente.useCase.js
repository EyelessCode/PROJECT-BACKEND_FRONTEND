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
exports.PacienteCasoUso = void 0;
class PacienteCasoUso {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    actualizarPaciente(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!data || Object.keys(data).length === 0) {
                    throw new Error("El objeto de datos está vacío.");
                }
                return yield this.repositorio.actualizarPaciente(codigo, data);
            }
            catch (error) {
                console.error(`Error al actualizar un Paciente: ${error}`);
                throw new Error('No se pudo actualizar un Paciente');
            }
        });
    }
    crearPaciente(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.crearPaciente(data);
            }
            catch (error) {
                console.error(`Error al crear un nuevo Paciente: ${error}`);
                throw new Error('No se pudo crear un nuevo Paciente');
            }
        });
    }
    eliminarPaciente(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.eliminarPaciente(codigo);
            }
            catch (error) {
                console.error(`Error al tratar de eliminar un Paciente con el código: ${codigo}`);
                throw new Error(`No se pudo eliminar un Paciente con el código: ${codigo}`);
            }
        });
    }
    obtenerPaciente(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerPaciente(codigo);
            }
            catch (error) {
                console.error(`Error al obtener un Paciente con el código: ${codigo}`);
                throw new Error(`No se pudo obtener un Paciente con el código: ${codigo}`);
            }
        });
    }
    obtenerPacientes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repositorio.obtenerPacientes();
            }
            catch (error) {
                console.error(`Error al obtener todos los Pacientes, ${error}`);
                throw new Error(`No se pudo obtener los Pacientes`);
            }
        });
    }
}
exports.PacienteCasoUso = PacienteCasoUso;
//# sourceMappingURL=paciente.useCase.js.map