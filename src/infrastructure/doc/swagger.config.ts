import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const opciones={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de Fichas Médicas",
            version:"1.0.0"
        },
    },
    apis:["./src/routes/*.ts"]
}

const swaggerSpec=swaggerJSDoc(opciones)

export{swaggerSpec,swaggerUi}