import { SignoVital } from "@prisma/client";
import { ISignoPacienteRepositorio } from "../../domain/interface/signoVital/signoVital.repository.interface";
import { prisma } from "../data/prisma.service";

export class SignoVitalRepositorio implements ISignoPacienteRepositorio{
    async crearSignoVital(data: SignoVital): Promise<SignoVital> {
        // throw new Error("Method not implemented.");
        return await prisma.signoVital.create({
            data:data
        })
    }

    async obtenerSignoVital(codigo: number): Promise<SignoVital | null> {
        // throw new Error("Method not implemented.");
        if (codigo<=0) {
            throw new Error("El código debe ser un número positivo mayor a cero.");
        }

        return await prisma.signoVital.findUnique({
            where:{
                codigo:codigo
            }
        })
    }

    async obtenerSignoVitales(): Promise<SignoVital[]> {
        // throw new Error("Method not implemented.");
        return await prisma.signoVital.findMany()
    }

    async actualizarSignoVital(codigo: number, data: Partial<SignoVital>): Promise<SignoVital | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error(`El código debe ser un número positivo mayor a cero.`);
        }

        return await prisma.signoVital.update({
            where:{
                codigo:codigo
            },
            data:data
        })
    }

    async eliminarSignoVital(codigo: number): Promise<SignoVital | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error(`El código debe ser un número positivo mayor a cero.`);
        }

        return await prisma.signoVital.delete({
            where:{
                codigo:codigo
            }
        })
    }

}