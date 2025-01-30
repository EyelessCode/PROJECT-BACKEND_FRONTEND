"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TomaSignosRepositorio = void 0;
const prisma_service_1 = require("../data/prisma.service");
class TomaSignosRepositorio {
    crearTomaSigno(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.tomaSignos.create({
                data: data
            });
        });
    }
    obtenerTomaSigno(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.tomaSignos.findUnique({
                where: {
                    numero: codigo
                }
            });
        });
    }
    obtenerTomaSignos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_service_1.prisma.tomaSignos.findMany();
        });
    }
}
exports.TomaSignosRepositorio = TomaSignosRepositorio;
//# sourceMappingURL=tomaSignos.repository.js.map