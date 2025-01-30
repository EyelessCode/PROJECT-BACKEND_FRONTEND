import { Request, Response, Router } from "express"
import path from "path"


const ruta=Router()

ruta.get("/contacto/html",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","..","..","view","other","contacto.html"))
})

export {ruta}