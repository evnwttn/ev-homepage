import React from "react";
import { Box } from "@mui/material";
import { inline } from "../styles";

export const TextButton = ({ text }) => {
  return <Box sx={inline.navFontSx}>{text}</Box>;
};
