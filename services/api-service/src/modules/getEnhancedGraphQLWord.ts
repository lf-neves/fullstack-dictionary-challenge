import { prismaClient } from "database";
import { logger } from "lambda";

import { GraphQLWord, GraphQLWordStatus } from "@/graphql/generatedTypes";

type PhoneticFetchResult = { text: string; audio: string };
type MeaningFetchResult = {
  partOfSpeech: string;
  definitions: { definition: string; example: string }[];
};

type WordFetchResult = {
  word: string;
  phonetic: string;
  phonetics: PhoneticFetchResult[];
  meanings: MeaningFetchResult[];
};

const DICTIONARY_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

/**
 * Fetches detailed information about a word from an external dictionary API and enriches the word model.
 * @param param0 - The input parameters for fetching the word details.
 * @returns A promise that resolves to the enriched word model.
 */

export async function getEnhancedGraphQLWord({
  wordId,
}: {
  wordId: string;
}): Promise<GraphQLWord> {
  const word = await prismaClient.word.findUnique({
    where: { wordId, status: "ACTIVE" },
  });

  if (!word) {
    throw new Error("Could not find the requested word in the dictionary.");
  }

  logger.info(
    "Will fetch details for Word[%s] from dictionaryapi.dev API.",
    wordId
  );

  try {
    const response = await fetch(DICTIONARY_API_URL + `/${word.word}`);

    if (!response.ok) {
      return {} as GraphQLWord;
    }

    const data = await response.json();

    if (!Array.isArray(data) || !data.length) {
      logger.info("Could not find details data for Word[%s].");

      return {} as GraphQLWord;
    }

    logger.info(
      "Found %d word detail records from the API. Will conciliate and enrich the word model.",
      data.length
    );

    const wordPhonetics: PhoneticFetchResult[] = data.flatMap(
      (wordDetail: WordFetchResult) => {
        if (wordDetail.phonetics && Array.isArray(wordDetail.phonetics)) {
          return wordDetail.phonetics.map((phonetic) => ({
            text: phonetic.text,
            audio: phonetic.audio,
          }));
        }

        return [];
      }
    );

    const wordMeanings: MeaningFetchResult[] = data.flatMap(
      (wordDetail: WordFetchResult) => {
        if (wordDetail.meanings && Array.isArray(wordDetail.meanings)) {
          return wordDetail.meanings.map((meaning) => ({
            partOfSpeech: meaning.partOfSpeech,
            definitions: meaning.definitions.map((definitionItem) => ({
              definition: definitionItem.definition,
              example: definitionItem.example,
            })),
          }));
        }

        return [];
      }
    );

    console.log(word);

    return {
      ...word,
      status: word.status as GraphQLWordStatus,
      phonetics: wordPhonetics,
      meanings: wordMeanings,
    };
  } catch (error) {
    logger.error(
      "Error fetching details for Word[%s]. Error: %s.",
      wordId,
      error
    );

    throw new Error("Failed to fetch word details.");
  }
}
