import { Request, Response } from "express";
import { crearSignoVital } from "../../app/useCase/signoVital/crearSignoVital.useCase";
import { actualizarSignoVital } from "../../app/useCase/signoVital/actualizarSignoVital.useCase";

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

    async controladorActualizarSigno(req:Request,res:Response) {
        try {
            const index=parseInt(req.params.codigo)
            const data=req.body

            const signoVitalActualizado=await actualizarSignoVital(index,data)
            res.status(201).json(signoVitalActualizado)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message:"Error al actualizar el signo vital"
            })
        }
    }

    async controladorEliminarSigno(req:Request,res:Response){
        try {
            
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message:"Error al eliminar el signo vital"
            })
        }
    }
}