import { IPaciente } from "./paciente.interface"

export interface IPacienteRepositorio{
    obtenerPaciente():IPaciente[]
    obtenerUnPaciente(codigo:number):IPaciente|undefined
    crearPaciente(paciente:IPaciente):IPaciente
    actualizarPaciente(codigo:number,paciente:IPaciente):IPaciente|undefined
    eliminarPaciente(codigo:number):boolean
}
