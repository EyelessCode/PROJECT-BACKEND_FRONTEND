import { SignosPacientes } from "@prisma/client"

export interface ISignoPacienteRepositorio{
    crearSignoPaciente(data:SignosPacientes):Promise<SignosPacientes>
    obtenerSignosPacientes():Promise<SignosPacientes[]>
}

export interface ISignoPacienteCasoUso{
    registrarSignoPaciente(data:SignosPacientes):Promise<SignosPacientes>
    obtenerSignosPacientes():Promise<SignosPacientes[]>

}