import { Request, Response } from "express";
import { crearEnfermera } from "../../app/useCase/enfermera/crearEnfermera.useCase";
import { eliminarEnfermera } from "../../app/useCase/enfermera/eliminarEnfermera.useCase";
import { logger } from "../log/logger.service";
import { actualizarEnfermeras } from "../../app/useCase/enfermera/enfermera.useCase";
import { obtenerEnfermera } from "../../app/useCase/enfermera/obtenerEnfermera.useCase";
import { obtenerEnfermeras } from "../../app/useCase/enfermera/obtenerEnfermeras.useCase";

export class EnfermeraController{
    async controladorCrearEnfermera(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const crear=await crearEnfermera(data)
            logger.info(`ENFERMERA CREADA ${crear.cedula}`)

            return res.status(201).json(crear)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL CREAR AL ENFERMERA. ${error}`)
            return res.status(500).json({
                message:"Error al crear una Enfermera",
                error: error,
            })
        }
    }

    async controladorEliminarEnfermera(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            
            // const data=req.body

            
            const eliminar=await eliminarEnfermera(codigo)
            
            if (!eliminar) {
                return res.status(404).json({
                    message: `La Enfermera: ${codigo} no existe`
                })
            }
            
            logger.info(`ENFERMERA ELIMINADA ${eliminar.cedula}`)
            return res.status(200).json(eliminar)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL ELIMINAR ENFERMERA. ${error}`)
            return res.status(500).json({
                message:"Error al eliminar una Enfermera",
                error: error,
            })
        }
    }

    async controladorActualizarEnfermera(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            
            const data=req.body

            const actualizar=await actualizarEnfermeras(codigo,data)

            if (!actualizar) {
                return res.status(404).json({
                    message: `La Enfermera: ${codigo} no existe`
                })
            }
            logger.info(`ENFERMERA ACTUALIZADA ${actualizar.cedula}`)

            return res.status(200).json(actualizar)

        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL ACTUALIZAR ENFERMERA. ${error}`)
            return res.status(500).json({
                message:"Error al actualizar una Enfermera",
                error: error,
            })
        }
    }

    async controladorObtenerEnfermera(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            

            const obtener=await obtenerEnfermera(codigo)

            if (!obtener) {
                return res.status(404).json({
                    message: `La Enfermera: ${codigo} no existe`
                })
            }
            logger.info(`ENFERMERA OBTENIDA ${obtener.cedula}`)

            return res.status(200).json(obtener)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL OBTENER LA ENFERMERA. ${error}`)
            return res.status(500).json({
                message:"Error al obtener una Enfermera",
                error: error,
            })
        }
    }

    async controladorObtenerEnfermeras(req:Request,res:Response):Promise<any>{
        try {
            const obtener=await obtenerEnfermeras()

            logger.info(`\nLISTADO DE PACIENTES\n`)

            return res.status(200).json(obtener)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL OBTENER LAS ENFERMERAS. ${error}`)
            return res.status(500).json({
                message:"Error al obtener las Enfermeras",
                error: error,
            })
        }
    }
}