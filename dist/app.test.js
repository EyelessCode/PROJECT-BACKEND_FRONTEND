"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signoVital_repositorio_1 = require("./repository/signoVital.repositorio");
const repositorio = new signoVital_repositorio_1.SignoVital;
repositorio.obtenerSignos().forEach((signos) => {
    console.log(`-`.repeat(8) + `\nCódigo: ${signos.codigo} - Descripción: ${signos.descripcion}`);
});
//# sourceMappingURL=app.test.js.map