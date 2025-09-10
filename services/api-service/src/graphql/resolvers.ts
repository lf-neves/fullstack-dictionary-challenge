import { _ } from "lambda";

import { GraphQLResolvers } from "./generatedTypes";
import { baseResolvers } from "./schema/baseResolvers";
import { userResolvers } from "./schema/user";
import { userWordHistoryResolvers } from "./schema/userWordHistory";
import { wordResolvers } from "./schema/word";

export const resolvers: GraphQLResolvers = _.merge(
  {},
  userWordHistoryResolvers,
  userResolvers,
  wordResolvers,
  baseResolvers
);
