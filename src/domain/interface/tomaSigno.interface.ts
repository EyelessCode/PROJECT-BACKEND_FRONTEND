import { SignosPacientes, TomaSignos } from "@prisma/client";

export interface ITomaSignoRepositorio{
    crearTomaSigno(data:TomaSignos):Promise<TomaSignos>
    obtenerTomaSigno(codigo:number):Promise<TomaSignos|null>
    obtenerTomaSignos():Promise<TomaSignos[]>
}

export interface ITomaSignoCasoUso{
    registrarTomaSigno(
        data: {
            numero: number;
            fecha: string;
            centroMedicoId: number;
            pacienteId: number;
            enfermeraId: number;
            observacion: string;
        },
        signos: {
            fecha: string;
            valor: number;
            TipoSignoId: number;
            comentario: string | null;
        }[]
    ): Promise<TomaSignos>;
}