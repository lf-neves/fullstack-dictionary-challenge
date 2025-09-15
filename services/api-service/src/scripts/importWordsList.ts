import { prismaClient } from "database";
import { logger } from "lambda";
import assert from "node:assert";

export async function importWordsList() {
  assert(
    process.env.API_ENV === "test",
    "This script can only be run in the test environment."
  );

  logger.info("Starting words list import...");

  try {
    // For testing purposes, we'll use a small static list of words (30 words).
    const words = [
      "car",
      "bike",
      "bus",
      "train",
      "airplane",
      "boat",
      "ship",
      "subway",
      "tram",
      "scooter",
      "motorcycle",
      "helicopter",
      "rocket",
      "spaceship",
      "yacht",
      "ferry",
      "canoe",
      "kayak",
      "skateboard",
      "rollerblades",
      "segway",
      "hoverboard",
      "trolley",
      "rickshaw",
      "gondola",
      "zeppelin",
      "blimp",
      "hot air balloon",
      "monorail",
      "cable car",
    ];

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
    console.error("Error importing words into database: %O", error);
    throw new Error(`Failed to import words into database.`);
  }
}
