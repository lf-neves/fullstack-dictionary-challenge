import { Phonetic } from "database/src/generated/prisma";
import { logger } from "lambda";

type PhoneticFetchResult = Pick<Phonetic, "text" | "audio">;

export async function getWordPhonetics(
  word: string
): Promise<PhoneticFetchResult[]> {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!response.ok) {
      logger.info(
        `Failed to fetch phonetics for word: "${word}". Status: ${response.status}`
      );

      return [];
    }

    const data = await response.json();

    console.log("Fetched phonetics data:", data);

    if (!Array.isArray(data) || data.length === 0) {
      logger.info(`No data found for word: "${word}".`);

      return [];
    }

    const phonetics: PhoneticFetchResult[] = [];

    data.forEach((entry: any) => {
      if (entry.phonetics && Array.isArray(entry.phonetics)) {
        entry.phonetics.forEach((phonetic: any) => {
          if (phonetic.text || phonetic.audio) {
            phonetics.push({
              text: phonetic.text || "",
              audio: phonetic.audio || "",
            });
          }
        });
      }
    });

    return phonetics;
  } catch (error) {
    logger.error(
      `Error fetching phonetics for word: "${word}". Error: ${error}`
    );

    return [];
  }
}
