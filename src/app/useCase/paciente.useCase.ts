import { Paciente } from "@prisma/client";
// import { IPaciente, IPacientecasoUso } from '../../domain/interface/paciente/paciente.interface';
// import { prisma } from "../../../infrastructure/data/prisma.service";
import { PacienteRepositorio } from '../../infrastructure/repository/paciente.repository';
import { IPacientecasoUso } from "../../domain/interface/paciente.interface";

export class PacienteCasoUso implements IPacientecasoUso{
    constructor(private repositorio:PacienteRepositorio) {
        
    }
    
    async actualizarPaciente(codigo:number,data:Partial<Paciente>):Promise<Paciente|null>{
        try {
    
            return await this.repositorio.actualizarPaciente(codigo,data)
        } catch (error) {
            console.error(`Error al actualizar un Paciente: ${error}`);
            throw new Error('No se pudo actualizar un Paciente')
        }
    }
    
    async crearPaciente(data:Paciente):Promise<Paciente>{
        try {
    
            return await this.repositorio.crearPaciente(data)
        } catch (error) {
            console.error(`Error al crear un nuevo Paciente: ${error}`);
            throw new Error('No se pudo crear un nuevo Paciente')
        }
    }
    
    async eliminarPaciente(codigo:number):Promise<Paciente|null>{
        try {
        
            return await this.repositorio.eliminarPaciente(codigo)
        } catch (error) {
            console.error(`Error al tratar de eliminar un Paciente con el código: ${codigo}`);
            throw new Error(`No se pudo eliminar un Paciente con el código: ${codigo}`);
        }
    }
    
    async obtenerPaciente(codigo:number):Promise<Paciente|null>{
        try {
    
            return await this.repositorio.obtenerPaciente(codigo)
        } catch (error) {
            console.error(`Error al obtener un Paciente con el código: ${codigo}`);
            throw new Error(`No se pudo obtener un Paciente con el código: ${codigo}`);
        }
    }
    
    async obtenerPacientes():Promise<Paciente[]>{
        try {
            return await this.repositorio.obtenerPacientes()
        } catch (error) {
            console.error(`Error al obtener todos los Pacientes, ${error}`);
            throw new Error(`No se pudo obtener los Pacientes`)
        }
    }
}


