import { Request, Response, Router } from "express"
import path from "path"

const ruta=Router()

ruta.get("/contacto/html",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","..","..","view","other","evento.html"))
})

export {ruta}