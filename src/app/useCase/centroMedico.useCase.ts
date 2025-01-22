import { CentroMedico } from "@prisma/client";
// import { ICentroMedico } from "../../../domain/interface/centroMedico/centroMedico.interface";
// import { prisma } from "../../../infrastructure/data/prisma.service";
import { CentroMedicoRepositorio } from "../../infrastructure/repository/centroMedico.repository";
import { ICentroMedicoCasoUso } from "../../domain/interface/centroMedico/centroMedico.interface";

export class CentroMedicoCasoUso implements ICentroMedicoCasoUso{
    constructor(private repositorio:CentroMedicoRepositorio){}

    async actualizarCentroMedico(codigo:number,data:Partial<CentroMedico>):Promise<CentroMedico|null>{
        try {
    
            return await this.repositorio.actualizarCentroMedico(codigo,data)
        } catch (error) {
            console.error(`Error al actualizar Centro Médico: ${error}`);
            throw new Error('No se pudo actualizar un Centro Médico')
        }
    }
    
    async crearCentroMedico(data:CentroMedico):Promise<CentroMedico>{
        try {
            return await this.repositorio.crearCentroMedico(data)
        } catch (error) {
            console.error(`Error al crear un nuevo un Centro Médico: ${error}`);
            throw new Error('No se pudo crear un nuevo Centro Médico')
        }
    }
    
    async eliminarCentroMedico(codigo:number):Promise<CentroMedico|null>{
        try {
            return await this.repositorio.eliminarCentroMedico(codigo)
        } catch (error) {
            console.error(`Error al eliminar Centro Médico: ${error}`);
            throw new Error('No se pudo eliminar un Centro Médico')
        }
    }
    
    async obtenerCentroMedico(codigo:number):Promise<CentroMedico|null>{
        try {
            return await this.repositorio.obtenerCentroMedico(codigo)
        } catch (error) {
            console.error(`Error al obtener un Centro Médico: ${error}`);
            throw new Error('No se pudo obtener un Centro Médico')
        }
    }
    
    async obtenerCentrosMedicos():Promise<CentroMedico[]>{
        try {
            return await this.repositorio.obtenerCentrosMedicos()
        } catch (error) {
            console.error(`Error al obtener los Centros Médicos: ${error}`);
            throw new Error('No se pudo obtener los Centros Médicos')
        }
    }
}
