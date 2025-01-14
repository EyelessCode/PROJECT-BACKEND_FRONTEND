import { Router } from "express";
import { SignoVitalController } from "../controller/signoVital.controller";

const ruta=Router()
const controlador=new SignoVitalController()

ruta.get('/',controlador.controladorObtenerSignos)
ruta.get('/:codigo',controlador.controladorObtenerUnSigno)
ruta.post('/',controlador.controladorCrearSigno)
ruta.put('/:codigo',controlador.controladorActualizarSigno)
ruta.delete('/:codigo',controlador.controladorEliminarSigno)