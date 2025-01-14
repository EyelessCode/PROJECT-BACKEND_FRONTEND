import { Request, Response } from 'express';
import { IRepositorioSignoVital } from '../interface/repositorio.interface';
import { SignoVital } from '../repository/signoVital.repository';
import {handleHttp500,handleHttp404} from '../util/error.handle';
import { mensajeError, mensajeSatisfactorio } from '../util/mensaje.handle';

export class SignoVitalController{
    private repositorioAtributo:IRepositorioSignoVital

    constructor(repositorio:IRepositorioSignoVital=new SignoVital()) {
        this.repositorioAtributo=repositorio
    }

    controladorObtenerSignos=(req:Request,res:Response)=>{
        try {
            let signo=this.repositorioAtributo.obtenerSignos()
            res.json(signo)
        } catch (error) {
            handleHttp404(res.status(404),'ERROR_EN_OBTENER_SIGNOS',error)
            
        }

    }

    controladorObtenerUnSigno=(req:Request,res:Response)=>{
        try {
            let buscarCodigo=parseInt(req.params.codigo)
            let SoloSigno=this.repositorioAtributo.obtenerUnSigno(buscarCodigo)
    
            if (SoloSigno) {
                res.json(SoloSigno)
            }

        } catch (error) {
            handleHttp404(res,'ERROR_EN_OBTENER_UN_SIGNO',error)
        }

    }

    controladorCrearSigno=(req:Request,res:Response)=>{
        try {
            let crearSigno=this.repositorioAtributo.crearSigno(req.body)
            res.status(201).json(crearSigno)
        } catch (error) {
            handleHttp404(res,'ERROR_CREAR_SIGNO',error)
        }
    }

    controladorActualizarSigno=(req:Request,res:Response)=>{

        try {
            let buscarCodigo=parseInt(req.params.codigo)

            let actualizarSigno=this.repositorioAtributo.actualizarSigno(buscarCodigo,req.body)
    
            if (actualizarSigno) {
                res.json(actualizarSigno)
            }
        } catch (error) {
            handleHttp404(res,'ERROR_ACTUALIZAR_SIGNO',error)
        }
    }

    controladorEliminarSigno=(req:Request,res:Response)=>{
        try {
            let buscarCodigo=parseInt(req.params.codigo)
            
            let eliminarSigno=this.repositorioAtributo.eliminarSigno(buscarCodigo)

            if(eliminarSigno){
                res.status(200).json(
                    mensajeSatisfactorio
                )
            }else{
                res.status(404).json(
                    mensajeError
                )
            }
        } catch (error) {
            handleHttp404(res,'ERROR_ELIMINAR_SIGNO',error)
        }
    }
}