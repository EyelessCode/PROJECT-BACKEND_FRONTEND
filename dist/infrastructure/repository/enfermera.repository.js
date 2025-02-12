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
exports.EnfermeraRepositorio = void 0;
const prisma_service_1 = require("../data/prisma.service");
class EnfermeraRepositorio {
    crearEnfermera(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.enfermera.create({
                data: data
            });
        });
    }
    obtenerEnfermera(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error("El código del centro médico debe ser mayor a 0");
            }
            return yield prisma_service_1.prisma.enfermera.findUnique({
                where: {
                    codigo: codigo
                }
            });
        });
    }
    obtenerEnfermeras() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.enfermera.findMany();
        });
    }
    actualizarEnfermera(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error("El código del centro médico debe ser mayor a 0");
            }
            return yield prisma_service_1.prisma.enfermera.update({
                where: {
                    codigo: codigo
                },
                data: data
            });
        });
    }
    eliminarEnfermera(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error("El código del centro médico debe ser mayor a 0");
            }
            return yield prisma_service_1.prisma.enfermera.delete({
                where: {
                    codigo: codigo
                }
            });
        });
    }
}
exports.EnfermeraRepositorio = EnfermeraRepositorio;
//# sourceMappingURL=enfermera.repository.js.map