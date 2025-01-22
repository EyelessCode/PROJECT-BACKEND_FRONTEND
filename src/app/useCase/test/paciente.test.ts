/* import { PacienteCasoUso } from "../paciente.useCase";
import { PacienteRepositorio } from "../../../infrastructure/repository/paciente.repository";

const mockRepositorio = new PacienteRepositorio();
const casoUso = new PacienteCasoUso(mockRepositorio);

jest.mock("../../../infrastructure/repository/paciente.repository");

describe("Paciente Caso de Uso", () => {
    it("Debería crear un paciente correctamente", async () => {
        const data = { cedula: "1234567890", nombres: "Juan Pérez", fechaNacimiento: "1990-01-01" };
        mockRepositorio.crearPaciente = jest.fn().mockResolvedValue(data);

        const resultado = await casoUso.crearPaciente(data);

        expect(resultado).toEqual(data);
        expect(mockRepositorio.crearPaciente).toHaveBeenCalledWith(data);
    });

    it("Debería lanzar error si el paciente no existe", async () => {
        mockRepositorio.obtenerPaciente = jest.fn().mockResolvedValue(null);

        await expect(casoUso.obtenerPaciente(999)).rejects.toThrow("No se pudo obtener un Paciente");
    });
}); */
