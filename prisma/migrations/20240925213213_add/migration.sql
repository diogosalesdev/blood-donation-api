/*
  Warnings:

  - Added the required column `password` to the `clinics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clinics" ADD COLUMN     "password" TEXT NOT NULL;
