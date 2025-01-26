import { Request, Response } from "express"
import { TomaSignoCasoUso } from "../../app/useCase/tomaSigno.useCase"
import { CentroMedicoRepositorio } from "../repository/centroMedico.repository"
import { EnfermeraRepositorio } from "../repository/enfermera.repository"
import { PacienteRepositorio } from "../repository/paciente.repository"
import { TomaSignosRepositorio } from "../repository/tomaSignos.repository"

const casoUso=new TomaSignoCasoUso(
    new PacienteRepositorio(),
    new CentroMedicoRepositorio(),
    new EnfermeraRepositorio(),
    new TomaSignosRepositorio()
)

export class TomaSignoController{
    async controladorRegistrarTomaSigno(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const tomaSigno=await casoUso.registrarTomaSigno(data)
            return res.status(201).json(tomaSigno)
        } catch (error) {
            console.error(error)
            return res.status(400).json({ message: error })
        }
    }

    async controladorObtenerTomaSignos(req: Request, res: Response): Promise<any> {
        try {
            const tomaSignos = await casoUso.obtenerTomaSignos();
            if (!tomaSignos.length) {
                return res.status(404).json({ message: 'No se encontraron registros de toma de signos.' });
            }
            return res.status(200).json(tomaSignos);
        } catch (error) {
            console.error('Error al obtener toma de signos:', error);
            return res.status(500).json({ message: 'Error interno del servidor.' });
        }
    }
    
}