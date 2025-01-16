import { Request, Response } from 'express';
import { SignoVitalRepositorio } from '../repository/signoVital.repository';
import {handleHttp} from '../../util/error.until';
import { generarMensajeError, generarMensajeSatisfactorio } from '../../util/mensaje.until';
import { SignoVitalService } from '../../app/service/signoVital.service';

export class SignoVitalController{
    private service:SignoVitalService

    constructor() {
        const repositorio=new SignoVitalRepositorio()
        this.service=new SignoVitalService(repositorio)
    }

    controladorObtenerSignos=(req:Request,res:Response)=>{
        try {
            let signo=this.service.obtenerSignos()
            res.json(signo)
        } catch (error) {
            handleHttp(res.status(404),'ERROR_EN_OBTENER_SIGNOS',error)
            
        }

    }

    controladorObtenerUnSigno=(req:Request,res:Response)=>{ // Cambiado!
        try {
            let buscarCodigo=parseInt(req.params.codigo)

            if (isNaN(buscarCodigo)) {
                res.status(400).json({
                    mensaje: "Código inválido!"
                })
            }

            let SoloSigno=this.service.obtenerUnSigno(buscarCodigo)

    
            if (!SoloSigno) {
                res.status(404).json(
                    generarMensajeError()
                )
            }
            
            res.json(SoloSigno)
            
        } catch (error) {
            handleHttp(res,'ERROR_EN_OBTENER_UN_SIGNO',error)
        }

    }

    controladorCrearSigno=(req:Request,res:Response)=>{
        try {
            let crearSigno=this.service.crearSigno(req.body)
            res.status(201).json(crearSigno)
        } catch (error) {
            handleHttp(res,'ERROR_CREAR_SIGNO',error)
        }
    }

    controladorActualizarSigno=(req:Request,res:Response)=>{

        try {
            let buscarCodigo=parseInt(req.params.codigo)

            if (isNaN(buscarCodigo)) {
                res.status(400).json({
                    //// generarMensajeError()
                    mensaje:"Código inválido"
                })
            }

            let actualizarSigno=this.service.actualizarSigno(buscarCodigo,req.body)
    
            if (!actualizarSigno) {
                res.status(404).json(
                    generarMensajeError()
                )
            }

            res.json(actualizarSigno)

        } catch (error) {
            handleHttp(res,'ERROR_ACTUALIZAR_SIGNO',error)
        }
    }

    controladorEliminarSigno=(req:Request,res:Response)=>{
        try {
            let buscarCodigo=parseInt(req.params.codigo)

            if (isNaN(buscarCodigo)) {
                res.status(400).json({
                    mensaje:"Código inválido!"
                })
            }
            
            let eliminarSigno=this.service.eliminarSigno(buscarCodigo)

            if(eliminarSigno){
                res.status(200).json(
                    generarMensajeSatisfactorio()
                )
            }else{
                res.status(404).json(
                    generarMensajeError()
                )
            }
        } catch (error) {
            handleHttp(res,'ERROR_ELIMINAR_SIGNO',error)
        }
    }
}