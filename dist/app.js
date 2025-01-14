"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/test', (req, res) => {
    res.send('PROBANDO SI EL SERVIDOR SI CONECTA!');
});
app.listen(PORT, () => console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${PORT}`));
//# sourceMappingURL=app.js.map