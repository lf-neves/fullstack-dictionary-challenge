import { Tabs, Tab, Box } from "@mui/material";

export function TabsPanel<T>({
  children,
  currentTab,
  setCurrentTab,
}: {
  children?: React.ReactNode;
  currentTab: T;
  setCurrentTab: (tab: T) => void;
}) {
  return (
    <Box>
      <Tabs
        value={currentTab}
        onChange={(_, selectedTab) => setCurrentTab(selectedTab)}
        aria-label="word tabs"
      >
        <Tab value="all" label="Word list" />
        <Tab value="favorites" label="Favorites" />
      </Tabs>
      <Box mt={2}>{children}</Box>
    </Box>
  );
}
