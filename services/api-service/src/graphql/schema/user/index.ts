import { prismaClient } from "database";
import { logger } from "lambda";

import { generateApiJsonWebToken } from "@/authentication";
import { GraphQLResolvers } from "@/graphql/generatedTypes";
import { comparePassword } from "@/modules/comparePassword";
import { hashPassword } from "@/modules/hashPassword";

export const userResolvers: GraphQLResolvers = {
  Query: {
    async me(_parent, _args, context) {
      const userWithHistory = await prismaClient.user.findUnique({
        where: { userId: context.user.userId },
        include: {
          history: true,
        },
      });

      if (!userWithHistory) {
        throw new Error("User not found.");
      }

      return {
        ...userWithHistory,
        userWordHistory: userWithHistory.history,
      };
    },
  },

  Mutation: {
    createUser: async (_parent, { input }) => {
      const existingUser = await prismaClient.user.findFirst({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new Error("User already exists.");
      }

      const hashedPassword = await hashPassword(input.password);

      logger.info("Creating User: %s.", input.email);

      // TODO: move this DB operation into a sql transaction
      const user = await prismaClient.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
          firstName: input.firstName,
          lastName: input.lastName,
        },
      });

      const userToken = generateApiJsonWebToken({
        payload: { userId: user.userId },
        expirationTimeInDays: 1,
      });

      return {
        user,
        token: userToken,
      };
    },

    authenticateUser: async (_parent, { input }) => {
      const user = await prismaClient.user.findFirst({
        where: { email: input.email },
      });

      if (!user) {
        // TODO: Handle errors in the FE with middlewares
        throw new Error("User not found.");
      }

      logger.info("Authenticating User: %s.", input.email);

      await comparePassword(input.password, user.password);

      const userToken = generateApiJsonWebToken({
        payload: { userId: user.userId },
        expirationTimeInDays: 1,
      });

      return {
        user,
        token: userToken,
      };
    },
  },
};
