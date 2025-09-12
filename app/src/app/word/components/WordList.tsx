import {
  GraphQLWord,
  useSuspenseWordsQuery,
  useTrackWordVisitHistoryMutation,
} from "@/typings/graphql/codegen/graphqlOperations";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useTabsContext } from "./TabsPanel";

interface WordListProps {
  setSelectedWordId: (wordId: string) => void;
}

export function WordList({ setSelectedWordId }: WordListProps) {
  const { currentTab } = useTabsContext<"all" | "favorites">();
  const queryClient = useQueryClient();
  const { mutateAsync: trackWordVisitHistory } =
    useTrackWordVisitHistoryMutation();

  const [allWordsLimit, setAllWordsLimit] = useState(20);

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

  const { data: allWordsData } = useSuspenseWordsQuery(
    {
      input: {
        limit: allWordsLimit,
        page: allWordsLimit / 20,
      },
    },
    {
      queryKey: ["allWordsQuery"],
    }
  );

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
    all: allWordsData.words || [],
    favorites: favoriteWordsData.words || [],
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
          style={{ marginBottom: 2 }}
          onClick={async () => {
            setAllWordsLimit((prev) => prev + 20);
          }}
        >
          Load More
        </Button>
      ) : null}
    </Box>
  );
}
