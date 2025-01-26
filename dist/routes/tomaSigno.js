"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const tomaSigno_controller_1 = require("../infrastructure/controller/tomaSigno.controller");
const validation_middleware_1 = require("../infrastructure/validation/validation.middleware");
const path_1 = __importDefault(require("path"));
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new tomaSigno_controller_1.TomaSignoController();
ruta.get("/html", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "view", "tomaSigno.html"));
});
ruta.get("/", controlador.controladorRegistrarTomaSigno.bind(controlador));
ruta.post("/", validation_middleware_1.validarTomaSigno, controlador.controladorRegistrarTomaSigno.bind(controlador));
//# sourceMappingURL=tomaSigno.js.map