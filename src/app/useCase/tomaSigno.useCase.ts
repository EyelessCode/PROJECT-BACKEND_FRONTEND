import { TomaSignos } from "@prisma/client";
import { PacienteRepositorio } from "../../infrastructure/repository/paciente.repository";
import { CentroMedicoRepositorio } from "../../infrastructure/repository/centroMedico.repository";
import { EnfermeraRepositorio } from "../../infrastructure/repository/enfermera.repository";
import { TomaSignosRepositorio } from "../../infrastructure/repository/tomaSignos.repository";

const repositorioPaciente=new PacienteRepositorio()
const repositorioCentroMedico=new CentroMedicoRepositorio()
const repositorioEnfermera=new EnfermeraRepositorio()
const repositorioTomaSignos=new TomaSignosRepositorio()

const crearTomaSigno=async(data:TomaSignos):Promise<TomaSignos>=>{
    const paciente=await repositorioPaciente.obtenerPaciente(data.pacienteId)
    if(!paciente) throw new Error(`El paciente con ID ${data.pacienteId} no existe`)

    const centroMedico=await repositorioCentroMedico.obtenerCentroMedico(data.centroMedicoId)
    if(!centroMedico) throw new Error(`El Centro Médico con ID ${data.centroMedicoId} no existe`)
    
    const enfermera=await repositorioEnfermera.obtenerEnfermera(data.enfermeraId)
    if(!enfermera) throw new Error(`La Enfermera con ID ${data.enfermeraId} no existe`)
    
    
    return await repositorioTomaSignos.crearTomaSigno(data)
}

const actualizarTomaSigno=async(codigo:number,data:TomaSignos):Promise<TomaSignos|null>=>{
    const paciente=await repositorioPaciente.obtenerPaciente(data.pacienteId)
    if(!paciente) throw new Error(`El paciente con ID ${data.pacienteId} no existe`)

    const centroMedico=await repositorioCentroMedico.obtenerCentroMedico(data.centroMedicoId)
    if(!centroMedico) throw new Error(`El Centro Médico con ID ${data.centroMedicoId} no existe`)
    
    const enfermera=await repositorioEnfermera.obtenerEnfermera(data.enfermeraId)
    if(!enfermera) throw new Error(`La Enfermera con ID ${data.enfermeraId} no existe`)

    return await repositorioTomaSignos.actualizarTomaSigno(codigo,data)
}

const eliminarTomaSigno=async(codigo:number,data:TomaSignos):Promise<TomaSignos|null>=>{
    const paciente=await repositorioPaciente.obtenerPaciente(data.pacienteId)
    if(!paciente) throw new Error(`El paciente con ID ${data.pacienteId} no existe`)

    const centroMedico=await repositorioCentroMedico.obtenerCentroMedico(data.centroMedicoId)
    if(!centroMedico) throw new Error(`El Centro Médico con ID ${data.centroMedicoId} no existe`)
    
    const enfermera=await repositorioEnfermera.obtenerEnfermera(data.enfermeraId)
    if(!enfermera) throw new Error(`La Enfermera con ID ${data.enfermeraId} no existe`)

    return await repositorioTomaSignos.eliminarTomaSigno(codigo)
}

const obtenerTomaSigno=async(codigo:number,data:TomaSignos):Promise<TomaSignos|null>=>{
    const paciente=await repositorioPaciente.obtenerPaciente(data.pacienteId)
    if(!paciente) throw new Error(`El paciente con ID ${data.pacienteId} no existe`)

    const centroMedico=await repositorioCentroMedico.obtenerCentroMedico(data.centroMedicoId)
    if(!centroMedico) throw new Error(`El Centro Médico con ID ${data.centroMedicoId} no existe`)
    
    const enfermera=await repositorioEnfermera.obtenerEnfermera(data.enfermeraId)
    if(!enfermera) throw new Error(`La Enfermera con ID ${data.enfermeraId} no existe`)

    return await repositorioTomaSignos.obtenerTomaSigno(codigo)
}

const obtenerTomasSignos=async(codigo:number,data:TomaSignos):Promise<TomaSignos[]>=>{
    const paciente=await repositorioPaciente.obtenerPaciente(data.pacienteId)
    if(!paciente) throw new Error(`El paciente con ID ${data.pacienteId} no existe`)

    const centroMedico=await repositorioCentroMedico.obtenerCentroMedico(data.centroMedicoId)
    if(!centroMedico) throw new Error(`El Centro Médico con ID ${data.centroMedicoId} no existe`)
    
    const enfermera=await repositorioEnfermera.obtenerEnfermera(data.enfermeraId)
    if(!enfermera) throw new Error(`La Enfermera con ID ${data.enfermeraId} no existe`)

    return await repositorioTomaSignos.obtenerTomaSignos()
}

export {crearTomaSigno,actualizarTomaSigno,eliminarTomaSigno,obtenerTomaSigno,obtenerTomasSignos}