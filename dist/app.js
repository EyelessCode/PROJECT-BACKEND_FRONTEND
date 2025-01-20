"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes");
const swagger_config_1 = require("./infrastructure/doc/swagger.config");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
app.use(express_1.default.json());
app.use("/comsulmed", routes_1.ruta);
app.use("/docs", swagger_config_1.swaggerUi.serve, swagger_config_1.swaggerUi.setup(swagger_config_1.swaggerSpec));
app.get('/test', (req, res) => {
    res.send('PROBANDO SI EL SERVIDOR SI CONECTA!');
});
app.listen(PORT, () => console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${PORT}`));
//# sourceMappingURL=app.js.map