"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const paciente_controller_1 = require("../infrastructure/controller/paciente.controller");
const validation_middleware_1 = require("../infrastructure/validation/validation.middleware");
const path_1 = __importDefault(require("path"));
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new paciente_controller_1.PacienteController();
ruta.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "view", "paciente.html"));
});
ruta.get('/', controlador.controladorObtenerPacientes.bind(controlador));
ruta.get('/:codigo', validation_middleware_1.validarCodigo, controlador.controladorObtenerPaciente.bind(controlador));
ruta.post('/', validation_middleware_1.validarPaciente, controlador.controladorCrearPaciente.bind(controlador));
ruta.put('/:codigo', validation_middleware_1.validarPaciente, validation_middleware_1.validarCodigo, controlador.controladorActualizarPaciente.bind(controlador));
ruta.delete('/:codigo', validation_middleware_1.validarCodigo, controlador.controladorEliminarPaciente.bind(controlador));
//# sourceMappingURL=paciente.js.map