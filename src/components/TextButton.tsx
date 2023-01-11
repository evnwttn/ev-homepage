import React from "react";
import { Box } from "@mui/material";
import { inline } from "../styles";
import { TextButtonProps } from "../types";

export const TextButton = ({ text }: TextButtonProps) => {
  return (
    <Box sx={inline.textButtonSx} onClick={() => console.log(text)}>
      {text}
    </Box>
  );
};
