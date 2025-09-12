import { Box } from "@mui/material";
import React from "react";

export function NavigationButtons({
  nextButton,
  backButton,
}: {
  nextButton: React.ReactNode;
  backButton: React.ReactNode;
}) {
  return (
    <Box display="flex" justifyContent="space-between" mt={2}>
      {backButton}
      {nextButton}
    </Box>
  );
}
