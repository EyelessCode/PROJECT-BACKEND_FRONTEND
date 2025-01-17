import { SignoVital } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const eliminarSignoVitalCasoUso=async(codigo:number):Promise<SignoVital|null>=>{
    try {
        const existeSignoVital=await prisma.signoVital.findUnique({
            where:{
                codigo:codigo
            }
        })

        if (!existeSignoVital) {
            console.log(`Signo Vital con el código ${codigo} no existe!`);
            return null
        }

        const eliminarSignoVital=await prisma.signoVital.delete({
            where:{
                codigo:codigo
            },
        })

        return eliminarSignoVital
    } catch (error) {
        console.error(`Error al tratar de eliminar un Signo Vital`);
        throw new Error(`No se pudo eliminar un Signo Vital`)
    }
}

export {eliminarSignoVitalCasoUso}