import { logger } from "lambda";

import { PrismaClient } from "@/generated/prisma";

const prismaClient = new PrismaClient();

// TODO: Move to a config file or environment variable
const WORD_LIST_URL =
  "https://raw.githubusercontent.com/meetDeveloper/freeDictionaryAPI/master/meta/wordList/english.txt";

async function importWordsList() {
  logger.info("Starting words list import...");

  try {
    const wordsListResponse = await fetch(WORD_LIST_URL);
    const wordsListText = await wordsListResponse.text();
    const words = wordsListText
      .split("\n")
      .map((word) => word.trim())
      .filter(Boolean);

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
    console.error("Error fetching words list from URL: %O", error);
    throw new Error(`Failed to fetch words list from ${WORD_LIST_URL}.`);
  }
}

await importWordsList();
