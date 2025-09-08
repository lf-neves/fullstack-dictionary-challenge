import { _ } from "lambda";

import { GraphQLResolvers } from "./generatedTypes";
import { baseResolvers } from "./schema/baseResolvers";
import { userResolvers } from "./schema/user";
import { wordResolvers } from "./schema/word";

export const resolvers: GraphQLResolvers = _.merge(
  {},
  userResolvers,
  wordResolvers,
  baseResolvers
);
