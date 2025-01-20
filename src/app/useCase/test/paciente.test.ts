import { crearPaciente,actualizarPaciente, eliminarPaciente, obtenerPaciente } from "../paciente.useCase";
import { prisma } from "../../../infrastructure/data/prisma.service";

beforeEach(async () => {
    await prisma.paciente.deleteMany();
});

describe("Caso de uso: Crear Paciente", () => {
    it("Debería CREAR un paciente correctamente", async () => {
        const data = {
            codigo:45,
            cedula: "0987452896",
            nombres: "Pepe Gonzáles",
            fechaNacimiento: "2004-12-12",
        };

        const paciente = await crearPaciente(data);

        // expect(codigo).toHaveProperty("codigo", 45);
        expect(paciente).toHaveProperty("cedula", "0987452896");
        expect(paciente).toHaveProperty("nombres", "Pepe Gonzáles");
        expect(paciente.fechaNacimiento).toBe("2004-12-12")

        /* const pacienteDB = await prisma.paciente.findUnique({
            where: { cedula: "0987654321" },
        });
        expect(pacienteDB).not.toBeNull(); */

    });
});

describe("Caso de uso: Actualizar Paciente", () => {
    it("Debería ACTUALIZAR un paciente correctamente", async () => {
        const codigo=45

        const data = {
            codigo:40,
            cedula: "0999999999",
            nombres: "Pero Gonzáles",
            fechaNacimiento: "2004-12-01",
        };

        const paciente = await actualizarPaciente(codigo,data);

        // expect(codigo).toHaveProperty("codigo", 45);
        expect(paciente).toHaveProperty("cedula", "0999999999");
        expect(paciente).toHaveProperty("nombres", "Pero Gonzáles");
        expect(paciente?.fechaNacimiento).toBe("2004-12-01")

        /* const pacienteDB = await prisma.paciente.findUnique({
            where: { cedula: "0987654321" },
        });
        expect(pacienteDB).not.toBeNull(); */

    });

    it("Debería lanzar un error si el código no existe", async () => {
        await expect(eliminarPaciente(999)).rejects.toThrow("No se pudo eliminar un Paciente");
    });
});

describe("Caso de uso: Eliminar Paciente", () => {
    it("Debería ELIMINAR un paciente correctamente", async () => {
        const codigo = 45; // Asume que este código es válido
        const eliminado = await eliminarPaciente(codigo);


        
        expect(eliminado).not.toBeNull();
        expect(eliminado).toHaveProperty("codigo", 1);
    });

    it("Debería lanzar un error si el código no existe", async () => {
        await expect(eliminarPaciente(999)).rejects.toThrow("No se pudo eliminar un Paciente");
    });
});


describe("Caso de uso: Obtener un Paciente", () => {
    it("Debería OBTENER un paciente correctamente", async () => {
        const codigo = 45;
        const paciente = await obtenerPaciente(codigo);

        

        expect(paciente).toHaveProperty("cedula", "0987654321");
        expect(paciente).toHaveProperty("nombres", "Juan Pérez");
        expect(paciente?.fechaNacimiento).toBe("2000-01-01");
    });

    it("Debería lanzar un error si el código no existe", async () => {
        await expect(eliminarPaciente(999)).rejects.toThrow("No se pudo eliminar un Paciente");
    });
});


