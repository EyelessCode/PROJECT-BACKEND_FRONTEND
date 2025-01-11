import express from 'express'
import 'dotenv/config'

const app=express()
const PORT=process.env.PORT||4001

app.use(express.json())
app.use(express.static('public/view'))

app.listen(PORT,()=>console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${PORT}`))
