import { Request, Response } from "express";
import { crearPaciente } from "../../app/useCase/paciente/crearPaciente.useCase";
import { actualizarPaciente } from "../../app/useCase/paciente/actualizarPaciente.useCase";
import { eliminarPaciente } from "../../app/useCase/paciente/eliminarPaciente.useCase";
import { obtenerPaciente } from "../../app/useCase/paciente/obtenerPaciente.useCase";
import { obtenerPacientes } from "../../app/useCase/paciente/obtenerPacientes.useCase";
import { logger } from "../log/logger.service";

export class PacienteController{
    async controladorCrearPaciente(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const nuevoPaciente=await crearPaciente(data)
            logger.info(`PACIENTE CREADO ${nuevoPaciente.cedula}`)
            return res.status(201).json(nuevoPaciente)
        } catch (error) {
                console.error(error);
                logger.error(`ERROR AL CREAR AL PACIENTE. ${error}`)
                return res.status(500).json({
                    message:"Error al crear un Paciente",
                    error: error,
            })
        }
    }

    async controladorActualizarPaciente(req:Request,res:Response):Promise<any> {
        try {
            const codigo=parseInt(req.params.codigo)

            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }

            const data=req.body

            const pacienteActualizado=await actualizarPaciente(codigo,data)
            
            if (!pacienteActualizado) {
                return res.status(404).json({
                    message: `El Paciente: ${codigo} no existe`
                })
            }

            logger.info(`PACIENTE ACTUALIZADO ${pacienteActualizado.cedula}`)

            return res.status(200).json(pacienteActualizado)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL ACTUALIZAR AL PACIENTE. ${error}`)
            return res.status(500).json({
                message:"Error al actualizar el Paciente",
                error: error

            })
        }
    }

    async controladorEliminarPaciente(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)

            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }
            // const data=req.body

            const pacienteEliminado=await eliminarPaciente(codigo)

            if (!pacienteEliminado) {
                return res.status(404).json({
                    message: `El Paciente: ${codigo} no existe`
                })
            }

            logger.info(`PACIENTE ELIMINADO ${pacienteEliminado.cedula}`)

            return res.status(200).json(pacienteEliminado)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL ELIMINAR PACIENTE. ${error}`)
            return res.status(500).json({
                message:"Error al eliminar el Paciente",
                error: error

            })
        }
    }

    async controladorObtenerPaciente(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)

            if (isNaN(codigo)) {
                return res.status(400).json({
                    message: "El código no es un número"
                })
            }
            // const data=req.body

            const paciente=await obtenerPaciente(codigo)

            if (!paciente) {
                return res.status(404).json({
                    message: `El Paciente: ${codigo} no existe`
                })
            }

            logger.info(`PACIENTE FILTRADO ${paciente.cedula}`)

            return res.status(200).json(paciente)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL OBTENER PACIENTE. ${error}`)
            return res.status(500).json({
                message:"Error al obtener el Paciente",
                error: error

            })
        }
    }

    async controladorObtenerPacientes(req:Request,res:Response):Promise<any>{
        try {
            // const data=req.body

            const pacientes=await obtenerPacientes()

            logger.info(`\nLISTADO DE PACIENTES\n`)
            return res.status(200).json(pacientes)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL OBTENER LOS PACIENTES. ${error}`)
            return res.status(500).json({
                message:"Error al obtener los Pacientes",
                error: error

            })
        }
    }
}