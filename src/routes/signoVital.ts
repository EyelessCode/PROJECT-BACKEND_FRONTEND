import { Request, Response, Router } from "express";
import { SignoVitalController } from "../infrastructure/controller/signoVital.controller";
import { prisma } from "../infrastructure/data/prisma.service";

const ruta=Router()
const controlador=new SignoVitalController()
/* const controlador=new SignoVitalController()

ruta.get('/',controlador.controladorObtenerSignos)
ruta.get('/:codigo',controlador.controladorObtenerUnSigno)
ruta.post('/',controlador.controladorCrearSigno)
ruta.put('/:codigo',controlador.controladorActualizarSigno)
ruta.delete('/:codigo',controlador.controladorEliminarSigno) */

//! PARA HACER PRUEBA DE QUE SI CONECTE EL BD
ruta.get('/test',async(req:Request,res:Response)=>{
    try {
        const signoVitales=await prisma.signoVital.findMany()
        res.json({
            sucess:true,
            data:signoVitales
        })
    } catch (error) {
        console.error(`Error al conectar con la BD, ${error}`);
        res.status(500).json({
            succes:false,
            error:"Error al conectar con la BD"
        })
    }
})

ruta.get('/',controlador.controladorObtenerSignos.bind(controlador))
ruta.get('/:codigo',controlador.controladorObtenerSigno.bind(controlador))
ruta.post('/',controlador.controladorCrearSigno.bind(controlador))
ruta.put('/:codigo',controlador.controladorActualizarSigno.bind(controlador))
ruta.delete('/:codigo',controlador.controladorEliminarSigno.bind(controlador))

export {ruta}