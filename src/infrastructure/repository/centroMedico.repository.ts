import { CentroMedico } from "@prisma/client";
import { ICentroMedicoRepositorio } from "../../domain/interface/centroMedico/centroMedico.repository.interface";

export class CentroMedicoRepositorio implements ICentroMedicoRepositorio{
    crearCentroMedico(data: CentroMedico): Promise<CentroMedico> {
        throw new Error("Method not implemented.");
    }

    obtenerCentroMedico(codigo: number): Promise<CentroMedico | null> {
        throw new Error("Method not implemented.");
    }

    obtenerCentrosMedicos(): Promise<CentroMedico[]> {
        throw new Error("Method not implemented.");
    }

    actualizarCentroMedico(codigo: number, data: Partial<CentroMedico>): Promise<CentroMedico | null> {
        throw new Error("Method not implemented.");
    }
    
    eliminarCentroMedico(codigo: number): Promise<CentroMedico | null> {
        throw new Error("Method not implemented.");
    }


}