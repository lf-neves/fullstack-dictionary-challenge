/*
  Warnings:

  - Added the required column `isFavorite` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "isFavorite" BOOLEAN NOT NULL;
