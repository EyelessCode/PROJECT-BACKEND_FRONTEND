import { ISignoVitalRepositorio } from "../../domain/interface/repositorio.interface";
import { ISignoVital } from "../../domain/interface/signoVital.interface";


export class SignoVitalService {
    constructor(private readonly repository: ISignoVitalRepositorio) {}

    obtenerSignos(): ISignoVital[] {
        return this.repository.obtenerSignos();
    }

    obtenerUnSigno(codigo: number): ISignoVital | undefined {
        if (isNaN(codigo)) {
            throw new Error("Código inválido!");
        }
        return this.repository.obtenerUnSigno(codigo);
    }

    crearSigno(signo: ISignoVital): ISignoVital {
        return this.repository.crearSigno(signo);
    }

    actualizarSigno(codigo: number, signo: ISignoVital): ISignoVital | undefined {
        if (isNaN(codigo)) {
            throw new Error("Código inválido!");
        }
        return this.repository.actualizarSigno(codigo, signo);
    }

    eliminarSigno(codigo: number): boolean {
        if (isNaN(codigo)) {
            throw new Error("Código inválido!");
        }
        return this.repository.eliminarSigno(codigo);
    }
}
