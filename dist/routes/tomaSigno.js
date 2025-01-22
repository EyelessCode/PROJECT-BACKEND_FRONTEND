"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const tomaSigno_controller_1 = require("../infrastructure/controller/tomaSigno.controller");
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const controlador = new tomaSigno_controller_1.TomaSignoController();
ruta.post("/", controlador.registrarTomaSigno.bind(controlador));
//# sourceMappingURL=tomaSigno.js.map