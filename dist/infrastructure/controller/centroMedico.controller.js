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
exports.CentroMedicoController = void 0;
const centroMedico_useCase_1 = require("../../app/useCase/centroMedico.useCase");
class CentroMedicoController {
    controladorCrearCentroMedico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const crear = yield (0, centroMedico_useCase_1.crearCentroMedico)(data);
                return res.status(201).json(crear);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error al crear un Centro Médico",
                    error: error,
                });
            }
        });
    }
    controladorEliminarCentroMedico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const eliminar = yield (0, centroMedico_useCase_1.eliminarCentroMedico)(codigo);
                if (!eliminar) {
                    return res.status(404).json({
                        message: `El Centro Médico: ${codigo} no existe`
                    });
                }
                return res.status(200).json(eliminar);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error al eliminar un Centro Médico",
                    error: error,
                });
            }
        });
    }
    controladorActualizarCentroMedico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const data = req.body;
                const actualizar = yield (0, centroMedico_useCase_1.actualizarCentroMedico)(codigo, data);
                if (!actualizar) {
                    return res.status(404).json({
                        message: `El Centro Médico: ${codigo} no existe`
                    });
                }
                return res.status(200).json(actualizar);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error al actualizar un Centro Médico",
                    error: error,
                });
            }
        });
    }
    controladorObtenerCentroMedico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const obtener = yield (0, centroMedico_useCase_1.obtenerCentroMedico)(codigo);
                if (!obtener) {
                    return res.status(404).json({
                        message: `El Centro Médico: ${codigo} no existe`
                    });
                }
                return res.status(200).json(obtener);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error al obtener un Centro Médico",
                    error: error,
                });
            }
        });
    }
    controladorObtenerCentrosMedicos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const obtener = yield (0, centroMedico_useCase_1.obtenerCentrosMedicos)();
                return res.status(200).json(obtener);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error al obtener los Centros Médicos",
                    error: error,
                });
            }
        });
    }
}
exports.CentroMedicoController = CentroMedicoController;
//# sourceMappingURL=centroMedico.controller.js.map