import { SignosPacientes } from "@prisma/client"

export interface ISignoPacienteRepositorio{
    crearSignoPaciente(data:SignosPacientes):Promise<SignosPacientes>
}

export interface ISignoPacienteCasoUso{
    registrarSignoPaciente(data:SignosPacientes):Promise<SignosPacientes>
    validarTomaSigno(codigo:number):Promise<void>
    validarTipoSigno(codigo:number,valor:number):Promise<void>
}