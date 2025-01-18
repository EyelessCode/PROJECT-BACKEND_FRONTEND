// import {} from 'express-validator'

import { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validarSignoVital:any=[
    body("descripcion").isString().withMessage("La descripción debe de ser un texto"),
    body("unidad").isString().withMessage("La unidad debe de ser texto"),
    body("valorMinimo").isFloat({gt:0}).withMessage("El valor mínimo debe ser un número positivo"),
    body("valorMaximo").isFloat({gt:0}).withMessage("El valor máximo debe ser un número positivo"),
    (req:Request,res:Response,next:any)=>{
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
    body("fechaNacimiento").isDate({format:"dd/mm/yyyy"}).withMessage("La fecha de nacimiento debe ser una fecha"),
    (req:Request,res:Response,next:any)=>{
        const errores=validationResult(req)

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores:errores.array()
            })
        }
        next()
    }
]

export {validarPaciente,validarSignoVital}