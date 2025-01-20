"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUi = exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
const opciones = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Fichas Médicas",
            version: "1.0.0"
        },
    },
    apis: ["./src/routes/*.ts"]
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(opciones);
exports.swaggerSpec = swaggerSpec;
//# sourceMappingURL=swagger.config.js.map