import { Request, Response } from "express";
import { crearCentroMedico } from "../../app/useCase/centroMedico/crearCentroMedico.useCase";
import { eliminarCentroMedico } from "../../app/useCase/centroMedico/eliminarCentroMedico.useCase";
import { actualizarCentroMedico } from "../../app/useCase/centroMedico/actualizarCentroMedico.useCase";
import { obtenerCentroMedico } from "../../app/useCase/centroMedico/obtenerCentroMedico.useCase";
import { obtenerCentrosMedicos } from "../../app/useCase/centroMedico/obtenerCentrosMedicos.useCase";

export class CentroMedicoController{
    async controladorCrearCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const crear=await crearCentroMedico(data)

            return res.status(201).json(crear)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al crear un Centro Médico",
                error: error,
            })
        }
    }

    async controladorEliminarCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }
            // const data=req.body

            const eliminar=await eliminarCentroMedico(codigo)

            if (!eliminar) {
                return res.status(404).json({
                    message: `El Centro Médico: ${codigo} no existe`
                })
            }

            return res.status(200).json(eliminar)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al eliminar un Centro Médico",
                error: error,
            })
        }
    }

    async controladorActualizarCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }
            const data=req.body

            const actualizar=await actualizarCentroMedico(codigo,data)

            if (!actualizar) {
                return res.status(404).json({
                    message: `El Centro Médico: ${codigo} no existe`
                })
            }

            return res.status(200).json(actualizar)

        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al actualizar un Centro Médico",
                error: error,
            })
        }
    }

    async controladorObtenerCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }

            const obtener=await obtenerCentroMedico(codigo)

            if (!obtener) {
                return res.status(404).json({
                    message: `El Centro Médico: ${codigo} no existe`
                })
            }

            return res.status(200).json(obtener)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al obtener un Centro Médico",
                error: error,
            })
        }
    }

    async controladorObtenerCentrosMedicos(req:Request,res:Response):Promise<any>{
        try {
            const obtener=await obtenerCentrosMedicos()

            return res.status(200).json(obtener)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al obtener los Centros Médicos",
                error: error,
            })
        }
    }
}