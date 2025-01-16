import { ISignoVital } from '../signoVital/signoVital.interface';

export interface ISignoVitalRepositorio{
    obtenerSignos():ISignoVital[]
    obtenerUnSigno(codigo:number):ISignoVital|undefined
    crearSigno(signo:ISignoVital):ISignoVital
    actualizarSigno(codigo:number,signo:ISignoVital):ISignoVital|undefined
    eliminarSigno(codigo:number):boolean
}
