import { CentroMedico } from "@prisma/client";
// import { ICentroMedico } from "../../../domain/interface/centroMedico/centroMedico.interface";
// import { prisma } from "../../../infrastructure/data/prisma.service";
import { CentroMedicoRepositorio } from "../../infrastructure/repository/centroMedico.repository";

const repositorio=new CentroMedicoRepositorio()

const actualizarCentroMedico=async(codigo:number,data:CentroMedico):Promise<CentroMedico|null>=>{
    try {

        return await repositorio.actualizarCentroMedico(codigo,data)
    } catch (error) {
        console.error(`Error al actualizar Centro Médico: ${error}`);
        throw new Error('No se pudo actualizar un Centro Médico')
    }
}

const crearCentroMedico=async(data:CentroMedico):Promise<CentroMedico>=>{
    try {
        return await repositorio.crearCentroMedico(data)
    } catch (error) {
        console.error(`Error al crear un nuevo un Centro Médico: ${error}`);
        throw new Error('No se pudo crear un nuevo Centro Médico')
    }
}

export {actualizarCentroMedico}