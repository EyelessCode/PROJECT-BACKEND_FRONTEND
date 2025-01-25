import { SignosPacientes, TomaSignos } from "@prisma/client";
// import { TomaSignosRepositorio } from "../../infrastructure/repository/tomaSignos.repository";
// import { SignoPacienteRepositorio } from '../../infrastructure/repository/signoPaciente.repository';
// import { SignoVitalRepositorio } from "../../infrastructure/repository/signoVital.repository";
import { ISignoPacienteCasoUso } from "../../domain/interface/signoPaciente.interface";
import { TomaSignosRepositorio } from "../../infrastructure/repository/tomaSignos.repository";
import { TipoSignoRepositorio } from "../../infrastructure/repository/tipoSigno.repository";
import { SignoPacienteRepositorio } from "../../infrastructure/repository/signoPaciente.repository";

// const repositorioTomaSignos=new TomaSignosRepositorio()
export class SignoPacienteCasoUso implements ISignoPacienteCasoUso{
    constructor(
        private tomaSignoRepositorio:TomaSignosRepositorio,
        private tipoSignoRepositorio:TipoSignoRepositorio,
        private signoPacienteRepositorio:SignoPacienteRepositorio) {
        
    }

    async registrarSignoPaciente(data: SignosPacientes): Promise<SignosPacientes> {
        // throw new Error("Method not implemented.");
        await this.validarSignoVital(data.TipoSignoId,data.valor)
        await this.validarTomaSigno(data.tomaSignosId)

        return await this.signoPacienteRepositorio.crearSignoPaciente(data)
    }

    async validarTomaSigno(codigo: number): Promise<void> {
        // throw new Error("Method not implemented.");
        const tomaSigno=await this.tomaSignoRepositorio.obtenerTomaSigno(codigo)
        if(!tomaSigno)throw new Error(`La Toma de Signo con el código ${codigo} no existe`)
    }
    
    async validarSignoVital(codigo: number, valor: number): Promise<void> {
        // throw new Error("Method not implemented.");
        const signoVital=await this.tipoSignoRepositorio.obtenerTipoSigno(codigo)
        if(!signoVital)throw new Error(`El Signo Vital con el código ${codigo} no existe`)
        
/*         if (valor<signoVital.valorMinimo||valor>signoVital.valorMaximo) {
            throw new Error(`El Valor ${valor} está fuera del rango permitido (${signoVital.valorMinimo} - ${signoVital.valorMaximo})`)
        } */
    }


}