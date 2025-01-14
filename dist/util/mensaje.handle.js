"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensajeSatisfactorio = exports.mensajeError = void 0;
const mensajeSatisfactorio = (res, error, errorBruto) => {
    return {
        message: "Petición exitosa",
    };
};
exports.mensajeSatisfactorio = mensajeSatisfactorio;
const mensajeError = (res, error, errorBruto) => {
    return {
        message: "Error en la petición",
    };
};
exports.mensajeError = mensajeError;
//# sourceMappingURL=mensaje.handle.js.map