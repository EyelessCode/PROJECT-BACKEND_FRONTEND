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
exports.PacienteController = void 0;
const logger_service_1 = require("../log/logger.service");
const paciente_useCase_1 = require("../../app/useCase/paciente.useCase");
const paciente_repository_1 = require("../repository/paciente.repository");
class PacienteController {
    constructor() {
        const repositorio = new paciente_repository_1.PacienteRepositorio();
        this.casoUso = new paciente_useCase_1.PacienteCasoUso(repositorio);
    }
    controladorCrearPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const nuevoPaciente = yield this.casoUso.crearPaciente(data);
                logger_service_1.logger.info(`PACIENTE CREADO ${nuevoPaciente.cedula}`);
                return res.status(201).json(nuevoPaciente);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL CREAR AL PACIENTE. ${error}`);
                return res.status(500).json({
                    message: "Error al crear un Paciente",
                    error: error,
                });
            }
        });
    }
    controladorActualizarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const data = req.body;
                const pacienteActualizado = yield this.casoUso.actualizarPaciente(codigo, data);
                if (!pacienteActualizado) {
                    return res.status(404).json({
                        message: `El Paciente: ${codigo} no existe`
                    });
                }
                logger_service_1.logger.info(`PACIENTE ACTUALIZADO ${pacienteActualizado.cedula}`);
                return res.status(200).json(pacienteActualizado);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL ACTUALIZAR AL PACIENTE. ${error}`);
                return res.status(500).json({
                    message: "Error al actualizar el Paciente",
                    error: error
                });
            }
        });
    }
    controladorEliminarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const pacienteEliminado = yield this.casoUso.eliminarPaciente(codigo);
                if (!pacienteEliminado) {
                    return res.status(404).json({
                        message: `El Paciente: ${codigo} no existe`
                    });
                }
                logger_service_1.logger.info(`PACIENTE ELIMINADO ${pacienteEliminado.cedula}`);
                return res.status(200).json(pacienteEliminado);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL ELIMINAR PACIENTE. ${error}`);
                return res.status(500).json({
                    message: "Error al eliminar el Paciente",
                    error: error
                });
            }
        });
    }
    controladorObtenerPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const codigo = parseInt(req.params.codigo);
                const paciente = yield this.casoUso.obtenerPaciente(codigo);
                if (!paciente) {
                    return res.status(404).json({
                        message: `El Paciente: ${codigo} no existe`
                    });
                }
                logger_service_1.logger.info(`PACIENTE FILTRADO ${paciente.cedula}`);
                return res.status(200).json(paciente);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL OBTENER PACIENTE. ${error}`);
                return res.status(500).json({
                    message: "Error al obtener el Paciente",
                    error: error
                });
            }
        });
    }
    controladorObtenerPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield this.casoUso.obtenerPacientes();
                logger_service_1.logger.info(`\nLISTADO DE PACIENTES\n`);
                return res.status(200).json(pacientes);
            }
            catch (error) {
                console.error(error);
                logger_service_1.logger.error(`ERROR AL OBTENER LOS PACIENTES. ${error}`);
                return res.status(500).json({
                    message: "Error al obtener los Pacientes",
                    error: error
                });
            }
        });
    }
}
exports.PacienteController = PacienteController;
//# sourceMappingURL=paciente.controller.js.map