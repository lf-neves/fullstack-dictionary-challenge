import {
  GraphQLWord,
  useSuspenseWordQuery,
} from "@/typings/graphql/codegen/graphqlOperations";
import { Alert, Box, Button, Typography } from "@mui/material";
import { NavigationButtons } from "../NavigationButtons";
import { MeaningSection } from "../MeaningSection";
import { useState } from "react";
import { WordCard } from "./WordCard";

type WordIdInput = { wordId: { input: string; output: string } };

export function WordDetails({ wordId }: Pick<GraphQLWord, "wordId">) {
  const [currentMeaningIndex, setCurrentMeaningIndex] = useState(0);
  const { data } = useSuspenseWordQuery({
    wordId,
  } as unknown as WordIdInput);

  if (!data?.word) {
    return (
      <Alert severity="info">
        There are no details available for this word.
      </Alert>
    );
  }

  const { word } = data;
  const currentMeaning = word.meanings[currentMeaningIndex];

  return (
    <Box>
      <WordCard word={word} />
      <Box mb={4} />
      <MeaningSection>
        <Typography variant="body1">
          {currentMeaning
            ? `(${currentMeaning.partOfSpeech}) - ${currentMeaning.definitions[0].definition}.`
            : "No meanings available for this word."}
        </Typography>
      </MeaningSection>
      <NavigationButtons
        backButton={
          <Button
            variant="outlined"
            disabled={currentMeaningIndex === 0}
            onClick={() => {
              setCurrentMeaningIndex((prev) =>
                prev > 0 ? prev - 1 : word.meanings.length - 1
              );
            }}
          >
            Back
          </Button>
        }
        nextButton={
          <Button
            variant="outlined"
            disabled={currentMeaningIndex === word.meanings.length - 1}
            onClick={() => {
              setCurrentMeaningIndex((prev) =>
                prev < word.meanings.length - 1 ? prev + 1 : 0
              );
            }}
          >
            Next
          </Button>
        }
      />
    </Box>
  );
}
