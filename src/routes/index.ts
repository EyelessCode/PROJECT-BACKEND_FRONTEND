import { Router } from "express";
import { readdirSync } from "fs";

const rutas=Router()
const PATH=`${__dirname}`

const cortarArchivos=(archivo:string)=>{
    const archivoCortar=archivo.split('.').shift()
    return archivoCortar
}

readdirSync(PATH).filter((archivo)=>{
    const limpiar=cortarArchivos(archivo)
    
    if (limpiar!=="index") {
        import (`/${limpiar}`).then((rutaModulo)=>{
            console.log(`La ruta ${limpiar} encontrado/a`);
            rutas.use(`/${limpiar}`,rutaModulo.rutas)
        })
    }
})

export {rutas};
