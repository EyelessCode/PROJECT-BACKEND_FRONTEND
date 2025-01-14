import { Response } from "express";

const handleHttp500=(res:Response,error:string,errorBruto:any)=>{
    console.log(errorBruto);
    res.status(500)
    res.send({error})
}

const handleHttp404=(res:Response,error:string,errorBruto:any)=>{
    console.log(errorBruto);
    res.status(404)
    res.send({error})
}

export {handleHttp500,handleHttp404};