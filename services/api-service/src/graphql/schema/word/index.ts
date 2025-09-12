import { prismaClient } from "database";
import { Word } from "database/src/generated/prisma";
import { logger, pMap } from "lambda";

import { createMutationResponse } from "@/graphql/createMutationResponse";
import { GraphQLResolvers, GraphQLWord } from "@/graphql/generatedTypes";
import { getEnhancedGraphQLWord } from "@/modules/getEnhancedGraphQLWord";

export const wordResolvers: GraphQLResolvers = {
  Query: {
    word: async (_parent, { wordId }) => {
      return getEnhancedGraphQLWord({ wordId });
    },
    words: async (_parent, { input }) => {
      const { isFavorite, page, limit } = input || {};
      const pageSize = limit ?? 10;

      const words = await prismaClient.word.findMany({
        where: {
          isFavorite: isFavorite ?? undefined,
          status: "ACTIVE",
        },
        orderBy: { word: "asc" },
        skip: (page ? page - 1 : 0) * pageSize,
        take: pageSize,
      });

      console.log("Words: ", words);

      const formattedWords: GraphQLWord[] = await pMap(
        words,
        async (word: Word) => getEnhancedGraphQLWord({ wordId: word.wordId })
      );

      return formattedWords;
    },
  },

  Mutation: {
    createWord: async (_parent, { input }) => {
      const newWord = await prismaClient.word.create({
        data: { ...input, isFavorite: input.isFavorite ?? false },
      });

      const formattedWord = await getEnhancedGraphQLWord({
        wordId: newWord.wordId,
      });

      return createMutationResponse({ word: formattedWord });
    },
    updateWord: async (_parent, { input }) => {
      const { wordId, ...wordAttributesToUpdate } = input;
      const word = await prismaClient.word.findUnique({
        where: { wordId },
      });

      if (!word) {
        throw new Error("Could not find this word.");
      }

      if (Object.keys(wordAttributesToUpdate).length === 0) {
        logger.info("No attributes provided to update Word[%s].", wordId);

        const formattedWord = await getEnhancedGraphQLWord({
          wordId: word.wordId,
        });

        return createMutationResponse({ word: formattedWord });
      }

      const formattedWordAttributesToUpdate = Object.fromEntries(
        Object.entries(wordAttributesToUpdate).filter(
          ([, value]) => value !== null
        )
      );

      logger.info(
        "Will update Word[%s] with %o.",
        wordId,
        wordAttributesToUpdate
      );

      await prismaClient.word.update({
        where: { wordId: word.wordId },
        data: formattedWordAttributesToUpdate,
      });

      const formattedWord = await getEnhancedGraphQLWord({
        wordId: word.wordId,
      });

      return createMutationResponse({
        word: formattedWord,
      });
    },
    deleteWord: async (_parent, { wordId }) => {
      const word = await prismaClient.word.findUnique({
        where: { wordId },
      });

      if (!word) {
        throw new Error("Could not find this word.");
      }

      await prismaClient.word.update({
        where: { wordId: word.wordId },
        data: { status: "INACTIVE" },
      });

      return createMutationResponse({
        successMessage: "Word deleted successfully.",
      });
    },
  },
};
