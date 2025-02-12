"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const centroMedico_controller_1 = require("../infrastructure/controller/centroMedico.controller");
const validation_middleware_1 = require("../infrastructure/validation/validation.middleware");
const path_1 = __importDefault(require("path"));
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new centroMedico_controller_1.CentroMedicoController();
ruta.get("/html", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "view", "centroMedico.html"));
});
ruta.get("/", controlador.controladorObtenerCentrosMedicos.bind(controlador));
ruta.get("/:codigo", validation_middleware_1.validarCodigo, controlador.controladorObtenerCentroMedico.bind(controlador));
ruta.post("/", validation_middleware_1.validarCentroMedico, controlador.controladorCrearCentroMedico.bind(controlador));
ruta.put("/:codigo", validation_middleware_1.validarCodigo, validation_middleware_1.validarCentroMedico, controlador.controladorActualizarCentroMedico.bind(controlador));
ruta.delete("/:codigo", validation_middleware_1.validarCodigo, controlador.controladorEliminarCentroMedico.bind(controlador));
//# sourceMappingURL=centroMedico.js.map