import { Enfermera } from "@prisma/client";
// import { IEnfermera } from "../../../domain/interface/enfermera/enfermera.interface";
import { EnfermeraRepositorio } from "../../infrastructure/repository/enfermera.repository";
import { IEnfermeraCasoUso } from "../../domain/interface/enfermera.interface";
// import { prisma } from "../../../infrastructure/data/prisma.service";

export class EnfermeraCasoUso implements IEnfermeraCasoUso{
    constructor(private repositorio:EnfermeraRepositorio){}

    async actualizarEnfermera(codigo:number,data:Partial<Enfermera>):Promise<Enfermera|null>{
        try {
    
            return await this.repositorio.actualizarEnfermera(codigo,data)
        } catch (error) {
            console.error(`Error al actualizar una Enfermera: ${error}`);
            throw new Error('No se pudo actualizar una Enfermera')
        }
    }
    
    async crearEnfermera(data:Enfermera):Promise<Enfermera>{
        try {
    
            return await this.repositorio.crearEnfermera(data)
        } catch (error) {
            console.error(`Error al crear una Enfermera: ${error}`);
            throw new Error('No se pudo crear una nuevo Enfermera')
        }
    }
    
    async eliminarEnfermera(codigo:number):Promise<Enfermera|null>{
        try {
    
            return await this.repositorio.eliminarEnfermera(codigo)
        } catch (error) {
            console.error(`Error al eliminar una Enfermera: ${error}`);
            throw new Error('No se pudo eliminar una Enfermera')
        }
    }
    
    async obtenerEnfermera(codigo:number):Promise<Enfermera|null>{
        try {
    
            return await this.repositorio.obtenerEnfermera(codigo)
        } catch (error) {
            console.error(`Error al obtener una Enfermera: ${error}`);
            throw new Error('No se pudo obtener una Enfermera')
        }
    }
    
    async obtenerEnfermeras():Promise<Enfermera[]>{
        try {
            return await this.repositorio.obtenerEnfermeras()
        } catch (error) {
            console.error(`Error al obtener las Enfermeras: ${error}`);
            throw new Error('No se pudo obtener las Enfermeras')
        }
    }
}

