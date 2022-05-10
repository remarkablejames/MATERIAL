import { Box, Stack } from "@mui/material";
import React from "react";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <Box>
      <Stack>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
