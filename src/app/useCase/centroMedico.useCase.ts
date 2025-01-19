import { CentroMedico } from "@prisma/client";
// import { ICentroMedico } from "../../../domain/interface/centroMedico/centroMedico.interface";
// import { prisma } from "../../../infrastructure/data/prisma.service";
import { CentroMedicoRepositorio } from "../../infrastructure/repository/centroMedico.repository";

const repositorio=new CentroMedicoRepositorio()

const actualizarCentroMedico=async(codigo:number,data:CentroMedico):Promise<CentroMedico|null>=>{
    try {

        return await repositorio.actualizarCentroMedico(codigo,data)
    } catch (error) {
        console.error(`Error al actualizar Centro Médico: ${error}`);
        throw new Error('No se pudo actualizar un Centro Médico')
    }
}

const crearCentroMedico=async(data:CentroMedico):Promise<CentroMedico>=>{
    try {
        return await repositorio.crearCentroMedico(data)
    } catch (error) {
        console.error(`Error al crear un nuevo un Centro Médico: ${error}`);
        throw new Error('No se pudo crear un nuevo Centro Médico')
    }
}

const eliminarCentroMedico=async(codigo:number):Promise<CentroMedico|null>=>{
    try {
        return await repositorio.eliminarCentroMedico(codigo)
    } catch (error) {
        console.error(`Error al eliminar Centro Médico: ${error}`);
        throw new Error('No se pudo eliminar un Centro Médico')
    }
}

const obtenerCentroMedico=async(codigo:number):Promise<CentroMedico|null>=>{
    try {
        return await repositorio.obtenerCentroMedico(codigo)
    } catch (error) {
        console.error(`Error al obtener un Centro Médico: ${error}`);
        throw new Error('No se pudo obtener un Centro Médico')
    }
}

const obtenerCentrosMedicos=async():Promise<CentroMedico[]>=>{
    try {
        return await repositorio.obtenerCentrosMedicos()
    } catch (error) {
        console.error(`Error al obtener los Centros Médicos: ${error}`);
        throw new Error('No se pudo obtener los Centros Médicos')
    }
}

export {actualizarCentroMedico,crearCentroMedico,eliminarCentroMedico,
    obtenerCentroMedico,obtenerCentrosMedicos
}