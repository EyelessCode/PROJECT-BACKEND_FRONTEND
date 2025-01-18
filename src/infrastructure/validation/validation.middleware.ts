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

export {validarSignoVital}