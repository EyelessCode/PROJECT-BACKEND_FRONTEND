import { TomaSignos } from "@prisma/client";
import { PacienteRepositorio } from '../../infrastructure/repository/paciente.repository';
import { CentroMedicoRepositorio } from '../../infrastructure/repository/centroMedico.repository';
import { EnfermeraRepositorio } from '../../infrastructure/repository/enfermera.repository';
import { TomaSignosRepositorio } from '../../infrastructure/repository/tomaSignos.repository';
import { ITomaSignoCasoUso } from "../../domain/interface/tomaSigno.interface";

export class TomaSignoCasoUso implements ITomaSignoCasoUso{
    constructor(
        private pacienteRepositorio:PacienteRepositorio,
        private centroMedicoRepositorio:CentroMedicoRepositorio,
        private enfermeraRepositorio:EnfermeraRepositorio,
        private tomaSignosRepositorio:TomaSignosRepositorio
    ) {
        
    }


    async registrarTomaSigno(data: TomaSignos): Promise<TomaSignos> {
        // throw new Error("Method not implemented.");
        await this.validarPaciente(data.pacienteId)
        await this.validarEnfermera(data.enfermeraId)
        await this.validarCentroMedico(data.centroMedicoId)

        return await this.tomaSignosRepositorio.crearTomaSigno(data)
    }

    async validarPaciente(codigo: number): Promise<void> {
        // throw new Error("Method not implemented.");
        const paciente=await this.pacienteRepositorio.obtenerPaciente(codigo)
        if(!paciente)throw new Error(`El Paciente con el codigo ${codigo} no existe`)
    }

    async validarEnfermera(codigo: number): Promise<void> {
        // throw new Error("Method not implemented.");
        const enfermera=await this.enfermeraRepositorio.obtenerEnfermera(codigo)
        if(!enfermera)throw new Error(`La Enfermera con el codigo ${codigo} no existe`)
    }

    async validarCentroMedico(codigo: number): Promise<void> {
        // throw new Error("Method not implemented.");
        const centroMedico=await this.centroMedicoRepositorio.obtenerCentroMedico(codigo)
        if(!centroMedico)throw new Error(`El Centro Médico con el codigo ${codigo} no existe`)
    }

}