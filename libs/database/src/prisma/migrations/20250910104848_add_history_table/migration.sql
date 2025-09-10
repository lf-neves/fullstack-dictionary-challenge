-- CreateTable
CREATE TABLE "UserWordHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "wordId" TEXT NOT NULL,
    "lastVisitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visitCount" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "UserWordHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserWordHistory_userId_idx" ON "UserWordHistory"("userId");

-- CreateIndex
CREATE INDEX "UserWordHistory_wordId_idx" ON "UserWordHistory"("wordId");

-- CreateIndex
CREATE UNIQUE INDEX "UserWordHistory_userId_wordId_key" ON "UserWordHistory"("userId", "wordId");

-- AddForeignKey
ALTER TABLE "UserWordHistory" ADD CONSTRAINT "UserWordHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWordHistory" ADD CONSTRAINT "UserWordHistory_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("wordId") ON DELETE RESTRICT ON UPDATE CASCADE;
