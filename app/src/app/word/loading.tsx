import { Box, CircularProgress } from "@mui/material";

export default function WordLoading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
