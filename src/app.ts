import express, { Request, Response } from 'express'
import 'dotenv/config'
import {ruta} from './routes'
import { swaggerSpec, swaggerUi } from './infrastructure/doc/swagger.config'
import path from 'path'

const app=express()
const PORT=process.env.PORT||4001

app.use(express.json())
app.use(express.static(path.join(__dirname,"..",'public')))

app.use("/comsulmed",ruta)
app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))

// Para prueba
app.get('/test',(req:Request,res:Response)=>{
    res.send('PROBANDO SI EL SERVIDOR SI CONECTA!')
})

app.listen(PORT,()=>console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${PORT}`))
