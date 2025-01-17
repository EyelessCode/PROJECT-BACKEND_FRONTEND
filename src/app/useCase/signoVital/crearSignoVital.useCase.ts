import { SignoVital } from "@prisma/client"
import { prisma } from "../../../infrastructure/data/prisma.service"
import { ISignoVital } from "../../../domain/interface/signoVital/signoVital.interface"

/* export interface crearSignoVitalCasoUso{
    descripcion:string
    unidad:string
    valorMinimo:number
    valorMaximo:number
} */

const crearSignoVital=async(data:ISignoVital):Promise<SignoVital>=>{
    try {
        const nuevoSignoVital=await prisma.signoVital.create({
            data:{
                descripcion:data.descripcion,
                unidad:data.unidad,
                valorMinimo:data.valorMinimo,
                valorMaximo:data.valorMaximo
            }
        })

        return nuevoSignoVital
    } catch (error) {
        console.error(`Error al crear un nuevo Signo Vital: ${error}`);
        throw new Error('No se pudo crear un nuevo Signo Vital')
    }
}

export {crearSignoVital}