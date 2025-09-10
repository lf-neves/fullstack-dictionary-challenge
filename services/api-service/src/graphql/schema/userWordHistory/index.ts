import { prismaClient } from "database";
import { logger } from "lambda";

import { createMutationResponse } from "@/graphql/createMutationResponse";
import { GraphQLResolvers, GraphQLWord } from "@/graphql/generatedTypes";

export const userWordHistoryResolvers: GraphQLResolvers = {
  Query: {
    userVisitedWordsHistory: async (_, __, context) => {
      const { userId } = context.user;
      const userVisitedWordsHistory =
        await prismaClient.userWordHistory.findMany({
          where: { userId },
          include: {
            word: true,
          },
          orderBy: {
            lastVisitedAt: "desc",
          },
        });

      const visitCount = 0;

      logger.info(
        "Found %d visited words for User[%s].",
        userVisitedWordsHistory.length,
        userId
      );

      return userVisitedWordsHistory.map((history) => ({
        ...history,
        word: history.word as unknown as GraphQLWord,
        lastVisitedAt: history.lastVisitedAt,
        visitCount,
      }));
    },
  },

  Mutation: {
    trackWordVisitHistory: async (_, { input }, context) => {
      const { wordId } = input;
      const word = await prismaClient.word.findUnique({
        where: { wordId },
      });

      if (!word) {
        throw new Error("Failed to track visit history for the provided word.");
      }

      const newUserWordHistory = await prismaClient.userWordHistory.create({
        data: {
          userId: context.user.userId,
          wordId,
        },
      });

      logger.info(
        "Successfully created UserWordHistory[%s] record for User[%s] and Word[%s].",
        newUserWordHistory.userWordHistoryId,
        context.user.userId,
        wordId
      );

      return createMutationResponse();
    },
  },
};
