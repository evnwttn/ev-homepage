import React from "react";
import { Box } from "@mui/material";
import { Nav } from "./index";
import { inline } from "../styles";

export const App = () => {
  return (
    <Box sx={inline.appContainer}>
      <Box sx={inline.appBox}></Box>
      <Box sx={inline.appBox}>
        <Nav />
      </Box>
    </Box>
  );
};
