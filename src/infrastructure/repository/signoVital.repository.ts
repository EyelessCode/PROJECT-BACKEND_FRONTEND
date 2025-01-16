import { SV } from "../data/signoVital.data";
import { ISignoVitalRepositorio } from "../../domain/interface/signoVital.repository.interface";
import { ISignoVital } from "../../domain/interface/signoVital.interface";

export class SignoVitalRepositorio implements ISignoVitalRepositorio{
    private signoVital=SV

    obtenerSignos(): ISignoVital[] {
        // throw new Error("Method not implemented.");
        return this.signoVital
    }

    obtenerUnSigno(codigo: number): ISignoVital | undefined {
        // throw new Error("Method not implemented.");
        return this.signoVital.find((signoFind)=>signoFind.codigo===codigo)
    }

    crearSigno(signo: ISignoVital): ISignoVital {
        // throw new Error("Method not implemented.");
        this.signoVital.push(signo)
        return signo
    }

    actualizarSigno(codigo: number, signo: ISignoVital): ISignoVital | undefined {
        // throw new Error("Method not implemented.");
        let codigoIndex=this.signoVital.findIndex((signoIndex)=>signoIndex.codigo===codigo)
        if (codigoIndex!=-1) {
            this.signoVital[codigoIndex]={...signo,codigo:codigo}
            return this.signoVital[codigoIndex]
        }

        return undefined
    }

    eliminarSigno(codigo: number): boolean {
        // throw new Error("Method not implemented.");
        let codigoIndex=this.signoVital.findIndex((signoIndex)=>signoIndex.codigo===codigo)
        if (codigoIndex!=-1) {
            this.signoVital.splice(codigoIndex,1)
            return true
        }

        return false
    }

}
