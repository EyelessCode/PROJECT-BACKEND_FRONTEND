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
const paciente_useCase_1 = require("../paciente.useCase");
const prisma_service_1 = require("../../../infrastructure/data/prisma.service");
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_service_1.prisma.paciente.deleteMany();
}));
describe("Caso de uso: Crear Paciente", () => {
    it("Debería crear un paciente correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            codigo: 45,
            cedula: "0987452896",
            nombres: "Pepe Gonzáles",
            fechaNacimiento: "2004-12-12",
        };
        const paciente = yield (0, paciente_useCase_1.crearPaciente)(data);
        expect(paciente).toHaveProperty("cedula", "0987452896");
        expect(paciente).toHaveProperty("nombres", "Pepe Gonzáles");
        expect(paciente.fechaNacimiento).toBe("2004-12-12");
    }));
});
//# sourceMappingURL=crearPaciente.test.js.map