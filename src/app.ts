import express, { Request, Response } from 'express'
import 'dotenv/config'

const app=express()
const PORT=process.env.PORT||4001

app.use(express.json())
app.use(express.static('public/view'))
app.get('/test',(req:Request,res:Response)=>{
    res.send('PROBANDO SI EL SERVIDOR SI CONECTA!')
})

app.listen(PORT,()=>console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${PORT}`))
