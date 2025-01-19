import { Router } from "express";
import { CentroMedicoController } from "../infrastructure/controller/centroMedico.controller";
import { validarCentroMedico } from "../infrastructure/validation/validation.middleware";

const ruta=Router()
const controlador=new CentroMedicoController()

ruta.get("/",controlador.controladorObtenerCentrosMedicos.bind(controlador))
ruta.get("/:codigo",controlador.controladorObtenerCentroMedico.bind(controlador))
ruta.post("/",validarCentroMedico,controlador.controladorCrearCentroMedico.bind(controlador))
ruta.put("/:codigo",validarCentroMedico,controlador.controladorActualizarCentroMedico.bind(controlador))
ruta.delete("/:codigo",controlador.controladorEliminarCentroMedico.bind(controlador))

export {ruta}