import { IPaciente } from "./paciente.interface"

export interface IPacienteRepositorio{
    obtenerSignos():IPaciente[]
    obtenerUnSigno(codigo:number):IPaciente|undefined
    crearSigno(signo:IPaciente):IPaciente
    actualizarSigno(codigo:number,signo:IPaciente):IPaciente|undefined
    eliminarSigno(codigo:number):boolean
}
