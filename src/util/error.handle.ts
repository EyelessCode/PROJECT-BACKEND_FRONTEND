import { Response } from "express";

const handleHttp=(res:Response,error:string,errorBruto:any)=>{
    console.log(errorBruto);
    res.status(500)
    res.send({error})
}

export {handleHttp};