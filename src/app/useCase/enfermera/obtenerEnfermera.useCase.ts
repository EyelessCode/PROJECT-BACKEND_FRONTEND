import { Enfermera } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerEnfermera=async(codigo:number):Promise<Enfermera|null>=>{
    try {
        const existe=await prisma.enfermera.findUnique({
            where:{
                codigo:codigo
            }
        })

        if (!existe) {
            console.log(`No existe una Enfermera con el código ${codigo}`);
            return null
        }

        return existe
    } catch (error) {
        console.error(`Error al obtener una Enfermera: ${error}`);
        throw new Error('No se pudo obtener una Enfermera')
    }
}

export {obtenerEnfermera}