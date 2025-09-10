"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function WordContainerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Box>{children}</Box>;
}
