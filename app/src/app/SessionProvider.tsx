"use client";

import { createContext, ReactNode, useContext } from "react";
import {
  GraphQLUser,
  useMeQuery,
} from "@/typings/graphql/codegen/graphqlOperations";

const SessionContext = createContext<{
  isLoggedIn: boolean;
  currentUser: GraphQLUser | null;
} | null>(null);

export function useCurrentUser() {
  const currentUserData = useContext(SessionContext);

  if (!currentUserData) {
    throw new Error("Failed to retrieve current user data.");
  }

  return currentUserData;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const { data } = useMeQuery();

  return (
    <SessionContext.Provider
      value={{ isLoggedIn: Boolean(data?.me), currentUser: data?.me ?? null }}
    >
      {children}
    </SessionContext.Provider>
  );
}
