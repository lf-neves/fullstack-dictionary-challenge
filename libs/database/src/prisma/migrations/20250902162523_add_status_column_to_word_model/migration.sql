-- CreateEnum
CREATE TYPE "WordStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "status" "WordStatus" NOT NULL DEFAULT 'ACTIVE';
