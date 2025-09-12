import { Tabs, Box } from "@mui/material";
import { createContext, useContext, useState } from "react";

type TabsContextType<T> =
  | {
      currentTab: T;
      setCurrentTab: React.Dispatch<React.SetStateAction<T>>;
    }
  | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TabsContext = createContext<TabsContextType<any>>(undefined);

export function useTabsContext<T>() {
  const context = useContext<TabsContextType<T>>(TabsContext);

  if (!context) {
    throw new Error("useTabsContext must be used within a TabsPanel.");
  }

  return context;
}

export function TabsPanel<T>({
  children,
  defaultTab,
  tabs,
}: {
  children?: React.ReactNode;
  defaultTab: T;
  tabs: React.ReactNode[];
}) {
  const [currentTab, setCurrentTab] = useState<T>(defaultTab);

  return (
    <Box>
      <Tabs
        value={currentTab}
        onChange={(_, selectedTab) => setCurrentTab(selectedTab)}
        aria-label="word tabs"
      >
        {tabs}
      </Tabs>
      <Box mt={2}>
        <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
          {children}
        </TabsContext.Provider>
      </Box>
    </Box>
  );
}
