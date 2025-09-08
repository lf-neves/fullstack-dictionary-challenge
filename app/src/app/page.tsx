"use client";

import { redirect } from "next/navigation";
import { useCurrentUser } from "./libs/useCurrentUser";

export default function Home() {
  const { data, error } = useCurrentUser();

  if (!data?.me || error) {
    redirect("/login");
  }

  const currentUser = data.me;

  return (
    <>
      Welcome {currentUser.firstName} {currentUser.lastName}
    </>
  );
}
