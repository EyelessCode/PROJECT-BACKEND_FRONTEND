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
exports.actualizarPaciente = void 0;
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
const actualizarPaciente = (codigo, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existePaciente = yield prisma_service_1.prisma.paciente.findUnique({
            where: {
                codigo: codigo
            }
        });
        if (!existePaciente) {
            console.log(`Paciente ${codigo} no encontrado`);
            return null;
        }
        const actualizarPaciente = yield prisma_service_1.prisma.paciente.update({
            where: {
                codigo: codigo
            },
            data: {
                cedula: data.cedula,
                fechaNacimiento: data.fechaNacimiento,
                nombres: data.nombres
            }
        });
        return actualizarPaciente;
    }
    catch (error) {
        console.error(`Error al actualizar un Paciente: ${error}`);
        throw new Error('No se pudo actualizar un Paciente');
    }
});
exports.actualizarPaciente = actualizarPaciente;
//# sourceMappingURL=actualizarPaciente.useCase.js.map