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
const signoVital_useCase_1 = require("../../app/useCase/signoVital.useCase");
class SignoVitalController {
    controladorCrearSigno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const nuevoSignoVital = yield crearSignoVital(data);
                return res.status(201).json(nuevoSignoVital);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
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
                const data = req.body;
                const signoVitalActualizado = yield (0, signoVital_useCase_1.actualizarSignoVital)(codigo, data);
                if (!signoVitalActualizado) {
                    return res.status(404).json({
                        message: `El signo vital: ${codigo} no existe`
                    });
                }
                return res.status(200).json(signoVitalActualizado);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
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
                const eliminar = yield (0, signoVital_useCase_1.eliminarSignoVital)(codigo);
                if (!eliminar) {
                    return res.status(404).json({
                        message: `El signo vital: ${codigo} no existe`
                    });
                }
                return res.status(200).json(eliminar);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
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
                const obtenerSigno = yield (0, signoVital_useCase_1.obtenerUnSignoVital)(codigo);
                if (!obtenerSigno) {
                    return res.status(404).json({
                        message: `El signo vital: ${codigo} no existe`
                    });
                }
                return res.status(200).json(obtenerSigno);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error al obtener el signo vital",
                    error: error
                });
            }
        });
    }
    controladorObtenerSignos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const obtenerSignos = yield (0, signoVital_useCase_1.obtenerSignosVitales)();
                return res.status(200).json(obtenerSignos);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error al obtener los signos vitales",
                    error: error
                });
            }
        });
    }
}
exports.SignoVitalController = SignoVitalController;
function crearSignoVital(data) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=signoVital.controller.js.map