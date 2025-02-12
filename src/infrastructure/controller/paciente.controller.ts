import { Request, Response } from "express";

import { logger } from "../log/logger.service";
import { PacienteCasoUso } from "../../app/useCase/paciente.useCase";
import { PacienteRepositorio } from "../repository/paciente.repository";
// import { actualizarPaciente, crearPaciente, eliminarPaciente, obtenerPaciente, obtenerPacientes } from "../../app/useCase/paciente.useCase";

export class PacienteController {
    private casoUso:PacienteCasoUso
    constructor() {
        const repositorio=new PacienteRepositorio()
        this.casoUso=new PacienteCasoUso(repositorio)
    }
    async controladorCrearPaciente(req: Request, res: Response): Promise<any> {
        try {
            const data = req.body
            const nuevoPaciente = await this.casoUso.crearPaciente(data)
            logger.info(`PACIENTE CREADO ${nuevoPaciente.cedula}`)
            return res.status(201).json(nuevoPaciente)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL CREAR AL PACIENTE. ${error}`)
            return res.status(500).json({
                message: "Error al crear un Paciente",
                error: error,
            })
        }
    }

    async controladorActualizarPaciente(req: Request, res: Response): Promise<any> {
        try {
            const codigo = parseInt(req.params.codigo)
            console.log("Código recibido en la URL:", codigo);
            if (isNaN(codigo) || codigo <= 0) {
                return res.status(400).json({ message: "Código inválido" });
            }
            
            
            const data = req.body
            console.log("Datos recibidos para actualización:", data);


            const pacienteActualizado = await this.casoUso.actualizarPaciente(codigo, data)

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
                message: "Error al actualizar el Paciente",
                error: error

            })
        }
    }

    async controladorEliminarPaciente(req: Request, res: Response): Promise<any> {
        try {
            const codigo = parseInt(req.params.codigo)


            // const data=req.body

            const pacienteEliminado = await this.casoUso.eliminarPaciente(codigo)

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
                message: "Error al eliminar el Paciente",
                error: error

            })
        }
    }

    async controladorObtenerPaciente(req: Request, res: Response): Promise<any> {
        try {
            const codigo = parseInt(req.params.codigo)


            // const data=req.body

            const paciente = await this.casoUso.obtenerPaciente(codigo)

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
                message: "Error al obtener el Paciente",
                error: error

            })
        }
    }

    async controladorObtenerPacientes(req: Request, res: Response): Promise<any> {
        try {
            // const data=req.body

            const pacientes = await this.casoUso.obtenerPacientes()

            // logger.info(`\nLISTADO DE PACIENTES\n`)
            return res.status(200).json(pacientes)
        } catch (error) {
            console.error(error);
            logger.error(`ERROR AL OBTENER LOS PACIENTES. ${error}`)
            return res.status(500).json({
                message: "Error al obtener los Pacientes",
                error: error

            })
        }
    }
}