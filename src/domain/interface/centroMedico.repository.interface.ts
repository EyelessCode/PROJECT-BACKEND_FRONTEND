import { ICentroMedico } from "./centroMedico.interface";

export interface ICentroMedicoRepositorio{
    obtenerCentrosMedicos():ICentroMedico[]
    // obtenerUnCentroMedico(codigo:number):ICentroMedico|undefined
}