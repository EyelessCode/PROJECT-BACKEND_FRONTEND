"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignoVitalController = void 0;
const signoVital_repository_1 = require("../repository/signoVital.repository");
const error_handle_1 = require("../util/error.handle");
const mensaje_handle_1 = require("../util/mensaje.handle");
class SignoVitalController {
    constructor(repositorio = new signoVital_repository_1.SignoVital()) {
        this.controladorObtenerSignos = (req, res) => {
            try {
                let signo = this.repositorioAtributo.obtenerSignos();
                res.json(signo);
            }
            catch (error) {
                (0, error_handle_1.handleHttp404)(res.status(404), 'ERROR_EN_OBTENER_SIGNOS', error);
            }
        };
        this.controladorObtenerUnSigno = (req, res) => {
            try {
                let buscarCodigo = parseInt(req.params.codigo);
                let SoloSigno = this.repositorioAtributo.obtenerUnSigno(buscarCodigo);
                if (SoloSigno) {
                    res.json(SoloSigno);
                }
            }
            catch (error) {
                (0, error_handle_1.handleHttp404)(res, 'ERROR_EN_OBTENER_UN_SIGNO', error);
            }
        };
        this.controladorCrearSigno = (req, res) => {
            try {
                let crearSigno = this.repositorioAtributo.crearSigno(req.body);
                res.status(201).json(crearSigno);
            }
            catch (error) {
                (0, error_handle_1.handleHttp404)(res, 'ERROR_CREAR_SIGNO', error);
            }
        };
        this.controladorActualizarSigno = (req, res) => {
            try {
                let buscarCodigo = parseInt(req.params.codigo);
                let actualizarSigno = this.repositorioAtributo.actualizarSigno(buscarCodigo, req.body);
                if (actualizarSigno) {
                    res.json(actualizarSigno);
                }
            }
            catch (error) {
                (0, error_handle_1.handleHttp404)(res, 'ERROR_ACTUALIZAR_SIGNO', error);
            }
        };
        this.controladorEliminarSigno = (req, res) => {
            try {
                let buscarCodigo = parseInt(req.params.codigo);
                let eliminarSigno = this.repositorioAtributo.eliminarSigno(buscarCodigo);
                if (eliminarSigno) {
                    res.status(200).json(mensaje_handle_1.mensajeSatisfactorio);
                }
                else {
                    res.status(404).json(mensaje_handle_1.mensajeError);
                }
            }
            catch (error) {
                (0, error_handle_1.handleHttp404)(res, 'ERROR_ELIMINAR_SIGNO', error);
            }
        };
        this.repositorioAtributo = repositorio;
    }
}
exports.SignoVitalController = SignoVitalController;
//# sourceMappingURL=signoVital.controller.js.map