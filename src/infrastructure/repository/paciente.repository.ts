import { SV } from "../data/signoVital.data";
import { IPaciente } from "../../domain/interface/paciente.interface";
import { IPacienteRepositorio } from "../../domain/interface/paciente.repository.interface";

export class PacienteRepositorio implements IPacienteRepositorio{
    obtenerSignos(): IPaciente[] {
        throw new Error("Method not implemented.");
    }
    obtenerUnSigno(codigo: number): IPaciente | undefined {
        throw new Error("Method not implemented.");
    }
    crearSigno(signo: IPaciente): IPaciente {
        throw new Error("Method not implemented.");
    }
    actualizarSigno(codigo: number, signo: IPaciente): IPaciente | undefined {
        throw new Error("Method not implemented.");
    }
    eliminarSigno(codigo: number): boolean {
        throw new Error("Method not implemented.");
    }
    private signoVital=SV



}
