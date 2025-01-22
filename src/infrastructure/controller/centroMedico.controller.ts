import { Request, Response } from "express";
import { CentroMedicoCasoUso } from "../../app/useCase/centroMedico.useCase";
import { CentroMedicoRepositorio } from "../repository/centroMedico.repository";
// import { actualizarCentroMedico, crearCentroMedico, eliminarCentroMedico, obtenerCentroMedico, obtenerCentrosMedicos } from "../../app/useCase/centroMedico.useCase";

export class CentroMedicoController{
    private casoUso:CentroMedicoCasoUso

    constructor() {
        const repositorio=new CentroMedicoRepositorio()
        this.casoUso=new CentroMedicoCasoUso(repositorio)
    }
    async controladorCrearCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const data=req.body
            const crear=await this.casoUso.crearCentroMedico(data)

            return res.status(201).json(crear)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al crear un Centro Médico",
                error: error,
            })
        }
    }

    async controladorEliminarCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            
            // const data=req.body

            const eliminar=await this.casoUso.eliminarCentroMedico(codigo)

            if (!eliminar) {
                return res.status(404).json({
                    message: `El Centro Médico: ${codigo} no existe`
                })
            }

            return res.status(200).json(eliminar)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al eliminar un Centro Médico",
                error: error,
            })
        }
    }

    async controladorActualizarCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            
            const data=req.body

            const actualizar=await this.casoUso.actualizarCentroMedico(codigo,data)

            if (!actualizar) {
                return res.status(404).json({
                    message: `El Centro Médico: ${codigo} no existe`
                })
            }

            return res.status(200).json(actualizar)

        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al actualizar un Centro Médico",
                error: error,
            })
        }
    }

    async controladorObtenerCentroMedico(req:Request,res:Response):Promise<any>{
        try {
            const codigo=parseInt(req.params.codigo)
            
            

            const obtener=await this.casoUso.obtenerCentroMedico(codigo)

            if (!obtener) {
                return res.status(404).json({
                    message: `El Centro Médico: ${codigo} no existe`
                })
            }

            return res.status(200).json(obtener)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al obtener un Centro Médico",
                error: error,
            })
        }
    }

    async controladorObtenerCentrosMedicos(req:Request,res:Response):Promise<any>{
        try {
            const obtener=await this.casoUso.obtenerCentrosMedicos()

            return res.status(200).json(obtener)
        } catch (error) {
            console.error(error);
            // logger.error(`ERROR AL CREAR AL CENTRO MÉDICO. ${error}`)
            return res.status(500).json({
                message:"Error al obtener los Centros Médicos",
                error: error,
            })
        }
    }
}