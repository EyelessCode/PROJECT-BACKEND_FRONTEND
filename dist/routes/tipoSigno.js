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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const tipoSigno_controller_1 = require("../infrastructure/controller/tipoSigno.controller");
const prisma_service_1 = require("../infrastructure/data/prisma.service");
const validation_middleware_1 = require("../infrastructure/validation/validation.middleware");
const path_1 = __importDefault(require("path"));
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new tipoSigno_controller_1.SignoVitalController();
ruta.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signoVitales = yield prisma_service_1.prisma.tipoSigno.findMany();
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
ruta.get("/html", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "view", "tipoSigno.html"));
});
ruta.get('/', controlador.controladorObtenerSignos.bind(controlador));
ruta.get('/:codigo', validation_middleware_1.validarCodigo, controlador.controladorObtenerSigno.bind(controlador));
ruta.post('/', validation_middleware_1.validarSignoVital, controlador.controladorCrearSigno.bind(controlador));
ruta.put('/:codigo', validation_middleware_1.validarCodigo, validation_middleware_1.validarSignoVital, controlador.controladorActualizarSigno.bind(controlador));
ruta.delete('/:codigo', validation_middleware_1.validarCodigo, controlador.controladorEliminarSigno.bind(controlador));
//# sourceMappingURL=tipoSigno.js.map