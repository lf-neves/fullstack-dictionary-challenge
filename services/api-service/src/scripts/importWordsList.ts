import { prismaClient } from "database";
import { logger } from "lambda";

async function importWordsList() {
  logger.info("Starting words list import...");

  try {
    const words = ["car", "bike", "bus"];

    logger.info("Inserting %d words into the database...", words.length);

    await prismaClient.$transaction(
      words.map((word) =>
        prismaClient.word.upsert({
          where: { word },
          create: { word, isFavorite: false },
          update: {},
        })
      )
    );

    logger.info(
      "Successfully imported %d words into the database.",
      words.length
    );
  } catch (error) {
    console.error("Error fetching words list from API: %O", error);
    throw new Error(`Failed to fetch words list from API.`);
  }
}

await importWordsList();
