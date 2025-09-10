"use client";

import { useCallback, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  GraphQLWord,
  useSuspenseWordsQuery,
  useTrackWordVisitHistoryMutation,
} from "@/typings/graphql/codegen/graphqlOperations";
import { WordCard } from "./components/WordCard";
import { MeaningSection } from "./components/MeaningSection";
import { NavigationButtons } from "./components/NavigationButtons";
import { TabsPanel } from "./components/TabsPanel";
import { WordList } from "./components/WordList";
import { VisitedWordsHistoryTable } from "./components/VisitedWordsHistoryTable";
import { useQueryClient } from "@tanstack/react-query";

export default function Word() {
  const { data: allWordsData } = useSuspenseWordsQuery(
    {},
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
    (GraphQLWord | null)[]
  > = {
    all: allWordsData.words || [],
    favorites: favoriteWordsData.words || [],
  };

  const [currentTab, setCurrentTab] = useState<"all" | "favorites">("all");
  const [selectedWord, setSelectedWordState] = useState<GraphQLWord | null>(
    listOfWordsBySelectedTabMap[currentTab][0] || null
  );

  const { mutateAsync: trackWordVisitHistory } =
    useTrackWordVisitHistoryMutation();

  const queryClient = useQueryClient();
  const setSelectedWord = useCallback(
    async (word: GraphQLWord) => {
      await trackWordVisitHistory({
        input: {
          wordId: word.wordId,
        },
      });

      queryClient.invalidateQueries({
        queryKey: ["userVisitedWordsHistorySuspense"],
      });

      setSelectedWordState(word);
    },
    [queryClient, setSelectedWordState, trackWordVisitHistory]
  );

  return (
    <Container sx={{ mt: 12 }}>
      <Grid container spacing={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          {selectedWord && <WordCard word={selectedWord} />}
          <MeaningSection>
            <Typography variant="body1">{`Verb - "${selectedWord?.word}" or an equivalent greeting.`}</Typography>
          </MeaningSection>
          <NavigationButtons
            onPrev={async () => {
              const currentWordIndex = listOfWordsBySelectedTabMap[
                currentTab
              ].indexOf(selectedWord!);

              await setSelectedWord(
                listOfWordsBySelectedTabMap[currentTab][
                  currentWordIndex > 0 ? currentWordIndex - 1 : 0
                ]!
              );
            }}
            onNext={async () => {
              const currentWordIndex = listOfWordsBySelectedTabMap[
                currentTab
              ].indexOf(selectedWord!);

              const lastWordIndex =
                listOfWordsBySelectedTabMap[currentTab].length - 1;

              await setSelectedWord(
                listOfWordsBySelectedTabMap[currentTab][
                  currentWordIndex < lastWordIndex
                    ? currentWordIndex + 1
                    : lastWordIndex
                ]!
              );
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TabsPanel<"all" | "favorites">
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          >
            <WordList
              setSelectedWord={setSelectedWord}
              words={listOfWordsBySelectedTabMap[currentTab]}
            />
          </TabsPanel>
        </Grid>
      </Grid>
      <Box marginTop={5}>
        <Typography variant="h5" fontWeight={700} style={{ marginBottom: 24 }}>
          Visited words history
        </Typography>
        <VisitedWordsHistoryTable />
      </Box>
    </Container>
  );
}
