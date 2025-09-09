import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  IconButton,
  Button,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  GraphQLWord,
  useUpdateWordMutation,
} from "@/typings/graphql/codegen/graphqlOperations";
import { useQueryClient } from "@tanstack/react-query";

export function WordCard({ word }: { word: GraphQLWord }) {
  const { mutateAsync: updateWordMutation } = useUpdateWordMutation();
  const queryClient = useQueryClient();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center">
          <Button
            size="small"
            style={{ padding: 0 }}
            onClick={async () => {
              await updateWordMutation(
                {
                  input: {
                    wordId: word.wordId,
                    isFavorite: !word.isFavorite,
                  },
                },
                {
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ["favoriteWordsQuery"],
                    });

                    word.isFavorite = !word.isFavorite;
                  },
                }
              );
            }}
          >
            {word.isFavorite ? (
              <Favorite />
            ) : (
              <FavoriteBorder color="primary" />
            )}
          </Button>
          {word.word}
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Some phonetics
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton>
            <PlayArrowIcon />
          </IconButton>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{ flexGrow: 1, ml: 1 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
