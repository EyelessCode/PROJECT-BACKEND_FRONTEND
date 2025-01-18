import { Router } from "express";
import { PacienteController } from "../infrastructure/controller/paciente.controller";
import { validarPaciente } from "../infrastructure/validation/validation.middleware";

const ruta=Router()
const controlador=new PacienteController()

ruta.get('/',controlador.controladorObtenerPacientes.bind(controlador))
ruta.get('/:codigo',controlador.controladorObtenerPaciente.bind(controlador))
ruta.post('/',validarPaciente,controlador.controladorCrearPaciente.bind(controlador))
ruta.put('/:codigo',validarPaciente,controlador.controladorActualizarPaciente.bind(controlador))
ruta.delete('/:codigo',controlador.controladorEliminarPaciente.bind(controlador))

export {ruta}
