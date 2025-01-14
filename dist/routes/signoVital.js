"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signoVital_controller_1 = require("../controller/signoVital.controller");
const ruta = (0, express_1.Router)();
const controlador = new signoVital_controller_1.SignoVitalController();
ruta.get('/', controlador.controladorObtenerSignos);
ruta.get('/:codigo', controlador.controladorObtenerUnSigno);
ruta.post('/', controlador.controladorCrearSigno);
ruta.put('/:codigo', controlador.controladorActualizarSigno);
ruta.delete('/:codigo', controlador.controladorEliminarSigno);
//# sourceMappingURL=signoVital.js.map