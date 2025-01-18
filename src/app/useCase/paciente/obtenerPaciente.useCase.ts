import { Paciente } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const obtenerPaciente=async(codigo:number):Promise<Paciente|null>=>{
    try {
        const existePaciente=await prisma.paciente.findUnique({
            where:{
                codigo:codigo
            }
        })
    
        if (!existePaciente) {
            console.log(`No existe un paciente con el código ${codigo}`);
            return null
        }

        return existePaciente
    } catch (error) {
        console.error(`Error al obtener un Paciente con el código: ${codigo}`);
        throw new Error(`No se pudo obtener un Paciente con el código: ${codigo}`);
    }
}

export {obtenerPaciente}