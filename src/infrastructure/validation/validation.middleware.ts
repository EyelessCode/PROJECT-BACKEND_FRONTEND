// import {} from 'express-validator'

import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validarSignoVital:any=[
    body("descripcion").isString().withMessage("La descripción debe de ser un texto"),
    body("unidad").isString().withMessage("La unidad debe de ser texto"),
    body("valorMinimo").isFloat({gt:0}).withMessage("El valor mínimo debe ser un número positivo"),
    body("valorMaximo").isFloat({gt:0}).withMessage("El valor máximo debe ser un número positivo"),
    (req:Request,res:Response,next:NextFunction)=>{
        const errores=validationResult(req)

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores:errores.array()
            })
        }
        next()
    }
]

const validarPaciente:any=[
    body("cedula").isString().withMessage("La cédula debe de ser un texto"),
    body("nombres").isString().withMessage("Los nombres deben de ser texto"),
    body("fechaNacimiento").isString().withMessage("La fecha de nacimiento debe ser válida")
    .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("Formato de fecha inválido (YYYY-MM-DD)"),
    (req:Request,res:Response,next:NextFunction)=>{
        const errores=validationResult(req)

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores:errores.array()
            })
        }
        next()
    }
]

const validarCentroMedico:any=[
    body('nombre').isString().withMessage("El nombre debe ser texto"),
    body('direccion').isString().withMessage("La dirección debe ser texto"),
    (req:Request,res:Response,next:NextFunction)=>{
        const errores=validationResult(req)

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores:errores.array()
            })
        }

        next()
    }
]

export {validarPaciente,validarSignoVital,validarCentroMedico}