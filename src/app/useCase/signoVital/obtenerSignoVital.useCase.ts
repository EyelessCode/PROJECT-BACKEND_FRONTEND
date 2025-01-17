import { SignoVital } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerUnSignoVitalCasoUso=async(codigo:number):Promise<SignoVital|null>=>{
    try {
        const exiteSignoVital=await prisma.signoVital.findUnique({
            where:{
                codigo:codigo
            }
        })
    
        if (!exiteSignoVital) {
            console.log(`Signo Vital no encontrado con el código: ${codigo}`);
            return null;
        }
    
        return exiteSignoVital
    } catch (error) {
        console.error(`Error al obtener un Signo Vital, ${error}`);
        throw new Error(`No se pudo obtener un Signo Vital`)
    }
}

export {obtenerUnSignoVitalCasoUso}