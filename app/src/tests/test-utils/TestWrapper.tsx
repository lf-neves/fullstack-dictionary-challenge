import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MockedProvider as RootMockedProvider } from "@apollo/client/testing/react";
import { MockLink } from "@apollo/client/testing";

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}

export function ReactQueryWrapper({ children }: { children: ReactNode }) {
  const queryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export function MockedProvider({
  children,
  mocks,
}: {
  children: ReactNode;
  mocks: MockLink.MockedResponse[];
}) {
  return (
    <RootMockedProvider mocks={mocks}>
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </RootMockedProvider>
  );
}
