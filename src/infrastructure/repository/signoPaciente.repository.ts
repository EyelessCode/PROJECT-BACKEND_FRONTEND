import { prisma } from "../data/prisma.service";
import { ISignoPacienteRepositorio } from "../../domain/interface/signoPaciente/signoPaciente.interface";
import { SignosPacientes } from "@prisma/client";

export class SignoPacienteRepositorio implements ISignoPacienteRepositorio{
    async crearSignoPaciente(data: SignosPacientes): Promise<SignosPacientes> {
        // throw new Error("Method not implemented.");
        return await prisma.signosPacientes.create({
            data:data
        })
    }

    async obtenerSignoPaciente(codigo: number): Promise<SignosPacientes | null> {
        // throw new Error("Method not implemented.");
        return await prisma.signosPacientes.findUnique({
            where:{
                linea:codigo
            }
        })
    }

    async obtenerSignosPacientes(): Promise<SignosPacientes[]> {
        // throw new Error("Method not implemented.");

        return await prisma.signosPacientes.findMany()
    }

    async actualizarSignoPaciente(codigo: number, data: Partial<SignosPacientes>): Promise<SignosPacientes | null> {
        // throw new Error("Method not implemented.");

        return await prisma.signosPacientes.update({
            where:{
                linea:codigo
            },
            data:data
        })
    }

    async eliminarSignoPaciente(codigo: number): Promise<SignosPacientes | null> {
        // throw new Error("Method not implemented.");

        return await prisma.signosPacientes.delete({
            where:{
                linea:codigo
            }
        })
    }


}