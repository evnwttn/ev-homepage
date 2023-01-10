import React from "react";
import { Box } from "@mui/material";
import { Nav } from "./index";
import { inline } from "../styles";

export const App = () => {
  return (
    <Box sx={inline.appContainer}>
      <Nav />
    </Box>
  );
};
