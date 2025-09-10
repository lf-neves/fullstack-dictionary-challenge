import { GraphQLWord } from "@/typings/graphql/codegen/graphqlOperations";
import { Box, Button, Grid, Typography } from "@mui/material";

interface WordListProps {
  words: GraphQLWord[];
  loadMoreButton: React.ReactNode;
  setSelectedWord: (word: GraphQLWord) => Promise<void>;
}

export function WordList({
  words,
  setSelectedWord,
  loadMoreButton,
}: WordListProps) {
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
                await setSelectedWord(word);
              }}
            >
              {word.word}
            </Button>
          </Grid>
        ))}
      </Grid>
      {loadMoreButton}
    </Box>
  );
}
