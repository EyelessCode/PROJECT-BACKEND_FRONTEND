import { TipoSigno } from "@prisma/client"

export interface ITipoSigno{
    // codigo:number
    descripcion:string
    unidad:string
    valorMinimo:number
    valorMaximo:number
}

export interface ITipoSignoRepositorio{
    obtenerTipoSigno(codigo:number):Promise<TipoSigno|null>
    obtenerTiposSignos():Promise<TipoSigno[]>
    actualizarTipoSigno(codigo:number,data:Partial<TipoSigno>):Promise<TipoSigno|null>
    eliminarTipoSigno(codigo:number):Promise<TipoSigno|null>
}

export interface ITipoSignoCasoUso{
    actualizarTipoSigno(codigo:number,data:Partial<TipoSigno>):Promise<TipoSigno|null>
    crearTipoSigno(data:TipoSigno):Promise<TipoSigno>
    eliminarTipoSigno(codigo:number):Promise<TipoSigno|null>
    obtenerTipoSigno(codigo:number):Promise<TipoSigno|null>
    obtenerTiposSignos():Promise<TipoSigno[]>
}