import { Card, CardContent, Typography, Button } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  GraphQLWord,
  useSuspenseWordQuery,
  useUpdateWordMutation,
} from "@/typings/graphql/codegen/graphqlOperations";
import { useQueryClient } from "@tanstack/react-query";
import { AudioPlayer } from "./AudioPlayer";

export function WordCard({ word }: { word: GraphQLWord }) {
  const { mutateAsync: updateWordMutation } = useUpdateWordMutation();
  const queryClient = useQueryClient();
  const { data } = useSuspenseWordQuery({
    wordId: word.wordId,
  });

  if (!data?.word) {
    return null;
  }

  const [phonetic] = data.word.phonetics;

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
          {phonetic?.text || "No phonetic available"}
        </Typography>
        {phonetic?.audio && <AudioPlayer audioUrl={phonetic.audio} />}
      </CardContent>
    </Card>
  );
}
