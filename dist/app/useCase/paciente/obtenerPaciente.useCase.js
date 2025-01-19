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
exports.obtenerPaciente = void 0;
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
const obtenerPaciente = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existePaciente = yield prisma_service_1.prisma.paciente.findUnique({
            where: {
                codigo: codigo
            }
        });
        if (!existePaciente) {
            console.log(`No existe un paciente con el código ${codigo}`);
            return null;
        }
        return existePaciente;
    }
    catch (error) {
        console.error(`Error al obtener un Paciente con el código: ${codigo}`);
        throw new Error(`No se pudo obtener un Paciente con el código: ${codigo}`);
    }
});
exports.obtenerPaciente = obtenerPaciente;
//# sourceMappingURL=obtenerPaciente.useCase.js.map