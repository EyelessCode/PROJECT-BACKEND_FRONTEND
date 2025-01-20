import { TomaSignos } from "@prisma/client";

export interface ITomaSignosRepositorio{
    crearTomaSigno(data:TomaSignos):Promise<TomaSignos>
    obtenerTomaSigno(codigo:number):Promise<TomaSignos|null>
    obtenerTomaSignos():Promise<TomaSignos[]>
    actualizarTomaSigno(codigo:number,data:Partial<TomaSignos>):Promise<TomaSignos|null>
    eliminarTomaSigno(codigo:number):Promise<TomaSignos|null>
}