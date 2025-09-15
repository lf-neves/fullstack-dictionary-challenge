import {
  GraphQLWord,
  GraphQLWordsQuery,
  GraphQLWordsQueryVariables,
  useSuspenseWordsQuery,
  useTrackWordVisitHistoryMutation,
  WordsDocument,
} from "@/typings/graphql/codegen/graphqlOperations";
import { Box, Button, Grid, Typography } from "@mui/material";
import {
  useQueryClient,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import { useCallback } from "react";
import { useTabsContext } from "./TabsPanel";
import { gqlFetcher } from "@/app/api/client/graphql";

interface WordListProps {
  setSelectedWordId: (wordId: string) => void;
}

export function WordList({ setSelectedWordId }: WordListProps) {
  const { currentTab } = useTabsContext<"all" | "favorites">();
  const queryClient = useQueryClient();
  const { mutateAsync: trackWordVisitHistory } =
    useTrackWordVisitHistoryMutation();

  const handleSelectWord = useCallback(
    async ({ wordId }: Pick<GraphQLWord, "wordId">) => {
      await trackWordVisitHistory({
        input: {
          wordId,
        },
      });

      queryClient.invalidateQueries({
        queryKey: ["userVisitedWordsHistorySuspense"],
      });

      setSelectedWordId(wordId);
    },
    [queryClient, setSelectedWordId, trackWordVisitHistory]
  );

  const fetchWords = async (
    { pageParam = 1 }: { pageParam?: number } = { pageParam: 1 }
  ) => {
    const graphqlWordsFetcher = gqlFetcher<
      GraphQLWordsQuery,
      GraphQLWordsQueryVariables
    >(WordsDocument, {
      input: { page: pageParam, limit: 20 },
    });

    const response = await graphqlWordsFetcher();

    return {
      data: response?.words || [],
      nextCursor: pageParam + 20,
    };
  };

  const {
    data: allWordsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchWords,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.length === 0 ? undefined : lastPage.nextCursor,
  });

  const { data: favoriteWordsData } = useSuspenseWordsQuery(
    {
      input: {
        isFavorite: true,
      },
    },
    {
      queryKey: ["favoriteWordsQuery"],
    }
  );

  const listOfWordsBySelectedTabMap: Record<
    "all" | "favorites",
    Pick<GraphQLWord, "wordId" | "word">[]
  > = {
    all: allWordsData?.pages.flatMap((page) => page.data) || [],
    favorites: favoriteWordsData?.words || [],
  };

  const words = listOfWordsBySelectedTabMap[currentTab];

  if (words.length === 0) {
    return (
      <Box p={2} textAlign="center">
        <Typography variant="body1" color="grey">
          No words found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxHeight: 440, overflowY: "auto" }}>
      <Grid container>
        {words.map((word) => (
          <Grid key={word.wordId} style={{ height: 65, margin: 10 }}>
            <Button
              size="small"
              style={{ color: "black" }}
              variant="text"
              onClick={async () => {
                await handleSelectWord(word);
              }}
            >
              {word.word}
            </Button>
          </Grid>
        ))}
      </Grid>
      {currentTab === "all" ? (
        <Button
          variant="outlined"
          disabled={isFetchingNextPage || !hasNextPage}
          style={{ marginBottom: 2 }}
          onClick={async () => {
            await fetchNextPage();
          }}
        >
          Load More
        </Button>
      ) : null}
    </Box>
  );
}
