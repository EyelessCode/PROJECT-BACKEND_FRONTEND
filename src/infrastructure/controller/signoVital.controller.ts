import { Request, Response } from "express";
import { crearSignoVital } from "../../app/caseUse/crearSignoVital.caseUse";

export class SignoVitalController{
    async controladorCrearSigno(req:Request,res:Response){
        try {
            const data=req.body
            const nuevoSignoVital=await crearSignoVital(data)
            res.status(201).json(nuevoSignoVital)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message:"Error al crear el signo vital"
            })
        }
    }
}