/*
  Warnings:

  - You are about to drop the `DictionaryWord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DictionaryWord";

-- CreateTable
CREATE TABLE "Antonym" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "meaningId" INTEGER NOT NULL,

    CONSTRAINT "Antonym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Definition" (
    "id" SERIAL NOT NULL,
    "definition" TEXT NOT NULL,
    "example" TEXT,
    "meaningId" INTEGER NOT NULL,

    CONSTRAINT "Definition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "License" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meaning" (
    "id" SERIAL NOT NULL,
    "partOfSpeech" TEXT NOT NULL,
    "wordId" INTEGER NOT NULL,

    CONSTRAINT "Meaning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phonetic" (
    "id" SERIAL NOT NULL,
    "text" TEXT,
    "audio" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "wordId" INTEGER NOT NULL,
    "licenseId" INTEGER,

    CONSTRAINT "Phonetic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceUrl" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "wordId" INTEGER NOT NULL,

    CONSTRAINT "SourceUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Synonym" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "meaningId" INTEGER NOT NULL,

    CONSTRAINT "Synonym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "licenseId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_word_key" ON "Word"("word");

-- AddForeignKey
ALTER TABLE "Antonym" ADD CONSTRAINT "Antonym_meaningId_fkey" FOREIGN KEY ("meaningId") REFERENCES "Meaning"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Definition" ADD CONSTRAINT "Definition_meaningId_fkey" FOREIGN KEY ("meaningId") REFERENCES "Meaning"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meaning" ADD CONSTRAINT "Meaning_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phonetic" ADD CONSTRAINT "Phonetic_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phonetic" ADD CONSTRAINT "Phonetic_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceUrl" ADD CONSTRAINT "SourceUrl_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Synonym" ADD CONSTRAINT "Synonym_meaningId_fkey" FOREIGN KEY ("meaningId") REFERENCES "Meaning"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE SET NULL ON UPDATE CASCADE;
