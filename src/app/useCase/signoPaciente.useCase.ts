import { SignosPacientes, TomaSignos } from "@prisma/client";
// import { TomaSignosRepositorio } from "../../infrastructure/repository/tomaSignos.repository";
// import { SignoPacienteRepositorio } from '../../infrastructure/repository/signoPaciente.repository';
// import { SignoVitalRepositorio } from "../../infrastructure/repository/signoVital.repository";
import { ISignoPacienteCasoUso } from "../../domain/interface/signoPaciente.interface";
import { TomaSignosRepositorio } from "../../infrastructure/repository/tomaSignos.repository";
import { SignoVitalRepositorio } from "../../infrastructure/repository/signoVital.repository";
import { SignoPacienteRepositorio } from "../../infrastructure/repository/signoPaciente.repository";

// const repositorioTomaSignos=new TomaSignosRepositorio()
export class SignoPacienteCasoUso implements ISignoPacienteCasoUso{
    constructor(
        private tomaSignoRepositorio:TomaSignosRepositorio,
        private signoVitalRepositorio:SignoVitalRepositorio,
        private signoPacienteRepositorio:SignoPacienteRepositorio) {
        
    }

    async registrarSignoPaciente(data: SignosPacientes): Promise<SignosPacientes> {
        throw new Error("Method not implemented.");
    }

    async validarTomaSigno(codigo: number): Promise<void> {
        // throw new Error("Method not implemented.");
        const tomaSigno=await this.tomaSignoRepositorio.obtenerTomaSigno(codigo)
        if(!tomaSigno)throw new Error(`La Toma de Signo con el código ${codigo} no existe`)
    }
    
    async validarSignoVital(codigo: number, valor: number): Promise<void> {
        // throw new Error("Method not implemented.");
        const signoVital=await this.signoVitalRepositorio.obtenerSignoVital(codigo)
        if(!signoVital)throw new Error(`El Signo Vital con el código ${codigo} no existe`)
        
        if (valor<signoVital.valorMinimo||valor>signoVital.valorMaximo) {
            throw new Error(`El Valor ${valor} está fuera del rango permitido (${signoVital.valorMinimo} - ${signoVital.valorMaximo})`)
        }
    }


}