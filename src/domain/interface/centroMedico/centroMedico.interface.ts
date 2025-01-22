import { CentroMedico } from "@prisma/client"

export interface ICentroMedico{
    // codigo:number
    nombre:string
    direccion:string
}

export interface ICentroMedicoRepositorio{
    crearCentroMedico(data:CentroMedico):Promise<CentroMedico>
    obtenerCentroMedico(codigo:number):Promise<CentroMedico|null>
    obtenerCentrosMedicos():Promise<CentroMedico[]>
    actualizarCentroMedico(codigo:number,data:Partial<CentroMedico>):Promise<CentroMedico|null>
    eliminarCentroMedico(codigo:number):Promise<CentroMedico|null>
}

export interface ICentroMedicoCasoUso{
    actualizarCentroMedico(codigo:number,data:CentroMedico):Promise<CentroMedico|null>
    crearCentroMedico(data:CentroMedico):Promise<CentroMedico>
    eliminarCentroMedico(codigo:number):Promise<CentroMedico|null>
    obtenerCentroMedico(codigo:number):Promise<CentroMedico|null>
    obtenerCentrosMedicos():Promise<CentroMedico[]>
}