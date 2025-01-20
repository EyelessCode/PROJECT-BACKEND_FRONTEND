import { SignoVital } from "@prisma/client";
import { SignoVitalRepositorio } from "../../infrastructure/repository/signoVital.repository";

const repositorio=new SignoVitalRepositorio()

const actualizarSignoVital=async(codigo:number,data:SignoVital):Promise<SignoVital|null>=>{
    try {
        
        return await repositorio.actualizarSignoVital(codigo,data)
    } catch (error) {
        console.error(`Error al actualizar el signo vital ${error}`);
        throw new Error(`No se pudo actualizar el signo vital`);
    }
}

const crearSignoVital=async(data:SignoVital):Promise<SignoVital>=>{
    try {

        return await repositorio.crearSignoVital(data)
    } catch (error) {
        console.error(`Error al crear un nuevo Signo Vital: ${error}`);
        throw new Error('No se pudo crear un nuevo Signo Vital')
    }
}

const eliminarSignoVital=async(codigo:number):Promise<SignoVital|null>=>{
    try {

        return await repositorio.eliminarSignoVital(codigo)
    } catch (error) {
        console.error(`Error al tratar de eliminar un Signo Vital`);
        throw new Error(`No se pudo eliminar un Signo Vital`)
    }
}

const obtenerSignosVitales=async():Promise<SignoVital[]>=>{
    try {
        // const obtenerSignosVitales=await prisma.signoVital.findMany()

        return await repositorio.obtenerSignoVitales()
    } catch (error) {
        console.error(`Error al obtener todos los Signos Vitales, ${error}`);
        throw new Error(`No se pudo obtener los Signos Vitales`)
    }
}

const obtenerUnSignoVital=async(codigo:number):Promise<SignoVital|null>=>{
    try {
    
        return await repositorio.obtenerSignoVital(codigo)
    } catch (error) {
        console.error(`Error al obtener un Signo Vital, ${error}`);
        throw new Error(`No se pudo obtener un Signo Vital`)
    }
}

export {actualizarSignoVital}