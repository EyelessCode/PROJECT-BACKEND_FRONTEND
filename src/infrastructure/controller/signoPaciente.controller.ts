import { Request, Response } from "express";
import { SignoPacienteCasoUso } from "../../app/useCase/signoPaciente.useCase";
import { SignoPacienteRepositorio } from "../repository/signoPaciente.repository";
import { TipoSignoRepositorio } from "../repository/tipoSigno.repository";
import { TomaSignosRepositorio } from "../repository/tomaSignos.repository";

const casoUso=new SignoPacienteCasoUso(
    new TomaSignosRepositorio(),
    new TipoSignoRepositorio(),
    new SignoPacienteRepositorio()
)

export class SignoPacienteController{
    async controladorRegistrarSignoPaciente(req:Request,res:Response):Promise<any>{
        try {
            let data=req.body

            if (!Array.isArray(data)) {
                data=[data]
            }

            if (data.length===0) {
                return res.status(400).json({
                    message:"Debe de al menos enviar un signo de paciente"
                })
            }

            const resultado=await casoUso.registrarSignoPaciente(data)
            return res.status(201).json(resultado)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(400).json({
                message:"Error al crear Signo Paciente",
                error: error,
            })
        }
    }

    async controladorObtenerSignosPacientes(req:Request,res:Response):Promise<any>{
        try {
            const resultado=await casoUso.obtenerSignosPacientes()

            return res.status(200).json(resultado)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(400).json({
                message:"Error al obtener los Signos Pacientes",
                error: error,
            })
        }
    }
}