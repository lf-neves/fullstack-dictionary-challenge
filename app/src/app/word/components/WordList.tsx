import { GraphQLWord } from "@/typings/graphql/codegen/graphqlOperations";
import { Box, Button, Grid, Typography } from "@mui/material";

interface WordListProps {
  words: (GraphQLWord | null)[];
  setSelectedWord: (word: GraphQLWord) => Promise<void>;
}

export function WordList({ words, setSelectedWord }: WordListProps) {
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
    <Grid container>
      {words.map((word) => {
        if (!word) {
          return null;
        }

        return (
          <Grid key={word.wordId} style={{ height: 65, margin: 10 }}>
            <Button
              size="small"
              style={{ color: "black" }}
              variant="text"
              onClick={async () => {
                await setSelectedWord(word);
              }}
            >
              {word.word}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}
