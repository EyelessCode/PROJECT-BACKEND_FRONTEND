"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCodigo = exports.validarEnfermera = exports.validarCentroMedico = exports.validarSignoVital = exports.validarPaciente = void 0;
const express_validator_1 = require("express-validator");
const validarSignoVital = [
    (0, express_validator_1.body)("descripcion").isString().withMessage("La descripción debe de ser un texto").isLength({ max: 120 })
        .withMessage("Exceso de caracteres, máximo 120"),
    (0, express_validator_1.body)("unidad").isString().withMessage("La unidad debe de ser texto"),
    (0, express_validator_1.body)("valorMinimo").isFloat({ gt: 0 }).withMessage("El valor mínimo debe ser un número positivo"),
    (0, express_validator_1.body)("valorMaximo").isFloat({ gt: 0 }).withMessage("El valor máximo debe ser un número positivo"),
    (req, res, next) => {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }
        next();
    }
];
exports.validarSignoVital = validarSignoVital;
const validarPaciente = [
    (0, express_validator_1.body)("cedula").isString().withMessage("La cédula debe de ser un texto").matches(/^\d{10}$/)
        .withMessage("La cédula debe contener exactamente 10 dígitos numéricos"),
    (0, express_validator_1.body)("nombres").isString().withMessage("Los nombres deben de ser texto").isLength({ min: 3, max: 60 })
        .withMessage("El nombre mínimo debe de tener 3 caracteres y máximo 60"),
    (0, express_validator_1.body)("fechaNacimiento").isString().withMessage("La fecha de nacimiento debe ser válida")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("Formato de fecha inválido (YYYY-MM-DD)"),
    (req, res, next) => {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }
        next();
    }
];
exports.validarPaciente = validarPaciente;
const validarCentroMedico = [
    (0, express_validator_1.body)('nombre').isString().withMessage("El nombre debe ser texto").isLength({ max: 85 })
        .withMessage("El nombre de la Clínica mínimo no debe de exceder de 85 caracteres"),
    (0, express_validator_1.body)('direccion').isString().withMessage("La dirección debe ser texto"),
    (req, res, next) => {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }
        next();
    }
];
exports.validarCentroMedico = validarCentroMedico;
const validarEnfermera = [
    (0, express_validator_1.body)('nombres').isString().withMessage("El nombre debe ser texto").isLength({ min: 3, max: 60 })
        .withMessage("El nombre mínimo debe de tener 3 caracteres o máximo 60"),
    (0, express_validator_1.body)("cedula").isString().withMessage("La cédula debe de ser un texto").matches(/^\d{10}$/)
        .withMessage("La cédula debe contener exactamente 10 dígitos numéricos"),
    (req, res, next) => {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }
        next();
    }
];
exports.validarEnfermera = validarEnfermera;
const validarCodigo = (req, res, next) => {
    const codigo = parseInt(req.params.codigo);
    if (isNaN(codigo)) {
        return res.status(400).json({
            message: "El código no es un número válido"
        });
    }
    if (codigo <= 0) {
        return res.status(400).json({
            message: "El código debe de ser positivo"
        });
    }
    next();
};
exports.validarCodigo = validarCodigo;
//# sourceMappingURL=validation.middleware.js.map