// import {} from 'express-validator'

import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validarSignoVital:any=[
    body("descripcion").isString().withMessage("La descripción debe de ser un texto").isLength({max:120})
    .withMessage("Exceso de caracteres, máximo 120"),
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
    body("cedula").isString().withMessage("La cédula debe de ser un texto").isLength({min:10,max:10})
    .withMessage("La cédula debe de tener obligatoriamente 10 dígitos"),
    body("nombres").isString().withMessage("Los nombres deben de ser texto").isLength({min:3,max:60})
    .withMessage("El nombre mínimo debe de tener 3 caracteres y máximo 60"),
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
    body('nombre').isString().withMessage("El nombre debe ser texto").isLength({max:85})
    .withMessage("El nombre de la Clínica mínimo no debe de exceder de 85 caracteres"),
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

const validarEnfermera:any=[
    body('nombre').isString().withMessage("El nombre debe ser texto").isLength({min:3,max:60})
    .withMessage("El nombre mínimo debe de tener 3 caracteres o máximo 60"),
    body("cedula").isString().withMessage("La cédula debe de ser un texto").isLength({min:10,max:10})
    .withMessage("La cédula debe de tener obligatoriamente 10 dígitos"),
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

const validarCodigo=(req:Request,res:Response,next:NextFunction):any=>{
    const codigo=parseInt(req.params.codigo)

    if (isNaN(codigo)) {
        return res.status(400).json({
            message:"El código no es un número válido"
        })
    }

    next()
}

export {validarPaciente,validarSignoVital,validarCentroMedico,validarEnfermera,
    validarCodigo}