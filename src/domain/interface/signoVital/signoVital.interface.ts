import { SignoVital } from "@prisma/client"

export interface ISignoVital{
    // codigo:number
    descripcion:string
    unidad:string
    valorMinimo:number
    valorMaximo:number
}

export interface ISignoVitalRepositorio{
    crearSignoVital(data:SignoVital):Promise<SignoVital>
    obtenerSignoVital(codigo:number):Promise<SignoVital|null>
    obtenerSignoVitales():Promise<SignoVital[]>
    actualizarSignoVital(codigo:number,data:Partial<SignoVital>):Promise<SignoVital|null>
    eliminarSignoVital(codigo:number):Promise<SignoVital|null>
}

export interface ISignoVitalCasoUso{
    actualizarSignoVital(codigo:number,data:SignoVital):Promise<SignoVital|null>
    crearSignoVital(data:SignoVital):Promise<SignoVital>
    eliminarSignoVital(codigo:number):Promise<SignoVital|null>
    obtenerSignoVital(codigo:number):Promise<SignoVital|null>
    obtenerSignosVitales():Promise<SignoVital[]>
}