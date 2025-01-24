import { TipoSigno } from "@prisma/client";
import { ITipoSignoRepositorio } from "../../domain/interface/tipoSigno.interface";
import { prisma } from "../data/prisma.service";

export class TipoSignoRepositorio implements ITipoSignoRepositorio{
    async crearTipoSigno(data: TipoSigno): Promise<TipoSigno> {
        // throw new Error("Method not implemented.");
        return await prisma.tipoSigno.create({
            data:data
        })
    }

    async obtenerTipoSigno(codigo: number): Promise<TipoSigno | null> {
        // throw new Error("Method not implemented.");
        if (codigo<=0) {
            throw new Error("El código debe ser un número positivo mayor a cero.");
        }

        return await prisma.tipoSigno.findUnique({
            where:{
                codigo:codigo
            }
        })
    }

    async obtenerTiposSignos(): Promise<TipoSigno[]> {
        // throw new Error("Method not implemented.");
        return await prisma.tipoSigno.findMany()
    }

    async actualizarTipoSigno(codigo: number, data: Partial<TipoSigno>): Promise<TipoSigno | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error(`El código debe ser un número positivo mayor a cero.`);
        }

        return await prisma.tipoSigno.update({
            where:{
                codigo:codigo
            },
            data:data
        })
    }

    async eliminarTipoSigno(codigo: number): Promise<TipoSigno | null> {
        // throw new Error("Method not implemented.");

        if (codigo<=0) {
            throw new Error(`El código debe ser un número positivo mayor a cero.`);
            // return null
        }

        return await prisma.tipoSigno.delete({
            where:{
                codigo:codigo
            }
        })
    }

}