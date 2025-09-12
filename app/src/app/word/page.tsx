"use client";

import { Suspense, useState } from "react";
import { Box, Container, Grid, Tab, Typography } from "@mui/material";
import { TabsPanel } from "./components/TabsPanel";
import { WordList } from "./components/WordList";
import { VisitedWordsHistoryTable } from "./components/VisitedWordsHistoryTable";
import { WordDetails } from "./components/WordDetails";
import { WordDetailsSkeleton } from "./components/WordDetails/WordDetailsSkeleton";

export default function Word() {
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);

  return (
    <Container sx={{ mt: 12 }}>
      <Grid container spacing={12}>
        <Grid size={{ xs: 12, md: 4 }}>
          {selectedWordId && (
            <Suspense fallback={<WordDetailsSkeleton />}>
              <WordDetails wordId={selectedWordId} />
            </Suspense>
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <TabsPanel<"all" | "favorites">
            defaultTab={"all"}
            tabs={[
              <Tab key="all" value="all" label="Word list" />,
              <Tab key="favorites" value="favorites" label="Favorites" />,
            ]}
          >
            <WordList setSelectedWordId={setSelectedWordId} />
          </TabsPanel>
        </Grid>
      </Grid>
      <Box marginTop={6}>
        <Typography variant="h5" fontWeight={700} style={{ marginBottom: 24 }}>
          Visited words history
        </Typography>
        <VisitedWordsHistoryTable />
      </Box>
    </Container>
  );
}
