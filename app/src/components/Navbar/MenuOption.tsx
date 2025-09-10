"use client";

import { logout } from "@/app/actions/auth";
import { useCurrentUser } from "@/app/SessionProvider";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function MenuOption() {
  const { currentUser } = useCurrentUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Box display="flex" alignItems="center" onClick={handleMenuOpen}>
          <IconButton size="small">
            <Avatar
              alt="User"
              src="https://mui.com/static/images/avatar/1.jpg" // TODO: Replace with real user image
            />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1, cursor: "pointer" }}>
            {currentUser?.firstName} {currentUser?.lastName}
          </Typography>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem disabled>Profile</MenuItem>
        <MenuItem
          onClick={async () => {
            await logout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
