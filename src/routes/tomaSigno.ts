import { Router } from "express"
import { TomaSignoController } from "../infrastructure/controller/tomaSigno.controller"
import { validarCodigo } from "../infrastructure/validation/validation.middleware"

const ruta=Router()
const controlador=new TomaSignoController()

ruta.post("/",controlador.registrarTomaSigno.bind(controlador))

export{ruta}