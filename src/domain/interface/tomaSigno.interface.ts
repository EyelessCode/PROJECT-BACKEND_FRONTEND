import { TomaSignos } from "@prisma/client";

export interface ITomaSignoRepositorio{
    crearTomaSigno(data:TomaSignos):Promise<TomaSignos>
    obtenerTomaSigno(codigo:number):Promise<TomaSignos|null>
    obtenerTomaSignos():Promise<TomaSignos[]>
}

export interface ITomaSignoCasoUso{
    registrarTomaSigno(data:TomaSignos):Promise<TomaSignos>
    // obtenerTomaSigno(codigo:number):Promise<TomaSignos|null>
    validarPaciente(codigo:number):Promise<void>
    validarEnfermera(codigo:number):Promise<void>
    validarCentroMedico(codigo:number):Promise<void>
    obtenerTomaSignos():Promise<TomaSignos[]>
}