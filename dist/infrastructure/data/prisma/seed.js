"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_service_1 = require("../prisma.service");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_service_1.prisma.tipoSigno.deleteMany();
        const tipoSignos = [
            { descripcion: 'Presión Arterial', unidad: 'mmHg', valorMinimo: 60, valorMaximo: 120 },
            { descripcion: 'Frecuencia Cardíaca', unidad: 'bpm', valorMinimo: 60, valorMaximo: 100 },
            { descripcion: 'Temperatura Corporal', unidad: '°C', valorMinimo: 36, valorMaximo: 37.5 },
        ];
        for (const tipoSigno of tipoSignos) {
            yield prisma_service_1.prisma.tipoSigno.create({ data: tipoSigno });
        }
        console.log('Seeding completado: TipoSigno');
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_service_1.prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map