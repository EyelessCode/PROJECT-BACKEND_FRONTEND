"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const ruta = (0, express_1.Router)();
exports.ruta = ruta;
ruta.get("/html", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "view", "other", "evento.html"));
});
//# sourceMappingURL=evento.js.map