import { ISignoVital } from "../../domain/interface/signoVital.interface";

const SV: ISignoVital[] = [
    {
        codigo: 1,
        descripcion: "Presión arterial"
    },
    {
        codigo: 2,
        descripcion: "Frecuencia cardíaca"
    },
    {
        codigo: 3,
        descripcion: "Frecuencia respiratoria"
    }, {
        codigo: 4,
        descripcion: "Temperatura"
    },
    {
        codigo: 5,
        descripcion: "Peso"
    },
    {
        codigo: 6,
        descripcion: "Dolor de cabeza"
    }
]

let SVEjemplo: ISignoVital = {
    codigo: 10,
    descripcion: "Presión arterial 2"
}

export { SV, SVEjemplo }
