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
exports.TomaSignoController = void 0;
const tomaSigno_useCase_1 = require("../../app/useCase/tomaSigno.useCase");
const centroMedico_repository_1 = require("../repository/centroMedico.repository");
const enfermera_repository_1 = require("../repository/enfermera.repository");
const paciente_repository_1 = require("../repository/paciente.repository");
const tomaSignos_repository_1 = require("../repository/tomaSignos.repository");
const casoUso = new tomaSigno_useCase_1.TomaSignoCasoUso(new paciente_repository_1.PacienteRepositorio(), new centroMedico_repository_1.CentroMedicoRepositorio(), new enfermera_repository_1.EnfermeraRepositorio(), new tomaSignos_repository_1.TomaSignosRepositorio());
class TomaSignoController {
    controladorRegistrarTomaSigno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const tomaSigno = yield casoUso.registrarTomaSigno(data);
                return res.status(201).json(tomaSigno);
            }
            catch (error) {
                console.error(error);
                return res.status(400).json({ message: error });
            }
        });
    }
    controladorObtenerTomaSignos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tomaSignos = yield casoUso.obtenerTomaSignos();
                if (!tomaSignos.length) {
                    return res.status(404).json({ message: 'No se encontraron registros de toma de signos.' });
                }
                return res.status(200).json(tomaSignos);
            }
            catch (error) {
                console.error('Error al obtener toma de signos:', error);
                return res.status(500).json({ message: 'Error interno del servidor.' });
            }
        });
    }
}
exports.TomaSignoController = TomaSignoController;
//# sourceMappingURL=tomaSigno.controller.js.map