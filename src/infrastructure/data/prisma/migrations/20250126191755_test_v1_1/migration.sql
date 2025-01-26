-- CreateTable
CREATE TABLE "CentroMedico" (
    "codigo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "RUC" TEXT NOT NULL,

    CONSTRAINT "CentroMedico_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "codigo" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "fechaNacimiento" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "tipoSangre" TEXT NOT NULL,
    "direccion" TEXT DEFAULT '',
    "correo" TEXT NOT NULL,
    "ocupacion" TEXT DEFAULT 'ninguno',

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Enfermera" (
    "codigo" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "Enfermera_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "TipoSigno" (
    "codigo" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,
    "valorMinimo" DOUBLE PRECISION NOT NULL,
    "valorMaximo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TipoSigno_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "TomaSignos" (
    "numero" SERIAL NOT NULL,
    "fecha" TEXT NOT NULL,
    "centroMedicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "enfermeraId" INTEGER NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "TomaSignos_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "SignosPacientes" (
    "linea" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipoSignoId" INTEGER NOT NULL,
    "tomaSignosId" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "comentario" TEXT DEFAULT '',

    CONSTRAINT "SignosPacientes_pkey" PRIMARY KEY ("linea")
);

-- CreateIndex
CREATE UNIQUE INDEX "CentroMedico_RUC_key" ON "CentroMedico"("RUC");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_cedula_key" ON "Paciente"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_correo_key" ON "Paciente"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Enfermera_cedula_key" ON "Enfermera"("cedula");

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_centroMedicoId_fkey" FOREIGN KEY ("centroMedicoId") REFERENCES "CentroMedico"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_enfermeraId_fkey" FOREIGN KEY ("enfermeraId") REFERENCES "Enfermera"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignosPacientes" ADD CONSTRAINT "SignosPacientes_tipoSignoId_fkey" FOREIGN KEY ("tipoSignoId") REFERENCES "TipoSigno"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignosPacientes" ADD CONSTRAINT "SignosPacientes_tomaSignosId_fkey" FOREIGN KEY ("tomaSignosId") REFERENCES "TomaSignos"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;
