import { Enfermera } from "@prisma/client";
// import { IEnfermera } from "../../../domain/interface/enfermera/enfermera.interface";
import { EnfermeraRepositorio } from "../../infrastructure/repository/enfermera.repository";
// import { prisma } from "../../../infrastructure/data/prisma.service";

const repositorio=new EnfermeraRepositorio()

const actualizarEnfermeras=async(codigo:number,data:Enfermera):Promise<Enfermera|null>=>{
    try {

        return await repositorio.actualizarEnfermera(codigo,data)
    } catch (error) {
        console.error(`Error al actualizar una Enfermera: ${error}`);
        throw new Error('No se pudo actualizar una Enfermera')
    }
}

const crearEnfermera=async(data:Enfermera):Promise<Enfermera>=>{
    try {

        return await repositorio.crearEnfermera(data)
    } catch (error) {
        console.error(`Error al crear una Enfermera: ${error}`);
        throw new Error('No se pudo crear una nuevo Enfermera')
    }
}

const eliminarEnfermera=async(codigo:number):Promise<Enfermera|null>=>{
    try {

        return await repositorio.eliminarEnfermera(codigo)
    } catch (error) {
        console.error(`Error al eliminar una Enfermera: ${error}`);
        throw new Error('No se pudo eliminar una Enfermera')
    }
}

export {actualizarEnfermeras}