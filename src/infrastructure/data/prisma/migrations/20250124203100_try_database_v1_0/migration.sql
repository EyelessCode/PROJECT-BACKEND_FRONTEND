/*
  Warnings:

  - You are about to drop the column `signoVitalId` on the `SignosPacientes` table. All the data in the column will be lost.
  - You are about to drop the `SignoVital` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[RUC]` on the table `CentroMedico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[correo]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `RUC` to the `CentroMedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `CentroMedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellidos` to the `Enfermera` table without a default value. This is not possible if the table is not empty.
  - Added the required column `especialidad` to the `Enfermera` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellidos` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `edad` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoSangre` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TipoSignoId` to the `SignosPacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `SignosPacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observacion` to the `TomaSignos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SignosPacientes" DROP CONSTRAINT "SignosPacientes_signoVitalId_fkey";

-- AlterTable
ALTER TABLE "CentroMedico" ADD COLUMN     "RUC" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Enfermera" ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "especialidad" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "correo" TEXT NOT NULL,
ADD COLUMN     "direccion" TEXT DEFAULT '',
ADD COLUMN     "edad" INTEGER NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "ocupacion" TEXT DEFAULT 'ninguno',
ADD COLUMN     "telefono" TEXT NOT NULL,
ADD COLUMN     "tipoSangre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SignosPacientes" DROP COLUMN "signoVitalId",
ADD COLUMN     "TipoSignoId" INTEGER NOT NULL,
ADD COLUMN     "comentario" TEXT DEFAULT '',
ADD COLUMN     "fecha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TomaSignos" ADD COLUMN     "observacion" TEXT NOT NULL;

-- DropTable
DROP TABLE "SignoVital";

-- CreateTable
CREATE TABLE "TipoSigno" (
    "codigo" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,
    "valorMinimo" DOUBLE PRECISION NOT NULL,
    "valorMaximo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TipoSigno_pkey" PRIMARY KEY ("codigo")
);

-- CreateIndex
CREATE UNIQUE INDEX "CentroMedico_RUC_key" ON "CentroMedico"("RUC");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_correo_key" ON "Paciente"("correo");

-- AddForeignKey
ALTER TABLE "SignosPacientes" ADD CONSTRAINT "SignosPacientes_TipoSignoId_fkey" FOREIGN KEY ("TipoSignoId") REFERENCES "TipoSigno"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
