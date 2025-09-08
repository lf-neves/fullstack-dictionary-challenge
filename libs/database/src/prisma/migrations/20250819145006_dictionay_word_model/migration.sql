-- CreateTable
CREATE TABLE "DictionaryWord" (
    "dictionaryWordId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DictionaryWord_pkey" PRIMARY KEY ("dictionaryWordId")
);
