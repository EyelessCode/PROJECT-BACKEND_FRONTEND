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
exports.SignoVitalRepositorio = void 0;
const prisma_service_1 = require("../data/prisma.service");
class SignoVitalRepositorio {
    crearSignoVital(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.signoVital.create({
                data: data
            });
        });
    }
    obtenerSignoVital(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error("El código debe ser un número positivo mayor a cero.");
            }
            return yield prisma_service_1.prisma.signoVital.findUnique({
                where: {
                    codigo: codigo
                }
            });
        });
    }
    obtenerSignoVitales() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.signoVital.findMany();
        });
    }
    actualizarSignoVital(codigo, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error(`El código debe ser un número positivo mayor a cero.`);
            }
            return yield prisma_service_1.prisma.signoVital.update({
                where: {
                    codigo: codigo
                },
                data: data
            });
        });
    }
    eliminarSignoVital(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (codigo <= 0) {
                throw new Error(`El código debe ser un número positivo mayor a cero.`);
            }
            return yield prisma_service_1.prisma.signoVital.delete({
                where: {
                    codigo: codigo
                }
            });
        });
    }
}
exports.SignoVitalRepositorio = SignoVitalRepositorio;
//# sourceMappingURL=signoVital.repository.js.map