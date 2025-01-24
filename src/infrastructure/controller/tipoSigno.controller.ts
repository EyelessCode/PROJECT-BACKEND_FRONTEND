import { Request, Response } from "express";
import { TipoSignoCasoUso } from "../../app/useCase/tipoSigno.useCase";
import { SignoVitalRepositorio } from "../repository/tipoSigno.repository";
// import { actualizarSignoVital, eliminarSignoVital, obtenerSignosVitales, obtenerUnSignoVital } from "../../app/useCase/signoVital.useCase";

export class SignoVitalController{
    private casoUso:TipoSignoCasoUso
    constructor() {
        const repositorio=new SignoVitalRepositorio()
        this.casoUso=new TipoSignoCasoUso(repositorio)
    }
    async controladorCrearSigno(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const nuevoSignoVital=await this.casoUso.crearTipoSigno(data)
            return res.status(201).json(nuevoSignoVital)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al crear el signo vital",
                error: error
            })
        }
    }

    async controladorActualizarSigno(req:Request,res:Response):Promise<any> {
        try {
            const codigo=parseInt(req.params.codigo)

            

            const data=req.body

            const signoVitalActualizado=await this.casoUso.actualizarTipoSigno(codigo,data)
            
            if (!signoVitalActualizado) {
                return res.status(404).json({
                    message: `El signo vital: ${codigo} no existe`
                })
            }

            return res.status(200).json(signoVitalActualizado)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al actualizar el signo vital",
                error: error

            })
        }
    }

    async controladorEliminarSigno(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)

            
            // const data=req.body

            const eliminar=await this.casoUso.eliminarTipoSigno(codigo)

            if (!eliminar) {
                return res.status(404).json({
                    message: `El signo vital: ${codigo} no existe`
                })
            }

            return res.status(200).json(eliminar)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al eliminar el signo vital",
                error: error

            })
        }
    }
    
    async controladorObtenerSigno(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)

            
            // const data=req.body

            const obtenerSigno=await this.casoUso.obtenerTipoSigno(codigo)

            if (!obtenerSigno) {
                return res.status(404).json({
                    message: `El signo vital: ${codigo} no existe`
                })
            }

            return res.status(200).json(obtenerSigno)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al obtener el signo vital",
                error: error

            })
        }
    }

    async controladorObtenerSignos(req:Request,res:Response):Promise<any>{
        try {
            // const data=req.body

            const obtenerSignos=await this.casoUso.obtenerSignosVitales()
            return res.status(200).json(obtenerSignos)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"Error al obtener los signos vitales",
                error: error

            })
        }
    }
}