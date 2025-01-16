import { SVEjemplo } from "./infrastructure/data/signoVital.data";
import { SignoVitalRepositorio } from "./infrastructure/repository/signoVital.repository";
// import { SignoVital } from "./infrastructure/repository/signoVital.repository";

const repositorio=new SignoVitalRepositorio

repositorio.obtenerSignos().forEach((signos)=>{
    console.log(`-`.repeat(8)+`\nCódigo: ${signos.codigo} - Descripción: ${signos.descripcion}`);
})

let mostrarUnSigno=repositorio.obtenerUnSigno(6)
console.log(`Signo escogido: Código: ${mostrarUnSigno?.codigo} - Descripción: ${mostrarUnSigno?.descripcion}`);

let crearSigno=repositorio.crearSigno(SVEjemplo)
console.log(`Signo creado: Código: ${crearSigno.codigo} - Descripción: ${crearSigno.descripcion}`);

repositorio.obtenerSignos().forEach((signos)=>{
    console.log(`-`.repeat(8)+`\n2da vuelta | Código: ${signos.codigo} - Descripción: ${signos.descripcion}`);
})

let actualizarSigno=repositorio.actualizarSigno(10,{
    codigo:11,
    descripcion:"Presión arterial 1"
})
console.log(`Actulización de un Signo: Código: ${actualizarSigno?.codigo} - Descripción: ${actualizarSigno?.descripcion}`);

repositorio.obtenerSignos().forEach((signos)=>{
    console.log(`-`.repeat(8)+`\n3ra vuelta | Código: ${signos.codigo} - Descripción: ${signos.descripcion}`);
})

repositorio.eliminarSigno(10)

repositorio.obtenerSignos().forEach((signos)=>{
    console.log(`-`.repeat(8)+`\n4ra vuelta | Código: ${signos.codigo} - Descripción: ${signos.descripcion}`);
})