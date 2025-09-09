"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";

export default function WordContainerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}
