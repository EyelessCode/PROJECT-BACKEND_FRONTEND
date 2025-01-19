import { Router } from "express";
import { PacienteController } from "../infrastructure/controller/paciente.controller";
import { validarCodigo, validarPaciente } from "../infrastructure/validation/validation.middleware";

const ruta=Router()
const controlador=new PacienteController()

ruta.get('/',controlador.controladorObtenerPacientes.bind(controlador))
ruta.get('/:codigo',validarCodigo,controlador.controladorObtenerPaciente.bind(controlador))
ruta.post('/',validarPaciente,controlador.controladorCrearPaciente.bind(controlador))
ruta.put('/:codigo',validarPaciente,validarCodigo,controlador.controladorActualizarPaciente.bind(controlador))
ruta.delete('/:codigo',validarCodigo,controlador.controladorEliminarPaciente.bind(controlador))

export {ruta}
