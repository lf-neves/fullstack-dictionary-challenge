import { render, screen } from "@testing-library/react";
import { WordList } from "..";
import { TabsPanel } from "../../TabsPanel";
import { MockedProvider } from "@/tests/test-utils/TestWrapper";
import {
  TrackWordVisitHistoryDocument,
  WordsDocument,
} from "@/typings/graphql/codegen/graphqlOperations";
import { gql } from "@apollo/client";
import { Suspense } from "react";
import userEvent from "@testing-library/user-event";

describe("WordList", () => {
  beforeAll(() => {
    /**
     * We need to create a mock for the fetch API because
     * because although Apollo Client is mocked, the WordList component
     * uses the react-query load more hook that uses fetch under the hood.
     */
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          words: [
            { wordId: "1", word: "car", isFavorite: false },
            { wordId: "2", word: "bike", isFavorite: true },
            { wordId: "3", word: "bus", isFavorite: false },
          ],
        },
      }),
    });
  });
  test("renders a list of words and favorite words", async () => {
    const setSelectedWordId = jest.fn();

    // act
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: gql(WordsDocument),
              variables: {
                input: { page: 1, limit: 20, isFavorite: true },
              },
            },
            result: {
              data: {
                words: [{ id: "2", word: "bike", isFavorite: true }],
              },
            },
          },
          {
            request: {
              query: gql(TrackWordVisitHistoryDocument),
              variables: {
                input: { wordId: "1" },
              },
            },
            result: {
              data: { trackWordVisitHistory: { success: true } },
            },
          },
        ]}
      >
        <Suspense fallback={<></>}>
          <TabsPanel defaultTab={"all"} tabs={["all", "favorites"]}>
            <WordList setSelectedWordId={setSelectedWordId} />
          </TabsPanel>
        </Suspense>
      </MockedProvider>
    );

    // assert: all words are rendered
    expect(
      await screen.findByRole("button", { name: "car" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "bike" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "bus" })
    ).toBeInTheDocument();

    // act: selects a word
    const carWordButton = screen.getByRole("button", { name: "car" });
    await userEvent.click(carWordButton);

    // assert: setSelectedWordId is called with the correct wordId
    expect(setSelectedWordId).toHaveBeenNthCalledWith(1, "1");
  });
});
