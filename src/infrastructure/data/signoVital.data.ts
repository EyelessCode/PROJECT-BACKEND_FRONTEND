import { ISignoVital } from "../../domain/interface/signoVital/signoVital.interface";

const SV: ISignoVital[] = [
    {
        codigo: 1,
        descripcion: "Presión arterial",
        unidad:"masa",
        valorMaximo:120.00,
        valorMinimo:80.00
    },
    {
        codigo: 2,
        descripcion: "Frecuencia cardíaca",
        unidad:"masa",
        valorMaximo:120.00,
        valorMinimo:80.00
    },
    {
        codigo: 3,
        descripcion: "Frecuencia respiratoria",
        unidad:"masa",
        valorMaximo:120.00,
        valorMinimo:80.00
    }, {
        codigo: 4,
        descripcion: "Temperatura",
        unidad:"masa",
        valorMaximo:120.00,
        valorMinimo:80.00
    },
    {
        codigo: 5,
        descripcion: "Peso",
        unidad:"masa",
        valorMaximo:120.00,
        valorMinimo:80.00
    },
    {
        codigo: 6,
        descripcion: "Dolor de cabeza",
        unidad:"masa",
        valorMaximo:120.00,
        valorMinimo:80.00
    }
]

let SVEjemplo: ISignoVital = {
    codigo: 10,
    descripcion: "Presión arterial 2",
    unidad:"masa",
    valorMaximo:120.00,
    valorMinimo:80.00
}

export { SV, SVEjemplo }
