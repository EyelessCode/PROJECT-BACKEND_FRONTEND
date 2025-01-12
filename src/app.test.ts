import { SignoVital } from "./repository/signoVital.repositorio";

const repositorio=new SignoVital

repositorio.obtenerSignos().forEach((signos)=>{
    console.log(`-`.repeat(8)+`\nCódigo: ${signos.codigo} - Descripción: ${signos.descripcion}\n`);
})
