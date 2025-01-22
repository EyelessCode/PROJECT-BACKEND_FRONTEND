import { Request, Response } from "express";
import { SignoPacienteCasoUso } from "../../app/useCase/signoPaciente.useCase";
import { SignoPacienteRepositorio } from "../repository/signoPaciente.repository";
import { SignoVitalRepositorio } from "../repository/signoVital.repository";
import { TomaSignosRepositorio } from "../repository/tomaSignos.repository";

const casoUso=new SignoPacienteCasoUso(
    new TomaSignosRepositorio(),
    new SignoVitalRepositorio(),
    new SignoPacienteRepositorio()
)

export class SignoPacienteController{
    async registrarSignoPaciente(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const resultado=casoUso.registrarSignoPaciente(data)
            res.status(201).json(resultado)
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
}