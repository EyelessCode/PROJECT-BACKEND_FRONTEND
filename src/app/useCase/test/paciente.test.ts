import { crearPaciente,actualizarPaciente, eliminarPaciente, obtenerPaciente } from "../paciente.useCase";
import { prisma } from "../../../infrastructure/data/prisma.service";

beforeEach(async () => {
    await prisma.paciente.deleteMany(); // Limpia la base de datos antes de cada test
    await prisma.paciente.create({
        data: {
            codigo: 45,
            cedula: "0987452896",
            nombres: "Pepe Gonzáles",
            fechaNacimiento: "2004-12-12",
        },
    });
});

describe("Caso de uso: Crear Paciente", () => {
    it("Debería CREAR un paciente correctamente", async () => {
        const data = {
            codigo:46,
            cedula: "0987452897",
            nombres: "Juan Pérez",
            fechaNacimiento: "2003-11-10",
        };

        const paciente = await crearPaciente(data);

        // expect(codigo).toHaveProperty("codigo", 45);
        expect(paciente).toHaveProperty("cedula", "0987452897");
        expect(paciente).toHaveProperty("nombres", "Juan Pérez");
        expect(paciente.fechaNacimiento).toBe("2003-11-10")

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
            nombres: "Carlos Ramírez",
            fechaNacimiento: "2002-05-15",
        };

        const paciente = await actualizarPaciente(codigo,data);

        // expect(codigo).toHaveProperty("codigo", 45);
        expect(paciente).toHaveProperty("cedula", "0999999999");
        expect(paciente).toHaveProperty("nombres", "Carlos Ramírez");
        expect(paciente?.fechaNacimiento).toBe("2002-05-15")

        /* const pacienteDB = await prisma.paciente.findUnique({
            where: { cedula: "0987654321" },
        });
        expect(pacienteDB).not.toBeNull(); */

    });

    it("Debería lanzar un error si el código no existe", async () => {
        await expect(obtenerPaciente(1)).rejects.toThrow("No existe un Paciente con ese código");
    });
});

describe("Caso de uso: Eliminar Paciente", () => {
    it("Debería ELIMINAR un paciente correctamente", async () => {
        const codigo = 45
        const eliminado = await eliminarPaciente(codigo);


        
        expect(eliminado).not.toBeNull();
        expect(eliminado).toHaveProperty("codigo", 45);
    });

    it("Debería lanzar un error si el código no existe", async () => {
        await expect(eliminarPaciente(40)).rejects.toThrow("No se pudo eliminar un Paciente");
    });
});


describe("Caso de uso: Obtener un Paciente", () => {
    it("Debería OBTENER un paciente correctamente", async () => {
        const codigo = 45;
        const paciente = await obtenerPaciente(codigo);

        

        expect(paciente).toHaveProperty("cedula", "0987452896");
        expect(paciente).toHaveProperty("nombres", "Pepe Gonzáles");
        expect(paciente?.fechaNacimiento).toBe("2004-12-12");
    });

    it("Debería lanzar un error si el código no existe", async () => {
        await expect(obtenerPaciente(999)).rejects.toThrow("No se pudo obtener un Paciente");
    });
});


