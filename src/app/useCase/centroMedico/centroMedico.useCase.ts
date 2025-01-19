import { CentroMedico } from "@prisma/client";
import { ICentroMedico } from "../../../domain/interface/centroMedico/centroMedico.interface";
import { prisma } from "../../../infrastructure/data/prisma.service";

const actualizarCentroMedico=async(codigo:number,data:ICentroMedico):Promise<CentroMedico|null>=>{
    try {
        const existe=await prisma.centroMedico.findUnique({
            where:{
                codigo:codigo
            },
        })

        if (!existe) {
            console.log(`No existe un Centro Médico con el código ${codigo}`);
            return null
        }

        const actualizar=await prisma.centroMedico.update({
            where:{
                codigo:codigo
            },
            data:{
                nombre:data.nombre,
                direccion:data.direccion
            }
        })

        return actualizar
    } catch (error) {
        console.error(`Error al actualizar Centro Médico: ${error}`);
        throw new Error('No se pudo actualizar un Centro Médico')
    }
}

export {actualizarCentroMedico}