"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const fs_1 = require("fs");
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
const PATH = `${__dirname}`;
const cortarArchivos = (archivo) => {
    const archivoCortar = archivo.split('.').shift();
    return archivoCortar;
};
(0, fs_1.readdirSync)(PATH).filter((archivo) => {
    const limpiar = cortarArchivos(archivo);
    if (limpiar !== "index") {
        Promise.resolve(`${`./${limpiar}`}`).then(s => __importStar(require(s))).then((rutaModulo) => {
            console.log(`La ruta ${limpiar} encontrado/a`);
            ruta.use(`/${limpiar}`, rutaModulo.ruta);
        });
    }
});
//# sourceMappingURL=index.js.map