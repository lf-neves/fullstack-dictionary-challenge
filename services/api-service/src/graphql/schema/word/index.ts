import { prismaClient } from "database";
import { logger } from "lambda";
import assert from "node:assert";

import { createMutationResponse } from "@/graphql/createMutationResponse";
import { GraphQLResolvers } from "@/graphql/generatedTypes";

import { getWordPhonetics } from "./getWordPhonetics";

export const wordResolvers: GraphQLResolvers = {
  Query: {
    word: async (_parent, { wordId }) => {
      const word = await prismaClient.word.findUnique({
        where: { wordId, status: "ACTIVE" },
        include: { phonetics: { where: { audio: { not: "" } } } },
      });

      if (!word) {
        throw new Error("Could not find this word in the dictionary.");
      }

      if (word.phonetics.length > 0) {
        logger.info(
          "Word[%s] already has %d phonetic records. Skipping phonetics fetch.",
          wordId,
          word.phonetics.length
        );

        return word;
      }

      logger.info(
        "There are no phonetic records for Word[%s]. Will retrieve them from dictionaryapi.dev API.",
        wordId
      );

      const wordPhonetics = await getWordPhonetics(word.word);

      if (!wordPhonetics || wordPhonetics.length === 0) {
        logger.info(
          "No phonetics were found for Word[%s] in dictionaryapi.dev API.",
          wordId
        );

        return word;
      }

      logger.info(
        "Will create %d phonetic records for Word[%s].",
        wordPhonetics.length,
        wordId
      );

      await prismaClient.$transaction(
        wordPhonetics.map((phonetic) =>
          prismaClient.phonetic.create({
            data: {
              wordId: word.wordId,
              text: phonetic.text,
              audio: phonetic.audio,
            },
          })
        )
      );

      const reloadedWord = await prismaClient.word.findUnique({
        where: { wordId: word.wordId },
        include: { phonetics: { where: { audio: { not: "" } } } },
      });

      assert(reloadedWord, `Expected Word[${wordId}] to exist.`);

      return reloadedWord;
    },
    words: async (_parent, { input }) => {
      const { isFavorite, page, limit } = input || {};
      const pageSize = limit ?? 10;

      return prismaClient.word.findMany({
        where: {
          isFavorite: isFavorite ?? undefined,
          status: "ACTIVE",
        },
        skip: (page ?? 0) * pageSize,
        take: pageSize,
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

      logger.info(
        "Will update Word[%s] with %o.",
        wordId,
        wordAttributesToUpdate
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
