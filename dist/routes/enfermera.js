"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const enfermera_controller_1 = require("../infrastructure/controller/enfermera.controller");
const validation_middleware_1 = require("../infrastructure/validation/validation.middleware");
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new enfermera_controller_1.EnfermeraController();
ruta.get("/", controlador.controladorObtenerEnfermeras.bind(controlador));
ruta.get("/:codigo", validation_middleware_1.validarCodigo, controlador.controladorObtenerEnfermera.bind(controlador));
ruta.post("/", validation_middleware_1.validarEnfermera, controlador.controladorCrearEnfermera.bind(controlador));
ruta.put("/:codigo", validation_middleware_1.validarCodigo, validation_middleware_1.validarEnfermera, controlador.controladorActualizarEnfermera.bind(controlador));
ruta.delete("/:codigo", validation_middleware_1.validarCodigo, controlador.controladorEliminarEnfermera.bind(controlador));
//# sourceMappingURL=enfermera.js.map