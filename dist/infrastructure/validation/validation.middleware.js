"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarSignoVital = exports.validarPaciente = void 0;
const express_validator_1 = require("express-validator");
const validarSignoVital = [
    (0, express_validator_1.body)("descripcion").isString().withMessage("La descripción debe de ser un texto"),
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
    (0, express_validator_1.body)("cedula").isString().withMessage("La cédula debe de ser un texto"),
    (0, express_validator_1.body)("nombres").isString().withMessage("Los nombres deben de ser texto"),
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
//# sourceMappingURL=validation.middleware.js.map