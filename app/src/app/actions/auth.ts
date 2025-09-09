"use server";

import { AuthenticateUserDocument } from "@/typings/graphql/codegen/graphqlOperations";
import { createSession, deleteSession } from "../libs/session";
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
  const { email, password } = formData;
  const res = await fetch("http://localhost:3000/api/endpoints/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: AuthenticateUserDocument,
      variables: { input: { email, password } },
    }),
  });

  const { data } = await res.json();
  const { token } = data?.authenticateUser || {};

  if (!token) {
    redirect("/login?error=invalid_credentials");
  }

  await createSession(token);

  redirect("/word");
}

export async function logout() {
  await deleteSession();

  redirect("/login");
}
