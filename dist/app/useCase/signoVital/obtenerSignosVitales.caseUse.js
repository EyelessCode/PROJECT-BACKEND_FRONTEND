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
exports.obtenerSignosVitalesCasoUso = void 0;
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
const obtenerSignosVitalesCasoUso = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const obtenerSignosVitales = yield prisma_service_1.prisma.signoVital.findMany();
        return obtenerSignosVitales;
    }
    catch (error) {
        console.error(`Error al obtener todos los Signos Vitales, ${error}`);
        throw new Error(`No se pudo obtener los Signos Vitales`);
    }
});
exports.obtenerSignosVitalesCasoUso = obtenerSignosVitalesCasoUso;
//# sourceMappingURL=obtenerSignosVitales.caseUse.js.map