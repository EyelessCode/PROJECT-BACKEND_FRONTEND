const mensajeSatisfactorio=(res:Response,error:string,errorBruto:any)=>{
    return{
        message:"Petición exitosa",
    }
}

const mensajeError=(res:Response,error:string,errorBruto:any)=>{
    return{
        message:"Error en la petición",
    }
}

export {mensajeError,mensajeSatisfactorio}
