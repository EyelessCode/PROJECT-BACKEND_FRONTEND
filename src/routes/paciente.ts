import { Router } from "express";
import { PacienteController } from "../infrastructure/controller/paciente.controller";

const ruta=Router()
const controlador=new PacienteController()

ruta.get('/')

export {ruta}
