import { Router } from "express";
import { CentroMedicoController } from "../infrastructure/controller/centroMedico.controller";
import { validarCentroMedico, validarCodigo } from "../infrastructure/validation/validation.middleware";

const ruta=Router()
const controlador=new CentroMedicoController()

ruta.get("/",controlador.controladorObtenerCentrosMedicos.bind(controlador))
ruta.get("/:codigo",validarCodigo,controlador.controladorObtenerCentroMedico.bind(controlador))
ruta.post("/",validarCentroMedico,controlador.controladorCrearCentroMedico.bind(controlador))
ruta.put("/:codigo",validarCodigo,validarCentroMedico,controlador.controladorActualizarCentroMedico.bind(controlador))
ruta.delete("/:codigo",validarCodigo,controlador.controladorEliminarCentroMedico.bind(controlador))

export {ruta}