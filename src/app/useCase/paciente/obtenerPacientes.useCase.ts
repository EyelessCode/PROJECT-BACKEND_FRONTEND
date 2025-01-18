import { Paciente } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerPacientes=async():Promise<Paciente[]>=>{
    try {
        const obtenerPacientes=await prisma.paciente.findMany()

        return obtenerPacientes
    } catch (error) {
        console.error(`Error al obtener todos los Pacientes, ${error}`);
        throw new Error(`No se pudo obtener los Pacientes`)
    }
}

export {obtenerPacientes}