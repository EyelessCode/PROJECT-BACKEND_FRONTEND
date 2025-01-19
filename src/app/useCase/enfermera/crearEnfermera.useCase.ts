import { Enfermera } from "@prisma/client";
import { IEnfermera } from "../../../domain/interface/enfermera/enfermera.interface";
import { prisma } from "../../../infrastructure/data/prisma.service";

const crearEnfermera=async(data:IEnfermera):Promise<Enfermera>=>{
    try {
        const crear=await prisma.enfermera.create({
            data:{
                cedula:data.cedula,
                nombres:data.cedula
            }
        })

        return crear
    } catch (error) {
        console.error(`Error al crear una Enfermera: ${error}`);
        throw new Error('No se pudo crear una nuevo Enfermera')
    }
}

export {crearEnfermera}