import { prisma } from '../prisma.service';

async function main() {
    await prisma.tipoSigno.deleteMany();

    const tipoSignos = [
        { descripcion: 'Presión Arterial', unidad: 'mmHg', valorMinimo: 60, valorMaximo: 120 },
        { descripcion: 'Frecuencia Cardíaca', unidad: 'bpm', valorMinimo: 60, valorMaximo: 100 },
        { descripcion: 'Temperatura Corporal', unidad: '°C', valorMinimo: 36, valorMaximo: 37.5 },
    ];

    for (const tipoSigno of tipoSignos) {
        await prisma.tipoSigno.create({ data: tipoSigno });
    }

    console.log('Seeding completado: TipoSigno');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
