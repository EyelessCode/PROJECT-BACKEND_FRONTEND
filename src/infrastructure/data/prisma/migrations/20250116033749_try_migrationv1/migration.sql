-- CreateTable
CREATE TABLE "CentroMedico" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "CentroMedico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enfermera" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,

    CONSTRAINT "Enfermera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SignoVital" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,
    "valorMinimo" DOUBLE PRECISION NOT NULL,
    "valorMaximo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SignoVital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TomaSignos" (
    "numero" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "centroMedicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "enfermeraId" INTEGER NOT NULL,

    CONSTRAINT "TomaSignos_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "SignosPacientes" (
    "linea" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "signoVitalId" INTEGER NOT NULL,
    "tomaSignosId" INTEGER NOT NULL,

    CONSTRAINT "SignosPacientes_pkey" PRIMARY KEY ("linea")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_cedula_key" ON "Paciente"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Enfermera_cedula_key" ON "Enfermera"("cedula");

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_centroMedicoId_fkey" FOREIGN KEY ("centroMedicoId") REFERENCES "CentroMedico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_enfermeraId_fkey" FOREIGN KEY ("enfermeraId") REFERENCES "Enfermera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignosPacientes" ADD CONSTRAINT "SignosPacientes_signoVitalId_fkey" FOREIGN KEY ("signoVitalId") REFERENCES "SignoVital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignosPacientes" ADD CONSTRAINT "SignosPacientes_tomaSignosId_fkey" FOREIGN KEY ("tomaSignosId") REFERENCES "TomaSignos"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;
