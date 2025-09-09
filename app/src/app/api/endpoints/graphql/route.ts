import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const body = await req.json();

  try {
    const res = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
      credentials: "include",
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("GraphQL proxy failed:", err);

    return NextResponse.json(
      { data: null, errors: [{ message: "Cannot reach GraphQL server" }] },
      { status: 500 }
    );
  }
}
