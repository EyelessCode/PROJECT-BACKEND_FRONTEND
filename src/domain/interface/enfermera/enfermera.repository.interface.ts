import { IEnfermera } from "./enfermera.interface";

export interface IEnfermeraRepositorio{
    obtenerEnfermeras():IEnfermera[]
    obtenerEnfermera(codigo:number):IEnfermera|undefined
}