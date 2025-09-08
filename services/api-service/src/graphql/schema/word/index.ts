import { prismaClient } from "database";
import { logger } from "lambda";

import { createMutationResponse } from "@/graphql/createMutationResponse";
import { GraphQLResolvers } from "@/graphql/generatedTypes";

export const wordResolvers: GraphQLResolvers = {
  Query: {
    word: async (_parent, { wordId }) => {
      const word = await prismaClient.word.findUnique({
        where: { wordId, status: "ACTIVE" },
      });

      if (!word) {
        throw new Error("Could not find this word in the dictionary.");
      }

      return word;
    },
    words: async (_parent, { input }) => {
      return prismaClient.word.findMany({
        where: {
          isFavorite: input?.isFavorite ?? undefined,
          status: "ACTIVE",
        },
      });
    },
  },

  Mutation: {
    createWord: async (_parent, { input }) => {
      const newWord = await prismaClient.word.create({
        data: { ...input, isFavorite: input.isFavorite ?? false },
      });

      return createMutationResponse({ word: newWord });
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

        return createMutationResponse({ word: word! });
      }

      const formattedWordAttributesToUpdate = Object.fromEntries(
        Object.entries(wordAttributesToUpdate).filter(
          ([, value]) => value !== null
        )
      );

      const updatedWord = await prismaClient.word.update({
        where: { wordId: word.wordId },
        data: formattedWordAttributesToUpdate,
      });

      return createMutationResponse({
        word: updatedWord!,
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

      return createMutationResponse();
    },
  },
};
