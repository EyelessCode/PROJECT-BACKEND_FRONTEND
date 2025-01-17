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
exports.eliminarSignoVitalCasoUso = void 0;
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
const eliminarSignoVitalCasoUso = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existeSignoVital = yield prisma_service_1.prisma.signoVital.findUnique({
            where: {
                codigo: codigo
            }
        });
        if (!existeSignoVital) {
            console.log(`Signo Vital con el código ${codigo} no existe!`);
            return null;
        }
        const eliminarSignoVital = yield prisma_service_1.prisma.signoVital.delete({
            where: {
                codigo: codigo
            },
        });
        return eliminarSignoVital;
    }
    catch (error) {
        console.error(`Error al tratar de eliminar un Signo Vital`);
        throw new Error(`No se pudo eliminar un Signo Vital`);
    }
});
exports.eliminarSignoVitalCasoUso = eliminarSignoVitalCasoUso;
//# sourceMappingURL=eliminarSignoVital.useCase.js.map