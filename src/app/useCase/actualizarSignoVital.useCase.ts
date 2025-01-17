import { SignoVital } from "@prisma/client";
import { ISignoVital } from "../../domain/interface/signoVital/signoVital.interface";
import { prisma } from "../../infrastructure/data/prisma.service";

const actualizarSignoVital=async(codigo:number,data:ISignoVital):Promise<SignoVital|null>=>{
    try {
        const existeSignoVital=await prisma.signoVital.findUnique({
            where:{
                codigo:codigo
            }
        })

        if (!existeSignoVital) {
            console.log(`Signo Vital con el código ${codigo} no existe`);
            return null
        }

        const actualizarSignoVital=await prisma.signoVital.update({
            where:{
                codigo:codigo
            },
            data:{
                descripcion:data.descripcion,
                unidad:data.unidad,
                valorMinimo:data.valorMinimo,
                valorMaximo:data.valorMaximo
            }
        })

        return actualizarSignoVital
    } catch (error) {
        console.error(`Error al actualizar el signo vital ${error}`);
        throw new Error(`No se pudo actualizar el signo vital`);
    }
}

export {actualizarSignoVital}