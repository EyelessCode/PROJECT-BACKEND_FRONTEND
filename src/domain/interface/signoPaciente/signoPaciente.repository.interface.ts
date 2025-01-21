import { SignosPacientes } from "@prisma/client"

export interface ISignoPacienteRepositorio{
    crearSignoPaciente(data:SignosPacientes):Promise<SignosPacientes>
    obtenerSignoPaciente(codigo:number):Promise<SignosPacientes|null>
    obtenerSignosPacientes():Promise<SignosPacientes[]>
    actualizarSignoPaciente(codigo:number,data:Partial<SignosPacientes>):Promise<SignosPacientes|null>
    eliminarSignoPaciente(codigo:number):Promise<SignosPacientes|null>
}

export interface ISignoPacienteCasoUso{
    
}