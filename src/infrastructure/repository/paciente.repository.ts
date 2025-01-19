import { Paciente } from "@prisma/client";
import { IPacienteRepositorio } from "../../domain/interface/paciente/paciente.repository.interface";
import { prisma } from "../data/prisma.service";

export class PacienteRepositorio implements IPacienteRepositorio{
    async crearPaciente(data: Paciente): Promise<Paciente> {
        // throw new Error("Method not implemented.");
        return await prisma.paciente.create({
            data
        })
    }

    async obtenerPaciente(codigo: number): Promise<Paciente | null> {
        // throw new Error("Method not implemented.");
        return await prisma.paciente.findUnique({
            where: {
                codigo:codigo
            }
        })
    }

    async obtenerPacientes(): Promise<Paciente[]> {
        // throw new Error("Method not implemented.");
        return await prisma.paciente.findMany()
    }
    
    async actualizarPaciente(codigo: number, data: Partial<Paciente>): Promise<Paciente | null> {
        // throw new Error("Method not implemented.");
        return await prisma.paciente.update({
            where:{
                codigo:codigo
            },
            data
        })
    }

    async eliminarPaciente(codigo: number): Promise<Paciente | null> {
        // throw new Error("Method not implemented.");
        return await prisma.paciente.delete({
            where:{
                codigo:codigo
            }
        })
    }

}