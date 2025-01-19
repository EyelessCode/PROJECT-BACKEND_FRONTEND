import { SignoVital } from "@prisma/client"

export interface IPacienteRepositorio{
    crearSignoVital(data:SignoVital):Promise<SignoVital>
    obtenerSignoVital(codigo:number):Promise<SignoVital|null>
    obtenerSignoVitales():Promise<SignoVital[]>
    actualizarSignoVital(codigo:number,data:Partial<SignoVital>):Promise<SignoVital|null>
    eliminarSignoVital(codigo:number):Promise<SignoVital|null>
}