"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signoVital_data_1 = require("./data/signoVital.data");
const signoVital_repositorio_1 = require("./repository/signoVital.repositorio");
const repositorio = new signoVital_repositorio_1.SignoVital;
repositorio.obtenerSignos().forEach((signos) => {
    console.log(`-`.repeat(8) + `\nCódigo: ${signos.codigo} - Descripción: ${signos.descripcion}`);
});
let mostrarUnSigno = repositorio.obtenerUnSigno(6);
console.log(`Signo escogido: Código: ${mostrarUnSigno === null || mostrarUnSigno === void 0 ? void 0 : mostrarUnSigno.codigo} - Descripción: ${mostrarUnSigno === null || mostrarUnSigno === void 0 ? void 0 : mostrarUnSigno.descripcion}`);
let crearSigno = repositorio.crearSigno(signoVital_data_1.SVEjemplo);
console.log(`Signo creado: Código: ${crearSigno.codigo} - Descripción: ${crearSigno.descripcion}`);
repositorio.obtenerSignos().forEach((signos) => {
    console.log(`-`.repeat(8) + `\n2da vuelta | Código: ${signos.codigo} - Descripción: ${signos.descripcion}`);
});
let actualizarSigno = repositorio.actualizarSigno(10, {
    codigo: 11,
    descripcion: "Presión arterial 1"
});
console.log(`Actulización de un Signo: Código: ${actualizarSigno === null || actualizarSigno === void 0 ? void 0 : actualizarSigno.codigo} - Descripción: ${actualizarSigno === null || actualizarSigno === void 0 ? void 0 : actualizarSigno.descripcion}`);
repositorio.obtenerSignos().forEach((signos) => {
    console.log(`-`.repeat(8) + `\n3ra vuelta | Código: ${signos.codigo} - Descripción: ${signos.descripcion}`);
});
repositorio.eliminarSigno(10);
repositorio.obtenerSignos().forEach((signos) => {
    console.log(`-`.repeat(8) + `\n4ra vuelta | Código: ${signos.codigo} - Descripción: ${signos.descripcion}`);
});
//# sourceMappingURL=app.test.js.map