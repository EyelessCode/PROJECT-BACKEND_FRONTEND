import { Paciente } from "@prisma/client";
import { IPaciente } from "../../domain/interface/paciente/paciente.interface";
// import { prisma } from "../../../infrastructure/data/prisma.service";
import { PacienteRepositorio } from "../../infrastructure/repository/paciente.repository";

const repositorio=new PacienteRepositorio()

const actualizarPaciente=async(codigo:number,data:IPaciente):Promise<Paciente|null>=>{
    try {

        return await repositorio.actualizarPaciente(codigo,data)
    } catch (error) {
        console.error(`Error al actualizar un Paciente: ${error}`);
        throw new Error('No se pudo actualizar un Paciente')
    }
}

const crearPaciente=async(data:Paciente):Promise<Paciente>=>{
    try {

        return await repositorio.crearPaciente(data)
    } catch (error) {
        console.error(`Error al crear un nuevo Paciente: ${error}`);
        throw new Error('No se pudo crear un nuevo Paciente')
    }
}

const eliminarPaciente=async(codigo:number):Promise<Paciente|null>=>{
    try {
    
        return await repositorio.eliminarPaciente(codigo)
    } catch (error) {
        console.error(`Error al tratar de eliminar un Paciente con el código: ${codigo}`);
        throw new Error(`No se pudo eliminar un Paciente con el código: ${codigo}`);
    }
}

const obtenerPaciente=async(codigo:number):Promise<Paciente|null>=>{
    try {

        return repositorio.obtenerPaciente(codigo)
    } catch (error) {
        console.error(`Error al obtener un Paciente con el código: ${codigo}`);
        throw new Error(`No se pudo obtener un Paciente con el código: ${codigo}`);
    }
}

const obtenerPacientes=async():Promise<Paciente[]>=>{
    try {
        return repositorio.obtenerPacientes()
    } catch (error) {
        console.error(`Error al obtener todos los Pacientes, ${error}`);
        throw new Error(`No se pudo obtener los Pacientes`)
    }
}

export {actualizarPaciente,crearPaciente,eliminarPaciente,
    obtenerPaciente,obtenerPacientes
}