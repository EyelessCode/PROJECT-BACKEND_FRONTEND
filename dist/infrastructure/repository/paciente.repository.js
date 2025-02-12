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
exports.PacienteRepositorio = void 0;
const prisma_service_1 = require("../data/prisma.service");
class PacienteRepositorio {
    crearPaciente(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.paciente.create({
                data: data
            });
        });
    }
    obtenerPaciente(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!codigo || typeof codigo !== 'number' || codigo <= 0) {
                throw new Error("El código debe ser un número positivo mayor a cero.");
            }
            return yield prisma_service_1.prisma.paciente.findUnique({
                where: {
                    codigo: codigo
                }
            });
        });
    }
    obtenerPacientes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.paciente.findMany();
        });
    }
    actualizarPaciente(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error("El código debe ser un número positivo mayor a cero.");
            }
            const pacienteExistente = yield prisma_service_1.prisma.paciente.findUnique({
                where: { codigo }
            });
            if (!pacienteExistente) {
                console.error(`Paciente con código ${codigo} no encontrado.`);
                return null;
            }
            if (data.cedula && data.cedula !== pacienteExistente.cedula) {
                const cedulaExistente = yield prisma_service_1.prisma.paciente.findUnique({
                    where: { cedula: data.cedula }
                });
                if (cedulaExistente) {
                    throw new Error(`La cédula ${data.cedula} ya está registrada en otro paciente.`);
                }
            }
            return yield prisma_service_1.prisma.paciente.update({
                where: { codigo },
                data
            });
        });
    }
    eliminarPaciente(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error("El código debe ser un número positivo mayor a cero.");
            }
            return yield prisma_service_1.prisma.paciente.delete({
                where: {
                    codigo: codigo
                }
            });
        });
    }
}
exports.PacienteRepositorio = PacienteRepositorio;
//# sourceMappingURL=paciente.repository.js.map