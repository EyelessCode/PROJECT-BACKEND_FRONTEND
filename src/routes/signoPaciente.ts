import { Request, Response, Router } from "express";
import { SignoPacienteController } from "../infrastructure/controller/signoPaciente.controller";
import path from "path";
// import { validarCodigo } from "../infrastructure/validation/validation.middleware";

const ruta=Router()
const controlador=new SignoPacienteController()

ruta.get("/html",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","..","view","signoPaciente.html"))
})
ruta.get("/",controlador.controladorObtenerSignosPacientes.bind(controlador))
ruta.post("/",controlador.controladorRegistrarSignoPaciente.bind(controlador))

export{ruta}