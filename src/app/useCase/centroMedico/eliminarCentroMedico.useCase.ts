import { CentroMedico } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const eliminarCentroMedico=async(codigo:number):Promise<CentroMedico|null>=>{
    try {
        const existe=await prisma.centroMedico.findUnique({
            where:{
                codigo:codigo
            }
        })

        if (!existe) {
            console.log(`No existe un Centro Médico con el código ${codigo}`);
            return null
        }

        const eliminar=await prisma.centroMedico.delete({
            where:{
                codigo:codigo
            }
        })

        return eliminar
    } catch (error) {
        console.error(`Error al eliminar Centro Médico: ${error}`);
        throw new Error('No se pudo eliminar un Centro Médico')
    }
}

export {eliminarCentroMedico}