import { Request, Response, Router } from "express"
import path from "path"


const ruta=Router()

ruta.get("/html",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","..","view","other","noticia.html"))
})

export {ruta}