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
const crearPaciente_useCase_1 = require("../crearPaciente.useCase");
describe("Caso de uso: Crear Paciente", () => {
    it("Debería crear un paciente correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            cedula: "0987654321",
            nombres: "Carlos García",
            fechaNacimiento: "1995-06-15",
        };
        const paciente = yield (0, crearPaciente_useCase_1.crearPaciente)(data);
        expect(paciente).toHaveProperty("cedula", "0987654321");
        expect(paciente).toHaveProperty("nombres", "Carlos García");
        expect(paciente.fechaNacimiento).toEqual(new Date("1995-06-15"));
    }));
});
//# sourceMappingURL=crearPaciente.test.js.map