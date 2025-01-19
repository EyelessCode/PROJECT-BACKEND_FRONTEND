import { Paciente } from "@prisma/client";

export interface IPacienteRepositorio{
    crearPaciente(data:Paciente):Promise<Paciente>
    obtenerPaciente(codigo:number):Promise<Paciente|null>
    obtenerPacientes():Promise<Paciente[]>
    actualizarPaciente(codigo:number,data:Partial<Paciente>):Promise<Paciente|null>
    eliminarPaciente(codigo:number):Promise<Paciente|null>
}