import { prismaClient } from "database";
import { logger } from "lambda";
import assert from "node:assert";

export async function resetDBData() {
  assert(
    process.env.API_ENV === "test",
    "This script can only be run in the test environment."
  );

  await prismaClient.$executeRaw`TRUNCATE TABLE "User" CASCADE;`;
  await prismaClient.$executeRaw`TRUNCATE TABLE "Word" CASCADE;`;

  logger.info("All data deleted from test database.");
}
