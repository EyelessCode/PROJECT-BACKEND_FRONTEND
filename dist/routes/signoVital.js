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
exports.ruta = void 0;
const express_1 = require("express");
const prisma_service_1 = require("../infrastructure/data/prisma.service");
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
ruta.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signoVitales = yield prisma_service_1.prisma.signoVital.findMany();
        res.json({
            sucess: true,
            data: signoVitales
        });
    }
    catch (error) {
        console.error(`Error al conectar con la BD, ${error}`);
        res.status(500).json({
            succes: false,
            error: "Error al conectar con la BD"
        });
    }
}));
//# sourceMappingURL=signoVital.js.map