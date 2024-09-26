/*
  Warnings:

  - You are about to drop the column `location` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `startDAte` on the `campaigns` table. All the data in the column will be lost.
  - Added the required column `cep` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `donors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `donors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `donors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `donors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `donors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'CLINIC', 'ADMIN');

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "location",
DROP COLUMN "startDAte",
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "clinics" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CLINIC',
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "donors" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
