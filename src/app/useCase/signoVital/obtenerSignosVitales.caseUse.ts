import { SignoVital } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerSignosVitalesCasoUso=async():Promise<SignoVital[]>=>{
    try {
        const obtenerSignosVitales=await prisma.signoVital.findMany()

        return obtenerSignosVitales
    } catch (error) {
        console.error(`Error al obtener todos los Signos Vitales, ${error}`);
        throw new Error(`No se pudo obtener los Signos Vitales`)
    }
}

export {obtenerSignosVitalesCasoUso}