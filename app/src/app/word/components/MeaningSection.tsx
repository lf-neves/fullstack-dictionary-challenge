import { Typography } from "@mui/material";
import { ReactNode } from "react";

export function MeaningSection({ children }: { children: ReactNode }) {
  return (
    <>
      <Typography variant="h6" fontWeight="bold">
        Meanings
      </Typography>
      {children}
    </>
  );
}
