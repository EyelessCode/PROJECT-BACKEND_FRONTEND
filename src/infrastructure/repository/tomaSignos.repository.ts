import { TomaSignos } from "@prisma/client";
import { ITomaSignoRepositorio } from "../../domain/interface/tomaSigno.interface";
import { prisma } from "../data/prisma.service";

export class TomaSignosRepositorio implements ITomaSignoRepositorio{
    async crearTomaSigno(data: TomaSignos): Promise<TomaSignos> {
        // throw new Error("Method not implemented.");
        return await prisma.tomaSignos.create({
            data:data
        })
    }
    
    async obtenerTomaSigno(codigo: number): Promise<TomaSignos | null> {
        // throw new Error("Method not implemented.");
        return await prisma.tomaSignos.findUnique({
            where:{
                numero:codigo
            }
        })
    }

    async obtenerTomaSignos(): Promise<TomaSignos[]> {
        // throw new Error("Method not implemented.");

        return await prisma.tomaSignos.findMany()
    }

    /* async actualizarTomaSigno(codigo: number, data: Partial<TomaSignos>): Promise<TomaSignos | null> {
        // throw new Error("Method not implemented.");

        return await prisma.tomaSignos.update({
            where:{
                numero:codigo
            },
            data:data
        })
    }

    async eliminarTomaSigno(codigo: number): Promise<TomaSignos | null> {
        // throw new Error("Method not implemented.");
        return await prisma.tomaSignos.delete({
            where:{
                numero:codigo
            }
        })
    } */

}