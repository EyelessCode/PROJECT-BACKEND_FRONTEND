import { SignosPacientes, TomaSignos } from "@prisma/client";
// import { TomaSignosRepositorio } from "../../infrastructure/repository/tomaSignos.repository";
import { SignoPacienteRepositorio } from "../../infrastructure/repository/signoPaciente.repository";
import { SignoVitalRepositorio } from "../../infrastructure/repository/signoVital.repository";

// const repositorioTomaSignos=new TomaSignosRepositorio()
const repositorioSignoVital=new SignoVitalRepositorio()
const repositorioSignoPaciente=new SignoPacienteRepositorio()

const agregarSignoPaciente=async(data:SignosPacientes):Promise<SignosPacientes>=>{
    const signoVital=await repositorioSignoVital.obtenerSignoVital(data.signoVitalId)
    if(!signoVital) throw new Error(`El Signo Vital con ID ${data.signoVitalId} no existe`)

    if (data.valor<signoVital.valorMinimo||data.valor>signoVital.valorMaximo) {
        throw new Error(`El valor ${data.valor} está fuera del rango permitido para el Signo Vital`)
    }

    return await repositorioSignoPaciente.crearSignoPaciente(data)
}

const obtenerSignoPaciente=async(codigo:number,data:SignosPacientes):Promise<SignosPacientes|null>=>{
    const signoVital=await repositorioSignoVital.obtenerSignoVital(data.signoVitalId)
    if(!signoVital) throw new Error(`El Signo Vital con ID ${data.signoVitalId} no existe`)

    if (data.valor<signoVital.valorMinimo||data.valor>signoVital.valorMaximo) {
        throw new Error(`El valor ${data.valor} está fuera del rango permitido para el Signo Vital`)
    }

    return await repositorioSignoPaciente.obtenerSignoPaciente(codigo)
}

/* const obtenerSignosPacientes=async():Promise<TomaSignos[]>=>{
    return await repositorioSignoPaciente.obtenerSignosPacientes()
} */

//! AQUÍ ESTABA HACIENDO EL CASO DE USO DE SIGNO PACIENTE!!!!!