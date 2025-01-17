"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignoVitalController = void 0;
const signoVital_repository_1 = require("../repository/signoVital.repository");
const error_until_1 = require("../../util/error.until");
const mensaje_until_1 = require("../../util/mensaje.until");
const signoVital_service_1 = require("../../app/service/signoVital.service");
class SignoVitalController {
    constructor() {
        this.controladorObtenerSignos = (req, res) => {
            try {
                let signo = this.service.obtenerSignos();
                res.json(signo);
            }
            catch (error) {
                (0, error_until_1.handleHttp)(res.status(404), 'ERROR_EN_OBTENER_SIGNOS', error);
            }
        };
        this.controladorObtenerUnSigno = (req, res) => {
            try {
                let buscarCodigo = parseInt(req.params.codigo);
                if (isNaN(buscarCodigo)) {
                    res.status(400).json({
                        mensaje: "Código inválido!"
                    });
                }
                let SoloSigno = this.service.obtenerUnSigno(buscarCodigo);
                if (!SoloSigno) {
                    res.status(404).json((0, mensaje_until_1.generarMensajeError)());
                }
                res.json(SoloSigno);
            }
            catch (error) {
                (0, error_until_1.handleHttp)(res, 'ERROR_EN_OBTENER_UN_SIGNO', error);
            }
        };
        this.controladorCrearSigno = (req, res) => {
            try {
                let crearSigno = this.service.crearSigno(req.body);
                res.status(201).json(crearSigno);
            }
            catch (error) {
                (0, error_until_1.handleHttp)(res, 'ERROR_CREAR_SIGNO', error);
            }
        };
        this.controladorActualizarSigno = (req, res) => {
            try {
                let buscarCodigo = parseInt(req.params.codigo);
                if (isNaN(buscarCodigo)) {
                    res.status(400).json({
                        mensaje: "Código inválido"
                    });
                }
                let actualizarSigno = this.service.actualizarSigno(buscarCodigo, req.body);
                if (!actualizarSigno) {
                    res.status(404).json((0, mensaje_until_1.generarMensajeError)());
                }
                res.json(actualizarSigno);
            }
            catch (error) {
                (0, error_until_1.handleHttp)(res, 'ERROR_ACTUALIZAR_SIGNO', error);
            }
        };
        this.controladorEliminarSigno = (req, res) => {
            try {
                let buscarCodigo = parseInt(req.params.codigo);
                if (isNaN(buscarCodigo)) {
                    res.status(400).json({
                        mensaje: "Código inválido!"
                    });
                }
                let eliminarSigno = this.service.eliminarSigno(buscarCodigo);
                if (eliminarSigno) {
                    res.status(200).json((0, mensaje_until_1.generarMensajeSatisfactorio)());
                }
                else {
                    res.status(404).json((0, mensaje_until_1.generarMensajeError)());
                }
            }
            catch (error) {
                (0, error_until_1.handleHttp)(res, 'ERROR_ELIMINAR_SIGNO', error);
            }
        };
        const repositorio = new signoVital_repository_1.SignoVitalRepositorio();
        this.service = new signoVital_service_1.SignoVitalService(repositorio);
    }
}
exports.SignoVitalController = SignoVitalController;
//# sourceMappingURL=signoVital.controller.js.map