import { Router } from "express";
import { SignoPacienteController } from "../infrastructure/controller/signoPaciente.controller";
// import { validarCodigo } from "../infrastructure/validation/validation.middleware";

const ruta=Router()
const controlador=new SignoPacienteController()

ruta.get("/",controlador.controladorObtenerSignosPacientes.bind(controlador))
ruta.post("/",controlador.controladorRegistrarSignoPaciente.bind(controlador))

export{ruta}