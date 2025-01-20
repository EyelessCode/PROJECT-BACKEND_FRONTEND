import { TomaSignos } from "@prisma/client";
import { PacienteRepositorio } from "../../infrastructure/repository/paciente.repository";
import { CentroMedicoRepositorio } from "../../infrastructure/repository/centroMedico.repository";
import { EnfermeraRepositorio } from "../../infrastructure/repository/enfermera.repository";

const repositorioPaciente=new PacienteRepositorio()
const repositorioCentroMedico=new CentroMedicoRepositorio()
const repositorioEnfermera=new EnfermeraRepositorio()

const crearTomaSignos=async(data:TomaSignos):Promise<TomaSignos>=>{
    const paciente=await repositorioPaciente.obtenerPaciente(data.pacienteId)
    if(!paciente) throw new Error(`El paciente con ID ${data.pacienteId} no existe`)

    // return crearTomaSignos()
}