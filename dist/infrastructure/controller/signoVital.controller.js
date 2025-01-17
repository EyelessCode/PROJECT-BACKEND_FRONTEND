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
exports.SignoVitalController = void 0;
const crearSignoVital_useCase_1 = require("../../app/useCase/signoVital/crearSignoVital.useCase");
const actualizarSignoVital_useCase_1 = require("../../app/useCase/signoVital/actualizarSignoVital.useCase");
const eliminarSignoVital_useCase_1 = require("../../app/useCase/signoVital/eliminarSignoVital.useCase");
const obtenerSignoVital_useCase_1 = require("../../app/useCase/signoVital/obtenerSignoVital.useCase");
const obtenerSignosVitales_caseUse_1 = require("../../app/useCase/signoVital/obtenerSignosVitales.caseUse");
class SignoVitalController {
    controladorCrearSigno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const nuevoSignoVital = yield (0, crearSignoVital_useCase_1.crearSignoVital)(data);
                res.status(201).json(nuevoSignoVital);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Error al crear el signo vital",
                    error: error
                });
            }
        });
    }
    controladorActualizarSigno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                if (isNaN(codigo)) {
                    res.status(400).json({
                        message: "El código no es un número"
                    });
                }
                const data = req.body;
                const signoVitalActualizado = yield (0, actualizarSignoVital_useCase_1.actualizarSignoVital)(codigo, data);
                if (!signoVitalActualizado) {
                    res.status(404).json({
                        message: `El signo vital: ${codigo} no existe`
                    });
                }
                res.status(200).json(signoVitalActualizado);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Error al actualizar el signo vital",
                    error: error
                });
            }
        });
    }
    controladorEliminarSigno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                if (isNaN(codigo)) {
                    res.status(400).json({
                        message: "El código no es un número"
                    });
                }
                const eliminarSignoVital = yield (0, eliminarSignoVital_useCase_1.eliminarSignoVitalCasoUso)(codigo);
                if (!eliminarSignoVital) {
                    res.status(404).json({
                        message: `El signo vital: ${codigo} no existe`
                    });
                }
                res.status(200).json(eliminarSignoVital);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Error al eliminar el signo vital",
                    error: error
                });
            }
        });
    }
    controladorObtenerSigno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                if (isNaN(codigo)) {
                    res.status(400).json({
                        message: "El código no es un número"
                    });
                }
                const obtenerSigno = yield (0, obtenerSignoVital_useCase_1.obtenerUnSignoVitalCasoUso)(codigo);
                if (!obtenerSigno) {
                    res.status(404).json({
                        message: `El signo vital: ${codigo} no existe`
                    });
                }
                res.status(200).json(obtenerSigno);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Error al obtener el signo vital",
                    error: error
                });
            }
        });
    }
    controladorObtenerSignos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const obtenerSignos = yield (0, obtenerSignosVitales_caseUse_1.obtenerSignosVitalesCasoUso)();
                res.status(200).json(obtenerSignos);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Error al obtener los signos vitales",
                    error: error
                });
            }
        });
    }
}
exports.SignoVitalController = SignoVitalController;
//# sourceMappingURL=signoVital.controller.js.map