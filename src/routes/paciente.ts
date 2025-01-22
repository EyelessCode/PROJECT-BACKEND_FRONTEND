import { Request, Response, Router } from "express";
import { PacienteController } from "../infrastructure/controller/paciente.controller";
import { validarCodigo, validarPaciente } from "../infrastructure/validation/validation.middleware";
import path from "path";

const ruta=Router()
const controlador=new PacienteController()

ruta.get("/",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","..","view","paciente.html"))
})
ruta.get('/',controlador.controladorObtenerPacientes.bind(controlador))
ruta.get('/:codigo',validarCodigo,controlador.controladorObtenerPaciente.bind(controlador))
ruta.post('/',validarPaciente,controlador.controladorCrearPaciente.bind(controlador))
ruta.put('/:codigo',validarPaciente,validarCodigo,controlador.controladorActualizarPaciente.bind(controlador))
ruta.delete('/:codigo',validarCodigo,controlador.controladorEliminarPaciente.bind(controlador))

export {ruta}
