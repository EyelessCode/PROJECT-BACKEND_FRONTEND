// import { SV } from "../data/signoVital.data";
import { IPaciente } from "../../domain/interface/paciente/paciente.interface";
import { IPacienteRepositorio } from "../../domain/interface/paciente/paciente.repository.interface";

export class PacienteRepositorio implements IPacienteRepositorio{
    obtenerPacientes(): IPaciente[] {
        throw new Error("Method not implemented.");
    }
    obtenerUnPaciente(codigo: number): IPaciente | undefined {
        throw new Error("Method not implemented.");
    }
    crearPaciente(paciente: IPaciente): IPaciente {
        throw new Error("Method not implemented.");
    }
    actualizarPaciente(codigo: number, paciente: IPaciente): IPaciente | undefined {
        throw new Error("Method not implemented.");
    }
    eliminarPaciente(codigo: number): boolean {
        throw new Error("Method not implemented.");
    }
    // private signoVital=SV



}
