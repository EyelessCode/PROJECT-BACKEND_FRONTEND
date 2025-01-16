export class PacienteEntity{
    constructor(
        public codigo:number,
        public cedula:string,
        public nombres:string,
        public fechaNacimiento:Date
    ) {}

    calcularEdad():number{
        const hoy=new Date()
        const edad=hoy.getFullYear()-this.fechaNacimiento.getFullYear()
        const mes=hoy.getMonth()-this.fechaNacimiento.getMonth()

        if (mes<0||(mes===0&&hoy.getDate()<this.fechaNacimiento.getDate())) {
            return edad -1
        }

        return edad
    }

    validarCedula():boolean{
        return this.cedula.trim().length>0
    }

    validarNombres():boolean{
        return this.nombres.trim().length>0
    }
}