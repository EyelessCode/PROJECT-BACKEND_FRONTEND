import { Enfermera } from "@prisma/client"

export interface IEnfermera{
    // codigo:number
    cedula:string
    nombres:string
}

export interface IEnfermeraRepositorio{
    crearEnfermera(data:Enfermera):Promise<Enfermera>
    obtenerEnfermera(codigo:number):Promise<Enfermera|null>
    obtenerEnfermeras():Promise<Enfermera[]>
    actualizarEnfermera(codigo:number,data:Partial<Enfermera>):Promise<Enfermera|null>
    eliminarEnfermera(codigo:number):Promise<Enfermera|null>
}