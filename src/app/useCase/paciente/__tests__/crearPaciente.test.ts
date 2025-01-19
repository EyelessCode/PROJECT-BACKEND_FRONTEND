import { crearPaciente } from "../crearPaciente.useCase";
import { prisma } from "../../../../infrastructure/data/prisma.service";

beforeEach(async () => {
    await prisma.paciente.deleteMany();
});

describe("Caso de uso: Crear Paciente", () => {
    it("Debería crear un paciente correctamente", async () => {
        const data = {
            cedula: "0987452896",
            nombres: "Pepe Gonzáles",
            fechaNacimiento: "2004-12-12",
        };

        const paciente = await crearPaciente(data);

        expect(paciente).toHaveProperty("cedula", "0987452896");
        expect(paciente).toHaveProperty("nombres", "Pepe Gonzáles");
        expect(paciente.fechaNacimiento).toBe("2004-12-12")

        /* const pacienteDB = await prisma.paciente.findUnique({
            where: { cedula: "0987654321" },
        });
        expect(pacienteDB).not.toBeNull(); */

    });
});

