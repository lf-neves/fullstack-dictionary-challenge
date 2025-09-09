import { Box, CssBaseline } from "@mui/material";
import { ApolloWrapper } from "./ApolloWrapper";
import { QueryClientWrapper } from "./QueryClientWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <ApolloWrapper>
          <QueryClientWrapper>
            <Box>{children}</Box>
          </QueryClientWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
