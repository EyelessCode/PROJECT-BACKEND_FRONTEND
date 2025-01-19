import { Request, Response } from "express";
import { crearPaciente } from "../../app/useCase/paciente/crearPaciente.useCase";
import { actualizarPaciente } from "../../app/useCase/paciente/actualizarPaciente.useCase";
import { eliminarPaciente } from "../../app/useCase/paciente/eliminarPaciente.useCase";
import { obtenerPaciente } from "../../app/useCase/paciente/obtenerPaciente.useCase";
import { obtenerPacientes } from "../../app/useCase/paciente/obtenerPacientes.useCase";

export class PacienteController{
    async controladorCrearPaciente(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const nuevoPaciente=await crearPaciente(data)
            return res.status(201).json(nuevoPaciente)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al crear un Paciente",
                error: error
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

            return res.status(200).json(pacienteActualizado)
        } catch (error) {
            console.error(error);
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

            return res.status(200).json(pacienteEliminado)
        } catch (error) {
            console.error(error);
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

            return res.status(200).json(paciente)
        } catch (error) {
            console.error(error);
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
            return res.status(200).json(pacientes)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al obtener los Pacientes",
                error: error

            })
        }
    }
}