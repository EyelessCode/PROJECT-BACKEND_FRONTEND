import { Request, Response, Router } from "express";
import { SignoVitalController } from "../infrastructure/controller/signoVital.controller";
import { prisma } from "../infrastructure/data/prisma.service";

const ruta=Router()
/* const controlador=new SignoVitalController()

ruta.get('/',controlador.controladorObtenerSignos)
ruta.get('/:codigo',controlador.controladorObtenerUnSigno)
ruta.post('/',controlador.controladorCrearSigno)
ruta.put('/:codigo',controlador.controladorActualizarSigno)
ruta.delete('/:codigo',controlador.controladorEliminarSigno) */

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

export {ruta}