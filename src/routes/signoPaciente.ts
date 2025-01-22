import { Router } from "express";
import { SignoPacienteController } from "../infrastructure/controller/signoPaciente.controller";
// import { validarCodigo } from "../infrastructure/validation/validation.middleware";

const ruta=Router()
const controlador=new SignoPacienteController()

ruta.post("/",controlador.registrarSignoPaciente.bind(controlador))

export{ruta}