/*
  Warnings:

  - The primary key for the `Definition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Definition` table. All the data in the column will be lost.
  - The primary key for the `License` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `License` table. All the data in the column will be lost.
  - The primary key for the `Meaning` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Meaning` table. All the data in the column will be lost.
  - The primary key for the `Phonetic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Phonetic` table. All the data in the column will be lost.
  - The primary key for the `SourceUrl` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SourceUrl` table. All the data in the column will be lost.
  - The primary key for the `Synonym` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Synonym` table. All the data in the column will be lost.
  - The primary key for the `Word` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Word` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Antonym" DROP CONSTRAINT "Antonym_meaningId_fkey";

-- DropForeignKey
ALTER TABLE "Definition" DROP CONSTRAINT "Definition_meaningId_fkey";

-- DropForeignKey
ALTER TABLE "Meaning" DROP CONSTRAINT "Meaning_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Phonetic" DROP CONSTRAINT "Phonetic_licenseId_fkey";

-- DropForeignKey
ALTER TABLE "Phonetic" DROP CONSTRAINT "Phonetic_wordId_fkey";

-- DropForeignKey
ALTER TABLE "SourceUrl" DROP CONSTRAINT "SourceUrl_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Synonym" DROP CONSTRAINT "Synonym_meaningId_fkey";

-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_licenseId_fkey";

-- AlterTable
ALTER TABLE "Definition" DROP CONSTRAINT "Definition_pkey",
DROP COLUMN "id",
ADD COLUMN     "definitionId" SERIAL NOT NULL,
ADD CONSTRAINT "Definition_pkey" PRIMARY KEY ("definitionId");

-- AlterTable
ALTER TABLE "License" DROP CONSTRAINT "License_pkey",
DROP COLUMN "id",
ADD COLUMN     "licenseId" SERIAL NOT NULL,
ADD CONSTRAINT "License_pkey" PRIMARY KEY ("licenseId");

-- AlterTable
ALTER TABLE "Meaning" DROP CONSTRAINT "Meaning_pkey",
DROP COLUMN "id",
ADD COLUMN     "meaningId" SERIAL NOT NULL,
ADD CONSTRAINT "Meaning_pkey" PRIMARY KEY ("meaningId");

-- AlterTable
ALTER TABLE "Phonetic" DROP CONSTRAINT "Phonetic_pkey",
DROP COLUMN "id",
ADD COLUMN     "phoneticId" SERIAL NOT NULL,
ADD CONSTRAINT "Phonetic_pkey" PRIMARY KEY ("phoneticId");

-- AlterTable
ALTER TABLE "SourceUrl" DROP CONSTRAINT "SourceUrl_pkey",
DROP COLUMN "id",
ADD COLUMN     "sourceUrlId" SERIAL NOT NULL,
ADD CONSTRAINT "SourceUrl_pkey" PRIMARY KEY ("sourceUrlId");

-- AlterTable
ALTER TABLE "Synonym" DROP CONSTRAINT "Synonym_pkey",
DROP COLUMN "id",
ADD COLUMN     "synonymId" SERIAL NOT NULL,
ADD CONSTRAINT "Synonym_pkey" PRIMARY KEY ("synonymId");

-- AlterTable
ALTER TABLE "Word" DROP CONSTRAINT "Word_pkey",
DROP COLUMN "id",
ADD COLUMN     "wordId" SERIAL NOT NULL,
ADD CONSTRAINT "Word_pkey" PRIMARY KEY ("wordId");

-- AddForeignKey
ALTER TABLE "Antonym" ADD CONSTRAINT "Antonym_meaningId_fkey" FOREIGN KEY ("meaningId") REFERENCES "Meaning"("meaningId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Definition" ADD CONSTRAINT "Definition_meaningId_fkey" FOREIGN KEY ("meaningId") REFERENCES "Meaning"("meaningId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meaning" ADD CONSTRAINT "Meaning_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("wordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phonetic" ADD CONSTRAINT "Phonetic_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("wordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phonetic" ADD CONSTRAINT "Phonetic_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("licenseId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceUrl" ADD CONSTRAINT "SourceUrl_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("wordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Synonym" ADD CONSTRAINT "Synonym_meaningId_fkey" FOREIGN KEY ("meaningId") REFERENCES "Meaning"("meaningId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("licenseId") ON DELETE SET NULL ON UPDATE CASCADE;
