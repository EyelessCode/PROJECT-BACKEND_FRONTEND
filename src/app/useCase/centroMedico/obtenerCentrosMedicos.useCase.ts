import { CentroMedico } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerCentrosMedicos=async():Promise<CentroMedico[]>=>{
    try {
        const existen=await prisma.centroMedico.findMany()

        return existen
    } catch (error) {
        console.error(`Error al obtener los Centros Médicos: ${error}`);
        throw new Error('No se pudo obtener los Centros Médicos')
    }
}

export {obtenerCentrosMedicos}