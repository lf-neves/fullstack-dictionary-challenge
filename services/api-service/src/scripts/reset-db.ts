import { prismaClient } from "database";
import { logger } from "lambda";

async function resetDBData() {
  if (process.env.API_ENV !== "test") {
    throw new Error(
      "You cannot use this script to reset data in a non-test database."
    );
  }

  await prismaClient.$executeRaw`TRUNCATE TABLE "Word" CASCADE;`;
  await prismaClient.$executeRaw`TRUNCATE TABLE "User" CASCADE;`;

  logger.info("All data deleted from test database.");
}

await resetDBData();
