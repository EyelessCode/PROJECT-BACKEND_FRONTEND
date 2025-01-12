import { ISignoVital } from "./signoVital.interface";

export interface IRepositorioSignoVital{
    obtenerTodo():ISignoVital[]|undefined
}
