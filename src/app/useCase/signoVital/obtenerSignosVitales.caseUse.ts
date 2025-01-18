import { SignoVital } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerSignosVitalesCasoUso=async():Promise<SignoVital[]|null>=>{
    try {
        const obtenerSignosVitales=await prisma.signoVital.findMany()

        if (!obtenerSignosVitales) {
            console.log(`No existen Signos Vitales`);
            return null
        }

        return obtenerSignosVitales
    } catch (error) {
        console.error(`Error al obtener todos los Signos Vitales, ${error}`);
        throw new Error(`No se pudo obtener los Signos Vitales`)
    }
}

export {obtenerSignosVitalesCasoUso}