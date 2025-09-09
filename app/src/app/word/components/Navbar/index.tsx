"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuOption from "./MenuOption";
import { useSuspenseMeQuery } from "@/typings/graphql/codegen/graphqlOperations";

export default function Navbar() {
  const { data } = useSuspenseMeQuery();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          MyDictionary
        </Typography>
        {data.me && (
          <MenuOption
            firstName={data.me.firstName ?? ""}
            lastName={data.me.lastName ?? ""}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}
