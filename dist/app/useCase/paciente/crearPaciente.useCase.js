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
exports.crearPaciente = void 0;
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
const crearPaciente = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoPaciente = yield prisma_service_1.prisma.paciente.create({
            data: {
                cedula: data.cedula,
                fechaNacimiento: data.fechaNacimiento,
                nombres: data.nombres
            }
        });
        return nuevoPaciente;
    }
    catch (error) {
        console.error(`Error al crear un nuevo Paciente: ${error}`);
        throw new Error('No se pudo crear un nuevo Paciente');
    }
});
exports.crearPaciente = crearPaciente;
//# sourceMappingURL=crearPaciente.useCase.js.map