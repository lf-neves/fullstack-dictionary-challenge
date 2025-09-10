import { Box, IconButton, LinearProgress } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

export function AudioPlayer({ audioUrl }: { audioUrl: string }) {
  const audioComponent = new Audio(audioUrl);
  const [progress, setProgress] = useState(0);

  audioComponent.ontimeupdate = () => {
    if (audioComponent.duration > 0) {
      setProgress((audioComponent.currentTime / audioComponent.duration) * 100);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={() => audioComponent.play()} aria-label="play">
        <PlayArrowIcon />
      </IconButton>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ flexGrow: 1, ml: 1 }}
      />
    </Box>
  );
}
