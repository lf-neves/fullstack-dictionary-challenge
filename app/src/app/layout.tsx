import { Box, CssBaseline } from "@mui/material";
import { ApolloWrapper } from "./ApolloWrapper";
import { QueryClientWrapper } from "./QueryClientWrapper";
import Navbar from "../components/Navbar";
import { SessionProvider } from "./SessionProvider";

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
            <SessionProvider>
              <Navbar />
              <Box>{children}</Box>
            </SessionProvider>
          </QueryClientWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
