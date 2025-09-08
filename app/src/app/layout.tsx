"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import { ApolloWrapper } from "./ApolloWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <ApolloWrapper>{children}</ApolloWrapper>
        </QueryClientProvider>
      </body>
    </html>
  );
}
