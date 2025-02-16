import { Request, Response } from "express";
import { logger } from "../log/logger.service";
import { EnfermeraCasoUso } from "../../app/useCase/enfermera.useCase";
import { EnfermeraRepositorio } from "../repository/enfermera.repository";
// import { actualizarEnfermeras, crearEnfermera, eliminarEnfermera, obtenerEnfermera, obtenerEnfermeras } from "../../app/useCase/enfermera.useCase";

export class EnfermeraController{
    private casoUso:EnfermeraCasoUso

    constructor() {
        const repositorio=new EnfermeraRepositorio()
        this.casoUso=new EnfermeraCasoUso(repositorio)
    }

    async controladorCrearEnfermera(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const crear=await this.casoUso.crearEnfermera(data)
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

            
            const eliminar=await this.casoUso.eliminarEnfermera(codigo)
            
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

            const actualizar=await this.casoUso.actualizarEnfermera(codigo,data)

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
            
            

            const obtener=await this.casoUso.obtenerEnfermera(codigo)

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
            const obtener=await this.casoUso.obtenerEnfermeras()

            // logger.info(`\nLISTADO DE PACIENTES\n`)

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