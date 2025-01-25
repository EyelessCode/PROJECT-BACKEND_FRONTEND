import { prisma } from "../data/prisma.service";
import { ISignoPacienteRepositorio } from "../../domain/interface/signoPaciente.interface";
import { SignosPacientes } from "@prisma/client";

export class SignoPacienteRepositorio implements ISignoPacienteRepositorio{
    async obtenerSignosPacientes(): Promise<SignosPacientes[]> {
        // throw new Error("Method not implemented.");
        return await prisma.signosPacientes.findMany()
    }
    async crearSignoPaciente(data: SignosPacientes): Promise<SignosPacientes> {
        // throw new Error("Method not implemented.");
        return await prisma.signosPacientes.create({
            data:data
        })
    }


}