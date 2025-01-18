import { Paciente } from "@prisma/client";
import { prisma } from "../../../infrastructure/data/prisma.service";

const eliminarPaciente=async(codigo:number):Promise<Paciente|null>=>{
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
    
        const eliminarPaciente=await prisma.paciente.delete({
            where:{
                codigo:codigo
            }
        })
    
        return eliminarPaciente
    } catch (error) {
        console.error(`Error al tratar de eliminar un Paciente con el código: ${codigo}`);
        throw new Error(`No se pudo eliminar un Paciente con el código: ${codigo}`);
    }
}

export {eliminarPaciente}