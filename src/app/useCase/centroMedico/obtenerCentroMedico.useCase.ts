import { CentroMedico } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerCentroMedico=async(codigo:number):Promise<CentroMedico|null>=>{
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

        return existe
    } catch (error) {
        console.error(`Error al obtener un Centro Médico: ${error}`);
        throw new Error('No se pudo obtener un Centro Médico')
    }
}

export {obtenerCentroMedico}