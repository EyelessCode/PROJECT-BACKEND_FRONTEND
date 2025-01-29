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
exports.EnfermeraController = void 0;
const logger_service_1 = require("../log/logger.service");
const enfermera_useCase_1 = require("../../app/useCase/enfermera.useCase");
const enfermera_repository_1 = require("../repository/enfermera.repository");
class EnfermeraController {
    constructor() {
        const repositorio = new enfermera_repository_1.EnfermeraRepositorio();
        this.casoUso = new enfermera_useCase_1.EnfermeraCasoUso(repositorio);
    }
    controladorCrearEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const crear = yield this.casoUso.crearEnfermera(data);
                logger_service_1.logger.info(`ENFERMERA CREADA ${crear.cedula}`);
                return res.status(201).json(crear);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL CREAR AL ENFERMERA. ${error}`);
                return res.status(500).json({
                    message: "Error al crear una Enfermera",
                    error: error,
                });
            }
        });
    }
    controladorEliminarEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const eliminar = yield this.casoUso.eliminarEnfermera(codigo);
                if (!eliminar) {
                    return res.status(404).json({
                        message: `La Enfermera: ${codigo} no existe`
                    });
                }
                logger_service_1.logger.info(`ENFERMERA ELIMINADA ${eliminar.cedula}`);
                return res.status(200).json(eliminar);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL ELIMINAR ENFERMERA. ${error}`);
                return res.status(500).json({
                    message: "Error al eliminar una Enfermera",
                    error: error,
                });
            }
        });
    }
    controladorActualizarEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const data = req.body;
                const actualizar = yield this.casoUso.actualizarEnfermera(codigo, data);
                if (!actualizar) {
                    return res.status(404).json({
                        message: `La Enfermera: ${codigo} no existe`
                    });
                }
                logger_service_1.logger.info(`ENFERMERA ACTUALIZADA ${actualizar.cedula}`);
                return res.status(200).json(actualizar);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL ACTUALIZAR ENFERMERA. ${error}`);
                return res.status(500).json({
                    message: "Error al actualizar una Enfermera",
                    error: error,
                });
            }
        });
    }
    controladorObtenerEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const obtener = yield this.casoUso.obtenerEnfermera(codigo);
                if (!obtener) {
                    return res.status(404).json({
                        message: `La Enfermera: ${codigo} no existe`
                    });
                }
                logger_service_1.logger.info(`ENFERMERA OBTENIDA ${obtener.cedula}`);
                return res.status(200).json(obtener);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL OBTENER LA ENFERMERA. ${error}`);
                return res.status(500).json({
                    message: "Error al obtener una Enfermera",
                    error: error,
                });
            }
        });
    }
    controladorObtenerEnfermeras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const obtener = yield this.casoUso.obtenerEnfermeras();
                return res.status(200).json(obtener);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL OBTENER LAS ENFERMERAS. ${error}`);
                return res.status(500).json({
                    message: "Error al obtener las Enfermeras",
                    error: error,
                });
            }
        });
    }
}
exports.EnfermeraController = EnfermeraController;
//# sourceMappingURL=enfermera.controller.js.map