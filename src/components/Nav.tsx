import React from "react";
import { Box } from "@mui/material";
import { TextButton, Divider } from "./index";
import { inline } from "../styles";

export const Nav = () => {
  return (
    <Box sx={inline.navContainer}>
      <Divider />
      <TextButton text={"Portfolio"} />
      <TextButton text={"Bio"} />
      <TextButton text={"Contact"} />
    </Box>
  );
};
