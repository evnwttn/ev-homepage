import React from "react";
import { Box } from "@mui/material";
import { inline } from "../styles";

export const Nav = () => {
  return (
    <Box sx={inline.navContainer}>
      <Box sx={inline.navFontSx}>Portfolio</Box>
      <Box sx={inline.navFontSx}>Bio</Box>
      <Box sx={inline.navFontSx}>About</Box>
    </Box>
  );
};
