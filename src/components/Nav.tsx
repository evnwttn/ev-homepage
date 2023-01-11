import React from "react";
import { Box, Divider } from "@mui/material";
import { TextButton } from "./TextButton";
import { inline } from "../styles";

export const Nav = () => {
  return (
    <Box sx={inline.navContainer}>
      <Divider sx={{ fontSize: "5vw" }} orientation="horizontal" flexItem />
      <TextButton text={"Portfolio"} />
      <TextButton text={"Bio"} />
      <TextButton text={"Contact"} />
    </Box>
  );
};
