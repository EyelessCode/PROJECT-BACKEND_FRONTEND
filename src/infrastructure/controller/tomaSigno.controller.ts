import { Request, Response } from "express"
import { TomaSignoCasoUso } from "../../app/useCase/tomaSigno.useCase"
import { CentroMedicoRepositorio } from "../repository/centroMedico.repository"
import { EnfermeraRepositorio } from "../repository/enfermera.repository"
import { PacienteRepositorio } from "../repository/paciente.repository"
import { TomaSignosRepositorio } from "../repository/tomaSignos.repository"

const pacienteRepositorio=new PacienteRepositorio()
const centroMedicoRepositorio=new CentroMedicoRepositorio()
const enfermeraRepositorio=new EnfermeraRepositorio()
const tomaSignoRepositorio=new TomaSignosRepositorio()
const tomaSignoCasoUso=new TomaSignoCasoUso(pacienteRepositorio,centroMedicoRepositorio,
    enfermeraRepositorio,tomaSignoRepositorio
)

export class TomaSignoController{
    async registrarTomaSigno(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const tomaSigno=await tomaSignoCasoUso.registrarTomaSigno(data)
            return res.status(201).json(tomaSigno)
        } catch (error) {
            console.error(error)
            return res.status(400).json({ message: error })
        }
    }
}