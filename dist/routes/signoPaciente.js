"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const signoPaciente_controller_1 = require("../infrastructure/controller/signoPaciente.controller");
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new signoPaciente_controller_1.SignoPacienteController();
ruta.get("/", controlador.controladorObtenerSignosPacientes.bind(controlador));
ruta.post("/", controlador.controladorRegistrarSignoPaciente.bind(controlador));
//# sourceMappingURL=signoPaciente.js.map