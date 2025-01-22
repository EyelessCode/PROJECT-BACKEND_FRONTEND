import { SignoVital } from "@prisma/client";
import { SignoVitalRepositorio } from "../../infrastructure/repository/signoVital.repository";
import { ISignoVitalCasoUso } from "../../domain/interface/signoVital/signoVital.interface";

export class SignoVitalCasoUso implements ISignoVitalCasoUso{
    constructor(private repositorio:SignoVitalRepositorio) {
        
    }
    async obtenerSignoVital(codigo: number): Promise<SignoVital | null> {
        // throw new Error("Method not implemented.");
        try {
        
            return await this.repositorio.obtenerSignoVital(codigo)
        } catch (error) {
            console.error(`Error al obtener un Signo Vital, ${error}`);
            throw new Error(`No se pudo obtener un Signo Vital`)
        }
    }

    async actualizarSignoVital(codigo:number,data:Partial<SignoVital>):Promise<SignoVital|null>{
        try {
            
            return await this.repositorio.actualizarSignoVital(codigo,data)
        } catch (error) {
            console.error(`Error al actualizar el signo vital ${error}`);
            throw new Error(`No se pudo actualizar el signo vital`);
        }
    }
    
    async crearSignoVital(data:SignoVital):Promise<SignoVital>{
        try {
    
            return await this.repositorio.crearSignoVital(data)
        } catch (error) {
            console.error(`Error al crear un nuevo Signo Vital: ${error}`);
            throw new Error('No se pudo crear un nuevo Signo Vital')
        }
    }
    
    async eliminarSignoVital(codigo:number):Promise<SignoVital|null>{
        try {
    
            return await this.repositorio.eliminarSignoVital(codigo)
        } catch (error) {
            console.error(`Error al tratar de eliminar un Signo Vital`);
            throw new Error(`No se pudo eliminar un Signo Vital`)
        }
    }
    
    async obtenerSignosVitales():Promise<SignoVital[]>{
        try {
            // const obtenerSignosVitales=await prisma.signoVital.findMany()
    
            return await this.repositorio.obtenerSignoVitales()
        } catch (error) {
            console.error(`Error al obtener todos los Signos Vitales, ${error}`);
            throw new Error(`No se pudo obtener los Signos Vitales`)
        }
    }
}


