"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const signoPaciente_controller_1 = require("../infrastructure/controller/signoPaciente.controller");
const path_1 = __importDefault(require("path"));
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new signoPaciente_controller_1.SignoPacienteController();
ruta.get("/html", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "view", "signoPaciente.html"));
});
ruta.get("/", controlador.controladorObtenerSignosPacientes.bind(controlador));
ruta.post("/", controlador.controladorRegistrarSignoPaciente.bind(controlador));
//# sourceMappingURL=signoPaciente.js.map