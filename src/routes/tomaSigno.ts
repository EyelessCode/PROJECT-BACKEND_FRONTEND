import { Request, Response, Router } from "express"
import { TomaSignoController } from "../infrastructure/controller/tomaSigno.controller"
import { validarCodigo } from "../infrastructure/validation/validation.middleware"
import path from "path"

const ruta=Router()
const controlador=new TomaSignoController()

ruta.get("/html",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","..","view","tomaSigno.html"))
})
ruta.post("/",controlador.registrarTomaSigno.bind(controlador))

export{ruta}