import { MeDocument } from "@/typings/graphql/codegen/graphqlOperations";

export async function getCurrentUser() {
  try {
    const res = await fetch("http://localhost:3000/api/endpoints/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: MeDocument,
        variables: {},
      }),
    });

    const { data } = await res.json();

    if (!data?.me) {
      return { isLoggedIn: false, currentUser: null };
    }

    return { isLoggedIn: true, currentUser: data.me };
  } catch {
    return { isLoggedIn: false, currentUser: null };
  }
}
