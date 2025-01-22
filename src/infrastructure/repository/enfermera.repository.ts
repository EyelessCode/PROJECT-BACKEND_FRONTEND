import { Enfermera } from "@prisma/client";
import { IEnfermeraRepositorio } from "../../domain/interface/enfermera.interface";
import { prisma } from "../data/prisma.service";

export class EnfermeraRepositorio implements IEnfermeraRepositorio{
    async crearEnfermera(data: Enfermera): Promise<Enfermera> {
        // throw new Error("Method not implemented.");
        return await prisma.enfermera.create({
            data:data
        })
    }

    async obtenerEnfermera(codigo: number): Promise<Enfermera | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error("El código del centro médico debe ser mayor a 0");
        }

        return await prisma.enfermera.findUnique({
            where:{
                codigo:codigo
            }
        })
    }

    async obtenerEnfermeras(): Promise<Enfermera[]> {
        // throw new Error("Method not implemented.");

        return await prisma.enfermera.findMany()
    }

    async actualizarEnfermera(codigo: number, data: Partial<Enfermera>): Promise<Enfermera | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error("El código del centro médico debe ser mayor a 0");
        }

        return await prisma.enfermera.update({
            where:{
                codigo:codigo
            },
            data:data
        }) 
    }

    async eliminarEnfermera(codigo: number): Promise<Enfermera | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error("El código del centro médico debe ser mayor a 0");
        }

        return await prisma.enfermera.delete({
            where:{
                codigo:codigo
            }
        })
    }

}