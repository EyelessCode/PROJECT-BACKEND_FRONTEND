import { Enfermera } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerEnfermeras=async():Promise<Enfermera[]>=>{
    try {
        const existen=await prisma.enfermera.findMany()

        return existen
    } catch (error) {
        console.error(`Error al obtener las Enfermeras: ${error}`);
        throw new Error('No se pudo obtener las Enfermeras')
    }
}

export {obtenerEnfermeras}