import { Paciente } from "@prisma/client";
import { IPaciente } from "../../../domain/interface/paciente/paciente.interface";
import { prisma } from "../../../infrastructure/data/prisma.service";

const crearPacienteUseCase=async(data:IPaciente):Promise<Paciente>=>{
    try {
        const nuevoPaciente=await prisma.paciente.create({
            data:{
                cedula:data.cedula,
                fechaNacimiento:data.fechaNacimiento,
                nombres:data.nombres
            }
        })

        return nuevoPaciente
    } catch (error) {
        console.error(`Error al crear un nuevo Paciente: ${error}`);
        throw new Error('No se pudo crear un nuevo Signo Vital')
    }
}

export {crearPacienteUseCase}