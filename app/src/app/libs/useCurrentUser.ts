import { useSuspenseMeQuery } from "@/typings/graphql/codegen/graphqlOperations";

export function useCurrentUser() {
  return useSuspenseMeQuery();
}
