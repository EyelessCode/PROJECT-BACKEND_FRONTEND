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

        // 🔹 1. Buscar si el paciente existe antes de actualizar
        const pacienteExistente = await prisma.paciente.findUnique({
            where: { codigo }
        });

        if (!pacienteExistente) {
            console.error(`Paciente con código ${codigo} no encontrado.`);
            return null; // Evita la actualización si no existe
        }

        // 🔹 2. Asegurar que la cédula no cause duplicados
        if (data.cedula && data.cedula !== pacienteExistente.cedula) {
            const cedulaExistente = await prisma.paciente.findUnique({
                where: { cedula: data.cedula }
            });

            if (cedulaExistente) {
                throw new Error(`La cédula ${data.cedula} ya está registrada en otro paciente.`);
            }
        }

        // 🔹 3. Realizar la actualización
        return await prisma.paciente.update({
            where: { codigo },
            data
        });
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