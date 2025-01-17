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
exports.crearSignoVital = void 0;
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
const crearSignoVital = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoSignoVital = yield prisma_service_1.prisma.signoVital.create({
            data: {
                descripcion: data.descripcion,
                unidad: data.unidad,
                valorMinimo: data.valorMinimo,
                valorMaximo: data.valorMaximo
            }
        });
        return nuevoSignoVital;
    }
    catch (error) {
        console.error(`Error al crear un nuevo Signo Vital: ${error}`);
        throw new Error('No se pudo crear un nuevo Signo Vital');
    }
});
exports.crearSignoVital = crearSignoVital;
//# sourceMappingURL=crearSignoVital.useCase.js.map