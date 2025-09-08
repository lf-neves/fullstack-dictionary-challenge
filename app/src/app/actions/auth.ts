"use server";

import {
  GraphQLAuthenticateUserMutation,
  GraphQLAuthenticateUserMutationVariables,
} from "@/typings/graphql/codegen/graphqlOperations";
import { gqlFetcher } from "../api/client/graphql";
import { createSession } from "../libs/session";
import { redirect } from "next/navigation";

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export async function login(formData: { email: string; password: string }) {
  const query = `
        mutation AuthenticateUser($input: AuthenticateUserInput!) {
            authenticateUser(input: $input) {
                token
            }
        }
      `;

  const { email, password } = formData;
  const graphqlResponse = gqlFetcher<
    GraphQLAuthenticateUserMutation,
    GraphQLAuthenticateUserMutationVariables
  >(query, {
    input: { email, password },
  });

  const data = await graphqlResponse();
  const { token } = data?.authenticateUser || {};

  if (!token) {
    redirect("/login?error=invalid_credentials");
  }

  await createSession(token);

  redirect("/");
}
