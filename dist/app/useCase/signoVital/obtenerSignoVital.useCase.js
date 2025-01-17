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
exports.obtenerUnSignoVitalCasoUso = void 0;
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
const obtenerUnSignoVitalCasoUso = (codigo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exiteSignoVital = yield prisma_service_1.prisma.signoVital.findUnique({
            where: {
                codigo: codigo
            }
        });
        if (!exiteSignoVital) {
            console.log(`Signo Vital no encontrado con el código: ${codigo}`);
            return null;
        }
        return exiteSignoVital;
    }
    catch (error) {
        console.error(`Error al obtener un Signo Vital, ${error}`);
        throw new Error(`No se pudo obtener un Signo Vital`);
    }
});
exports.obtenerUnSignoVitalCasoUso = obtenerUnSignoVitalCasoUso;
//# sourceMappingURL=obtenerSignoVital.useCase.js.map