import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ paddingY: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Dictionary App</Typography>
        </Box>
        <Button variant="text" sx={{ color: "white" }}>
          Signup
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "white", borderColor: "white" }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
