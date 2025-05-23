import express, { Request, Response } from 'express'
import 'dotenv/config'
import {ruta} from './routes'
import { swaggerSpec, swaggerUi } from './infrastructure/doc/swagger.config'
import path from 'path'
import cors from 'cors'

const app=express()
const PORT=process.env.PORT||4001

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"..",'public')))

app.use("/comsulmed",ruta)
app.get("/comsulmed",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","view","home.html"))
})
app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))

//? Para prueba
app.get('/test',(req:Request,res:Response)=>{
    res.send('PROBANDO SI EL SERVIDOR SI CONECTA!')
})

app.listen(PORT,()=>console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${PORT}`))
