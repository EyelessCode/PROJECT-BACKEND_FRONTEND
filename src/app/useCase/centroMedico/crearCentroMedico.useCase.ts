import { CentroMedico } from "@prisma/client";
import { ICentroMedico } from "../../../domain/interface/centroMedico/centroMedico.interface";
import { prisma } from "../../../infrastructure/data/prisma.service";

const crearCentroMedico=async(data:ICentroMedico):Promise<CentroMedico>=>{
    try {
        const crear=await prisma.centroMedico.create({
            data:{
                nombre:data.nombre,
                direccion:data.direccion
            }
        })

        return crear
    } catch (error) {
        console.error(`Error al crear un nuevo un Centro Médico: ${error}`);
        throw new Error('No se pudo crear un nuevo Centro Médico')
    }
}

export {crearCentroMedico}