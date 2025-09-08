import type { CodegenConfig } from "@graphql-codegen/cli";
import path from "node:path";

const config: CodegenConfig = {
  schema: "./src/graphql/schema/**",
  documents: path.resolve(__dirname, "../../app/src/**/*.graphql"),
  hooks: {
    afterAllFileWrite: ["pnpm fmt"],
  },
  config: {
    declarationKind: "interface",
    scalars: {
      Date: "string",
      DateTime: "string",
      EmailAddress: "string",
      PositiveInt: "number",
      NonPositiveInt: "number",
      NonNegativeInt: "number",
      Upload: "Promise<FileUpload>",
      NonEmptyString: "string",
      AccessRoleAction: "AccessRoleAction",
      SortBy: "Array<[string, 'asc' | 'desc']>",
      JSONObject: "Record<string, unknown>",
      SafeInt: "number",
    },
    typesPrefix: "GraphQL",
  },
  generates: {
    "src/graphql/generatedTypes.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    [path.resolve(
      __dirname,
      "../../app/src/typings/graphql/codegen/graphqlOperations.ts"
    )]: {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        "named-operations-object",
      ],
      config: {
        content: `/* eslint-disable */
                  'use client';
                  import type { ReactQueryError } from '../../../types';`,
        enumsAsTypes: true,
        fetcher: "../../../app/api/client/graphql#gqlFetcher",
        errorType: "ReactQueryError",
        allowParentTypeOverride: true,
        reactQueryVersion: 5,
        addSuspenseQuery: true,
      },
    },
  },
};

export default config;
