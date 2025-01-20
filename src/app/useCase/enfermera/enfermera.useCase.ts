import { Enfermera } from "@prisma/client";
import { IEnfermera } from "../../../domain/interface/enfermera/enfermera.interface";
import { prisma } from "../../../infrastructure/data/prisma.service";

const actualizarEnfermeras=async(codigo:number,data:IEnfermera):Promise<Enfermera|null>=>{
    try {
        const existe=await prisma.enfermera.findUnique({
            where:{
                codigo:codigo
            },
        })

        if (!existe) {
            console.log(`No existe una Enfermera con el código ${codigo}`);
            return null
        }

        const actualizar=await prisma.enfermera.update({
            where:{
                codigo:codigo
            },
            data:{
                cedula:data.cedula,
                nombres:data.nombres
            }
        })

        return actualizar
    } catch (error) {
        console.error(`Error al actualizar una Enfermera: ${error}`);
        throw new Error('No se pudo actualizar una Enfermera')
    }
}

export {actualizarEnfermeras}