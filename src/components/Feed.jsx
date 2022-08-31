import React from "react";
import { Stack, Box } from "@mui/material";
import Sidebar from "./Sidebar"

export default function Feed() {
  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box sx={{height: "92vh", width: "100%"}}>
        <Sidebar />
      </Box>
    </Stack>
  );
}
