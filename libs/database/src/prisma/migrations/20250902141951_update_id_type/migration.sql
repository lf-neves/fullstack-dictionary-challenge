/*
  Warnings:

  - The primary key for the `Antonym` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Antonym` table. All the data in the column will be lost.
  - The primary key for the `Definition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `License` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Meaning` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Phonetic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SourceUrl` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Synonym` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Word` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `antonymId` was added to the `Antonym` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

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
ALTER TABLE "Antonym" DROP CONSTRAINT "Antonym_pkey",
DROP COLUMN "id",
ADD COLUMN     "antonymId" TEXT NOT NULL,
ALTER COLUMN "meaningId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Antonym_pkey" PRIMARY KEY ("antonymId");

-- AlterTable
ALTER TABLE "Definition" DROP CONSTRAINT "Definition_pkey",
ALTER COLUMN "meaningId" SET DATA TYPE TEXT,
ALTER COLUMN "definitionId" DROP DEFAULT,
ALTER COLUMN "definitionId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Definition_pkey" PRIMARY KEY ("definitionId");
DROP SEQUENCE "Definition_definitionId_seq";

-- AlterTable
ALTER TABLE "License" DROP CONSTRAINT "License_pkey",
ALTER COLUMN "licenseId" DROP DEFAULT,
ALTER COLUMN "licenseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "License_pkey" PRIMARY KEY ("licenseId");
DROP SEQUENCE "License_licenseId_seq";

-- AlterTable
ALTER TABLE "Meaning" DROP CONSTRAINT "Meaning_pkey",
ALTER COLUMN "wordId" SET DATA TYPE TEXT,
ALTER COLUMN "meaningId" DROP DEFAULT,
ALTER COLUMN "meaningId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Meaning_pkey" PRIMARY KEY ("meaningId");
DROP SEQUENCE "Meaning_meaningId_seq";

-- AlterTable
ALTER TABLE "Phonetic" DROP CONSTRAINT "Phonetic_pkey",
ALTER COLUMN "wordId" SET DATA TYPE TEXT,
ALTER COLUMN "licenseId" SET DATA TYPE TEXT,
ALTER COLUMN "phoneticId" DROP DEFAULT,
ALTER COLUMN "phoneticId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Phonetic_pkey" PRIMARY KEY ("phoneticId");
DROP SEQUENCE "Phonetic_phoneticId_seq";

-- AlterTable
ALTER TABLE "SourceUrl" DROP CONSTRAINT "SourceUrl_pkey",
ALTER COLUMN "wordId" SET DATA TYPE TEXT,
ALTER COLUMN "sourceUrlId" DROP DEFAULT,
ALTER COLUMN "sourceUrlId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SourceUrl_pkey" PRIMARY KEY ("sourceUrlId");
DROP SEQUENCE "SourceUrl_sourceUrlId_seq";

-- AlterTable
ALTER TABLE "Synonym" DROP CONSTRAINT "Synonym_pkey",
ALTER COLUMN "meaningId" SET DATA TYPE TEXT,
ALTER COLUMN "synonymId" DROP DEFAULT,
ALTER COLUMN "synonymId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Synonym_pkey" PRIMARY KEY ("synonymId");
DROP SEQUENCE "Synonym_synonymId_seq";

-- AlterTable
ALTER TABLE "Word" DROP CONSTRAINT "Word_pkey",
ALTER COLUMN "licenseId" SET DATA TYPE TEXT,
ALTER COLUMN "wordId" DROP DEFAULT,
ALTER COLUMN "wordId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Word_pkey" PRIMARY KEY ("wordId");
DROP SEQUENCE "Word_wordId_seq";

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
