import { SignoVital } from "@prisma/client";
import { SignoVitalRepositorio } from "../../infrastructure/repository/signoVital.repository";

const repositorio=new SignoVitalRepositorio()

const actualizarSignoVital=async(codigo:number,data:SignoVital):Promise<SignoVital|null>=>{
    try {
        
        return await repositorio.actualizarSignoVital(codigo,data)
    } catch (error) {
        console.error(`Error al actualizar el signo vital ${error}`);
        throw new Error(`No se pudo actualizar el signo vital`);
    }
}



export {actualizarSignoVital}