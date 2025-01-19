import { Router } from "express"
import { EnfermeraController } from "../infrastructure/controller/enfermera.controller"
import { validarCodigo, validarEnfermera } from "../infrastructure/validation/validation.middleware"

const ruta=Router()
const controlador=new EnfermeraController()

ruta.get("/",controlador.controladorObtenerEnfermeras.bind(controlador))
ruta.get("/:codigo",validarCodigo,controlador.controladorObtenerEnfermera.bind(controlador))
ruta.post("/",validarEnfermera,controlador.controladorCrearEnfermera.bind(controlador))
ruta.put("/:codigo",validarCodigo,validarEnfermera,controlador.controladorActualizarEnfermera.bind(controlador))
ruta.delete("/:codigo",validarCodigo,controlador.controladorEliminarEnfermera.bind(controlador))

export {ruta}