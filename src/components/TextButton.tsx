import React from "react";
import { Box } from "@mui/material";
import { inline } from "../styles";

export const TextButton = ({ text, onClick }) => {
  return (
    <Box sx={inline.textButtonSx} onClick={onClick}>
      {text}
    </Box>
  );
};
