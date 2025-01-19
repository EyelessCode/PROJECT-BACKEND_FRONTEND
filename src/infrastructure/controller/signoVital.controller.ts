import { Request, Response } from "express";
import { crearSignoVital } from "../../app/useCase/signoVital/crearSignoVital.useCase";
import { actualizarSignoVital } from "../../app/useCase/signoVital/actualizarSignoVital.useCase";
import { eliminarSignoVitalCasoUso } from "../../app/useCase/signoVital/eliminarSignoVital.useCase";
import { obtenerUnSignoVitalCasoUso } from "../../app/useCase/signoVital/obtenerSignoVital.useCase";
import { obtenerSignosVitalesCasoUso } from "../../app/useCase/signoVital/obtenerSignosVitales.caseUse";

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

            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }

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

            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }
            // const data=req.body

            const eliminarSignoVital=await eliminarSignoVitalCasoUso(codigo)

            if (!eliminarSignoVital) {
                return res.status(404).json({
                    message: `El signo vital: ${codigo} no existe`
                })
            }

            return res.status(200).json(eliminarSignoVital)
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

            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }
            // const data=req.body

            const obtenerSigno=await obtenerUnSignoVitalCasoUso(codigo)

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

            const obtenerSignos=await obtenerSignosVitalesCasoUso()
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