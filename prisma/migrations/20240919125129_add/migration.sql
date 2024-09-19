/*
  Warnings:

  - You are about to drop the column `createdAt` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `startDAte` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `donors` table. All the data in the column will be lost.
  - Added the required column `startDate` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `donors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `donors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'CLINIC', 'ADMIN');

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "createdAt",
DROP COLUMN "startDAte",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "clinics" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CLINIC',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "donors" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
