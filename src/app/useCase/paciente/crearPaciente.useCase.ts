import { Paciente } from "@prisma/client";
// import { IPaciente } from "../../../domain/interface/paciente/paciente.interface";
// import { prisma } from "../../../infrastructure/data/prisma.service";
import { PacienteRepositorio } from "../../../infrastructure/repository/paciente.repository";

const repositorio=new PacienteRepositorio()

const crearPaciente=async(data:Paciente):Promise<Paciente>=>{
    try {
        /* const nuevoPaciente=await prisma.paciente.create({
            data:{
                cedula:data.cedula,
                fechaNacimiento:data.fechaNacimiento,
                nombres:data.nombres
            }
        }) */

        return await repositorio.crearPaciente(data)
    } catch (error) {
        console.error(`Error al crear un nuevo Paciente: ${error}`);
        throw new Error('No se pudo crear un nuevo Paciente')
    }
}

export {crearPaciente}