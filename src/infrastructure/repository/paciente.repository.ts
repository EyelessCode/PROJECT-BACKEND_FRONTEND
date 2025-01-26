import { Paciente } from "@prisma/client";
import { IPacienteRepositorio } from "../../domain/interface/paciente.interface";
import { prisma } from "../data/prisma.service";

export class PacienteRepositorio implements IPacienteRepositorio{
    async crearPaciente(data: Paciente): Promise<Paciente> {
        // throw new Error("Method not implemented.");
        return await prisma.paciente.create({
            data:data
        })
    }

    async obtenerPaciente(codigo: number): Promise<Paciente | null> {
        // throw new Error("Method not implemented.");
        if (!codigo || typeof codigo !== 'number' || codigo <= 0) {
            throw new Error("El código debe ser un número positivo mayor a cero.");
        }

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

        if (codigo <= 0) {
            throw new Error("El código debe ser un número positivo mayor a cero.");
        }

        return await prisma.paciente.update({
            where:{
                codigo:codigo
            },
            data:data
        })
    }

    async eliminarPaciente(codigo: number): Promise<Paciente | null> {
        // throw new Error("Method not implemented.");
        if (codigo <= 0) {
            throw new Error("El código debe ser un número positivo mayor a cero.");
        }

        return await prisma.paciente.delete({
            where:{
                codigo:codigo
            }
        })
    }

}