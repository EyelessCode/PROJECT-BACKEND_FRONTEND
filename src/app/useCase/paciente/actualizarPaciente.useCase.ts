import { Paciente } from "@prisma/client";
import { IPaciente } from "../../../domain/interface/paciente/paciente.interface";
import { prisma } from "../../../infrastructure/data/prisma.service";

const actualizarPaciente=async(codigo:number,data:IPaciente):Promise<Paciente|null>=>{
    try {
        const existePaciente=await prisma.paciente.findUnique({
            where:{
                codigo:codigo
            }
        })

        if (!existePaciente) {
            console.log(`Paciente ${codigo} no encontrado`);
            return null
        }

        const actualizarPaciente=await prisma.paciente.update({
            where:{
                codigo:codigo
            },
            data:{
                cedula:data.cedula,
                fechaNacimiento:data.fechaNacimiento,
                nombres:data.nombres
            }
        })

        return actualizarPaciente
    } catch (error) {
        console.error(`Error al actualizar un Paciente: ${error}`);
        throw new Error('No se pudo actualizar un Paciente')
    }
}

export {actualizarPaciente}