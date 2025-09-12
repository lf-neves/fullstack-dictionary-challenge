import { prismaClient } from "database";
import gql from "graphql-tag";
import { setupTestData } from "testing/server";

import {
  GraphQLQueryWordArgs,
  GraphQLQueryWordsArgs,
} from "@/graphql/generatedTypes";
import { getEnhancedGraphQLWord as mockedGetEnhancedGraphQLWord } from "@/modules/getEnhancedGraphQLWord";
import { query } from "@/test-utils/graphqlTestClient";

jest.mock("@/modules/getEnhancedGraphQLWord");

describe("Word", () => {
  let testData: Awaited<ReturnType<typeof setupTestData>>;
  const mockedGetEnhancedGraphQLWordResult = {
    phonetics: [
      {
        text: "/wɜːd/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/word-us.mp3",
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "A single distinct meaningful element of speech or writing.",
            example: "I don't like the word 'unofficial'.",
          },
        ],
        synonyms: ["term", "expression"],
        antonyms: [],
      },
    ],
  };

  beforeEach(async () => {
    testData = await setupTestData({ wordOverrides: { word: "apple" } });

    (mockedGetEnhancedGraphQLWord as jest.Mock).mockResolvedValue({
      wordId: testData.word.wordId,
      word: testData.word.word,
      isFavorite: testData.word.isFavorite,
      status: testData.word.status,
      ...mockedGetEnhancedGraphQLWordResult,
    });
  });

  describe("query word", () => {
    const wordQueryDocument = gql`
      query Word($wordId: ID!) {
        word(wordId: $wordId) {
          wordId
          word
          isFavorite
          status
          phonetics {
            text
            audio
          }
          meanings {
            partOfSpeech
            definitions {
              definition
              example
            }
            synonyms
            antonyms
          }
        }
      }
    `;

    test("returns the word with the phonetics and meanings", async () => {
      const { word } = testData;

      // act
      const queryResult = await query<GraphQLQueryWordArgs>({
        queryDocument: wordQueryDocument,
        variables: { wordId: word.wordId },
      });

      expect(queryResult).toHaveProperty("data.word.wordId", word.wordId);
      expect(mockedGetEnhancedGraphQLWord).toHaveBeenNthCalledWith(1, {
        wordId: word.wordId,
      });
    });
  });

  describe("query words", () => {
    const wordsQueryDocument = gql`
      query Words($input: WordsInput) {
        words(input: $input) {
          wordId
          word
          isFavorite
          status
          phonetics {
            text
            audio
          }
          meanings {
            partOfSpeech
            definitions {
              definition
              example
            }
            synonyms
            antonyms
          }
        }
      }
    `;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("should return paginated words", async () => {
      await prismaClient.word.create({
        data: { word: "grape", status: "ACTIVE", isFavorite: false },
      });

      await prismaClient.word.create({
        data: { word: "orange", status: "ACTIVE", isFavorite: true },
      });

      await prismaClient.word.create({
        data: { word: "watermelon", status: "INACTIVE", isFavorite: false },
      });

      (mockedGetEnhancedGraphQLWord as jest.Mock).mockImplementation(
        async ({ wordId }: { wordId: string }) => {
          const requestedWord = await prismaClient.word.findUnique({
            where: { wordId },
          });

          return Promise.resolve({
            ...requestedWord,
            ...mockedGetEnhancedGraphQLWordResult,
          });
        }
      );

      // act
      const queryResult = await query<GraphQLQueryWordsArgs>({
        queryDocument: wordsQueryDocument,
        variables: {
          input: { page: 1, limit: 2 },
        },
      });

      expect(queryResult).toHaveProperty("data.words", [
        expect.objectContaining({ word: "apple" }),
        expect.objectContaining({ word: "grape" }),
      ]);

      const results = queryResult.data?.words || [];

      expect(mockedGetEnhancedGraphQLWord).toHaveBeenCalledWith({
        wordId: results[0]?.wordId,
      });

      expect(mockedGetEnhancedGraphQLWord).toHaveBeenCalledWith({
        wordId: results[1]?.wordId,
      });

      expect(mockedGetEnhancedGraphQLWord).toHaveBeenCalledTimes(2);
    });
  });
});
