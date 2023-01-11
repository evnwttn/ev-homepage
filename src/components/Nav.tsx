import React from "react";
import { Box } from "@mui/material";
import { TextButton } from "./TextButton";
import { inline } from "../styles";

export const Nav = () => {
  return (
    <Box sx={inline.navContainer}>
      <TextButton text={"Portfolio"} />
      <TextButton text={"Bio"} />
      <TextButton text={"Contact"} />
    </Box>
  );
};
