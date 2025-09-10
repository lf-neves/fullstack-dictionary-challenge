"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuOption from "./MenuOption";
import { useCurrentUser } from "@/app/SessionProvider";

export default function Navbar() {
  const { isLoggedIn } = useCurrentUser();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          MyDictionary
        </Typography>
        {isLoggedIn && <MenuOption />}
      </Toolbar>
    </AppBar>
  );
}
