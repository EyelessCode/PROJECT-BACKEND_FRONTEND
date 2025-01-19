import { CentroMedico } from "@prisma/client";
import { ICentroMedicoRepositorio } from "../../domain/interface/centroMedico/centroMedico.repository.interface";
import { prisma } from "../data/prisma.service";

export class CentroMedicoRepositorio implements ICentroMedicoRepositorio{
    async crearCentroMedico(data: CentroMedico): Promise<CentroMedico> {
        // throw new Error("Method not implemented.");

        return await prisma.centroMedico.create({
            data:data
        })
    }

    async obtenerCentroMedico(codigo: number): Promise<CentroMedico | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error("El código del centro médico debe ser mayor a 0");
        }

        return await prisma.centroMedico.findUnique({
            where:{
                codigo:codigo
            }
        })
    }

    async obtenerCentrosMedicos(): Promise<CentroMedico[]> {
        // throw new Error("Method not implemented.");
        return await prisma.centroMedico.findMany()
    }

    async actualizarCentroMedico(codigo: number, data: Partial<CentroMedico>): Promise<CentroMedico | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error("El código del centro médico debe ser mayor a 0");
        }

        return await prisma.centroMedico.update({
            where:{
                codigo:codigo
            },
            data:data
        })
    }

    async eliminarCentroMedico(codigo: number): Promise<CentroMedico | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error("El código del centro médico debe ser mayor a 0");
        }
        
        return await prisma.centroMedico.delete({
            where:{
                codigo:codigo
            }
        })
    }


}