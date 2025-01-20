import { Request, Response } from "express";
import { actualizarSignoVital, eliminarSignoVital, obtenerSignosVitales, obtenerUnSignoVital } from "../../app/useCase/signoVital.useCase";

export class SignoVitalController{
    async controladorCrearSigno(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const nuevoSignoVital=await crearSignoVital(data)
            return res.status(201).json(nuevoSignoVital)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al crear el signo vital",
                error: error
            })
        }
    }

    async controladorActualizarSigno(req:Request,res:Response):Promise<any> {
        try {
            const codigo=parseInt(req.params.codigo)

            

            const data=req.body

            const signoVitalActualizado=await actualizarSignoVital(codigo,data)
            
            if (!signoVitalActualizado) {
                return res.status(404).json({
                    message: `El signo vital: ${codigo} no existe`
                })
            }

            return res.status(200).json(signoVitalActualizado)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al actualizar el signo vital",
                error: error

            })
        }
    }

    async controladorEliminarSigno(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)

            
            // const data=req.body

            const eliminar=await eliminarSignoVital(codigo)

            if (!eliminar) {
                return res.status(404).json({
                    message: `El signo vital: ${codigo} no existe`
                })
            }

            return res.status(200).json(eliminar)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al eliminar el signo vital",
                error: error

            })
        }
    }
    
    async controladorObtenerSigno(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)

            
            // const data=req.body

            const obtenerSigno=await obtenerUnSignoVital(codigo)

            if (!obtenerSigno) {
                return res.status(404).json({
                    message: `El signo vital: ${codigo} no existe`
                })
            }

            return res.status(200).json(obtenerSigno)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al obtener el signo vital",
                error: error

            })
        }
    }

    async controladorObtenerSignos(req:Request,res:Response):Promise<any>{
        try {
            // const data=req.body

            const obtenerSignos=await obtenerSignosVitales()
            return res.status(200).json(obtenerSignos)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al obtener los signos vitales",
                error: error

            })
        }
    }
}

function crearSignoVital(data: any) {
    throw new Error("Function not implemented.");
}
