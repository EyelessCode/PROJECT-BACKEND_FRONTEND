// que carajos va acá
export class SignoVitalEntity{
    constructor(
        public codigo:number,
        public descipcion:string,
        public unidad:string,
        public valorMinimo:number,
        public valorMaximo:number,
    ){}

    validarValores():boolean{ // Aquí pues, valida si es menor a 0 o mayor que el mínimo!
        return this.valorMinimo>=0&&this.valorMaximo>this.valorMinimo
    }

    validarDescripcion():boolean{ // Valida si hay caracteres o si NO hay espacio innecesarios!
        return this.descipcion.trim().length>0
    }
}