import { TipoSigno } from "@prisma/client";
import { TipoSignoRepositorio } from "../../infrastructure/repository/tipoSigno.repository";
import { ITipoSignoCasoUso } from "../../domain/interface/tipoSigno.interface";

export class TipoSignoCasoUso implements ITipoSignoCasoUso{
    constructor(private repositorio:TipoSignoRepositorio) {
        
    }
    async obtenerTipoSigno(codigo: number): Promise<TipoSigno | null> {
        // throw new Error("Method not implemented.");
        try {
        
            return await this.repositorio.obtenerTipoSigno(codigo)
        } catch (error) {
            console.error(`Error al obtener un Signo Vital, ${error}`);
            throw new Error(`No se pudo obtener un Signo Vital`)
        }
    }

    async actualizarTipoSigno(codigo:number,data:Partial<TipoSigno>):Promise<TipoSigno|null>{
        try {
            
            return await this.repositorio.actualizarTipoSigno(codigo,data)
        } catch (error) {
            console.error(`Error al actualizar el signo vital ${error}`);
            throw new Error(`No se pudo actualizar el signo vital`);
        }
    }
    
    async crearTipoSigno(data:TipoSigno):Promise<TipoSigno>{
        try {
    
            return await this.repositorio.crearTipoSigno(data)
        } catch (error) {
            console.error(`Error al crear un nuevo Signo Vital: ${error}`);
            throw new Error('No se pudo crear un nuevo Signo Vital')
        }
    }
    
    async eliminarTipoSigno(codigo:number):Promise<TipoSigno|null>{
        try {
    
            return await this.repositorio.eliminarTipoSigno(codigo)
        } catch (error) {
            console.error(`Error al tratar de eliminar un Signo Vital`);
            throw new Error(`No se pudo eliminar un Signo Vital`)
        }
    }
    
    async obtenerTiposSignos():Promise<TipoSigno[]>{
        try {
            // const obtenerTipoSignos=await prisma.TipoSigno.findMany()
    
            return await this.repositorio.obtenerTipoSignoes()
        } catch (error) {
            console.error(`Error al obtener todos los Signos Vitales, ${error}`);
            throw new Error(`No se pudo obtener los Signos Vitales`)
        }
    }
}


