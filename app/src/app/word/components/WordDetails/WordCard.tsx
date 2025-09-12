import { Card, CardContent, Typography, Button } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  GraphQLWord,
  useUpdateWordMutation,
} from "@/typings/graphql/codegen/graphqlOperations";
import { useQueryClient } from "@tanstack/react-query";
import { AudioPlayer } from "../../../../components/AudioPlayer";
import { useMemo } from "react";

export function WordCard({ word }: { word: Omit<GraphQLWord, "status"> }) {
  const { mutateAsync: updateWordMutation } = useUpdateWordMutation();
  const queryClient = useQueryClient();

  // find the first phonetic with an audio URL
  let phonetic = useMemo(
    () => word.phonetics?.find((currentPhonetic) => currentPhonetic.audio),
    [word.phonetics]
  );

  // fallback to the first phonetic if none have an audio URL
  if (!phonetic) {
    phonetic = word.phonetics?.[0];
  }

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
        {phonetic?.audio ? (
          <AudioPlayer audioUrl={phonetic.audio} />
        ) : (
          <Typography variant="body2" color="grey.600" align="center">
            No audio available
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
