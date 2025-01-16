import { SignoVital } from "@prisma/client";
import { prisma } from "../../infrastructure/data/prisma.service";

async function useCaseCrearSignoVital(descripcion:string,unidad:string,
    valorMinimo:number,valorMaximo:number) {
    return await prisma.signoVital.create({
        data:{
            descripcion,
            unidad,
            valorMinimo,
            valorMaximo
        }
    })
}

async function useCaseActualizarSigno(codigo:number,data:Partial<SignoVital>) {
    return await prisma.signoVital.update({
        where: {
            codigo
        },
        data
    })
}