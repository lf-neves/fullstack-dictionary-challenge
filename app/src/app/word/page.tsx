"use client";

import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import {
  GraphQLWord,
  useSuspenseWordsQuery,
} from "@/typings/graphql/codegen/graphqlOperations";
import { WordCard } from "./components/WordCard";
import { MeaningSection } from "./components/MeaningSection";
import { NavigationButtons } from "./components/NavigationButtons";
import { TabsPanel } from "./components/TabsPanel";
import { WordList } from "./components/WordList";

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
  const [selectedWord, setSelectedWord] = useState<GraphQLWord | null>(
    listOfWordsBySelectedTabMap[currentTab][0] || null
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
            onPrev={() => {
              const currentWordIndex = listOfWordsBySelectedTabMap[
                currentTab
              ].indexOf(selectedWord!);

              if (currentWordIndex > 0) {
                setSelectedWord(
                  listOfWordsBySelectedTabMap[currentTab][currentWordIndex - 1]!
                );
              } else {
                setSelectedWord(listOfWordsBySelectedTabMap[currentTab][0]!);
              }
            }}
            onNext={() => {
              const currentWordIndex = listOfWordsBySelectedTabMap[
                currentTab
              ].indexOf(selectedWord!);

              if (
                currentWordIndex <
                listOfWordsBySelectedTabMap[currentTab].length - 1
              ) {
                setSelectedWord(
                  listOfWordsBySelectedTabMap[currentTab][currentWordIndex + 1]!
                );
              } else {
                setSelectedWord(
                  listOfWordsBySelectedTabMap[currentTab][
                    listOfWordsBySelectedTabMap[currentTab].length - 1
                  ]!
                );
              }
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
    </Container>
  );
}
