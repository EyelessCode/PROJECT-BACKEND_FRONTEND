/*
  Warnings:

  - The primary key for the `CentroMedico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CentroMedico` table. All the data in the column will be lost.
  - The primary key for the `Enfermera` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Enfermera` table. All the data in the column will be lost.
  - The primary key for the `Paciente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Paciente` table. All the data in the column will be lost.
  - The primary key for the `SignoVital` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SignoVital` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SignosPacientes" DROP CONSTRAINT "SignosPacientes_signoVitalId_fkey";

-- DropForeignKey
ALTER TABLE "TomaSignos" DROP CONSTRAINT "TomaSignos_centroMedicoId_fkey";

-- DropForeignKey
ALTER TABLE "TomaSignos" DROP CONSTRAINT "TomaSignos_enfermeraId_fkey";

-- DropForeignKey
ALTER TABLE "TomaSignos" DROP CONSTRAINT "TomaSignos_pacienteId_fkey";

-- AlterTable
ALTER TABLE "CentroMedico" DROP CONSTRAINT "CentroMedico_pkey",
DROP COLUMN "id",
ADD COLUMN     "codigo" SERIAL NOT NULL,
ADD CONSTRAINT "CentroMedico_pkey" PRIMARY KEY ("codigo");

-- AlterTable
ALTER TABLE "Enfermera" DROP CONSTRAINT "Enfermera_pkey",
DROP COLUMN "id",
ADD COLUMN     "codigo" SERIAL NOT NULL,
ADD CONSTRAINT "Enfermera_pkey" PRIMARY KEY ("codigo");

-- AlterTable
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_pkey",
DROP COLUMN "id",
ADD COLUMN     "codigo" SERIAL NOT NULL,
ADD CONSTRAINT "Paciente_pkey" PRIMARY KEY ("codigo");

-- AlterTable
ALTER TABLE "SignoVital" DROP CONSTRAINT "SignoVital_pkey",
DROP COLUMN "id",
ADD COLUMN     "codigo" SERIAL NOT NULL,
ADD CONSTRAINT "SignoVital_pkey" PRIMARY KEY ("codigo");

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_centroMedicoId_fkey" FOREIGN KEY ("centroMedicoId") REFERENCES "CentroMedico"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TomaSignos" ADD CONSTRAINT "TomaSignos_enfermeraId_fkey" FOREIGN KEY ("enfermeraId") REFERENCES "Enfermera"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignosPacientes" ADD CONSTRAINT "SignosPacientes_signoVitalId_fkey" FOREIGN KEY ("signoVitalId") REFERENCES "SignoVital"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
