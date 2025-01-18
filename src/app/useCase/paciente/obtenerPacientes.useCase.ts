import { Paciente } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerPacientes=async():Promise<Paciente[]|null>=>{
    try {
        const obtenerPacientes=await prisma.paciente.findMany()

        if (!obtenerPacientes) {
            console.log(`No existen Pacientes`);
            return null
        }

        return obtenerPacientes
    } catch (error) {
        console.error(`Error al obtener todos los Pacientes, ${error}`);
        throw new Error(`No se pudo obtener los Pacientes`)
    }
}