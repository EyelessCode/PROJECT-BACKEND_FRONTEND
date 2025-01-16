export class SignoVital {
    constructor(
        public codigo: number,
        public descripcion: string
    ) {}

    // Método para actualizar la descripción del signo vital
    actualizarDescripcion(nuevaDescripcion: string): void {
        if (!nuevaDescripcion || nuevaDescripcion.trim().length === 0) {
            throw new Error("La descripción no puede estar vacía.");
        }
        this.descripcion = nuevaDescripcion.trim();
    }
}
