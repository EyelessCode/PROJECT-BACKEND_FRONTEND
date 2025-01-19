import { Enfermera } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const eliminarEnfermera=async(codigo:number):Promise<Enfermera|null>=>{
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

        const eliminar=await prisma.enfermera.delete({
            where:{
                codigo:codigo
            }
        })

        return eliminar
    } catch (error) {
        console.error(`Error al eliminar una Enfermera: ${error}`);
        throw new Error('No se pudo eliminar una Enfermera')
    }
}

export {eliminarEnfermera}