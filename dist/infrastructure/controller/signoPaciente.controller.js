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
exports.SignoPacienteController = void 0;
const signoPaciente_useCase_1 = require("../../app/useCase/signoPaciente.useCase");
const signoPaciente_repository_1 = require("../repository/signoPaciente.repository");
const tipoSigno_repository_1 = require("../repository/tipoSigno.repository");
const tomaSignos_repository_1 = require("../repository/tomaSignos.repository");
const casoUso = new signoPaciente_useCase_1.SignoPacienteCasoUso(new tomaSignos_repository_1.TomaSignosRepositorio(), new tipoSigno_repository_1.TipoSignoRepositorio(), new signoPaciente_repository_1.SignoPacienteRepositorio());
class SignoPacienteController {
    controladorRegistrarSignoPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = req.body;
                if (!Array.isArray(data)) {
                    data = [data];
                }
                if (data.length === 0) {
                    return res.status(400).json({
                        message: "Debe de al menos enviar un signo de paciente"
                    });
                }
                const resultado = yield casoUso.registrarSignoPaciente(data);
                return res.status(201).json(resultado);
            }
            catch (error) {
                console.error(error);
                return res.status(400).json({
                    message: "Error al crear Signo Paciente",
                    error: error,
                });
            }
        });
    }
    controladorObtenerSignosPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultado = yield casoUso.obtenerSignosPacientes();
                return res.status(200).json(resultado);
            }
            catch (error) {
                console.error(error);
                return res.status(400).json({
                    message: "Error al obtener los Signos Pacientes",
                    error: error,
                });
            }
        });
    }
}
exports.SignoPacienteController = SignoPacienteController;
//# sourceMappingURL=signoPaciente.controller.js.map