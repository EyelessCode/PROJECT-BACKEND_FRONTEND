import { Request, Response, Router } from "express";
import path from "path";

const ruta=Router()

ruta.get("/about/html",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","..","view","other","about.html"))
})

export {ruta}