import { crearPaciente } from "../crearPaciente.useCase";

describe("Caso de uso: Crear Paciente", () => {
    it("Debería crear un paciente correctamente", async () => {
        const data = {
            cedula: "0987654321",
            nombres: "Carlos García",
            fechaNacimiento:"1995-06-15",
        };

        const paciente = await crearPaciente(data);

        expect(paciente).toHaveProperty("cedula", "0987654321");
        expect(paciente).toHaveProperty("nombres", "Carlos García");
        expect(paciente.fechaNacimiento).toEqual(new Date("1995-06-15"));
    });
});
