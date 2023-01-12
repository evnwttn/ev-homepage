import React from "react";
import { Box } from "@mui/material";
import { TextButton, Divider } from "./index";
import { inline } from "../styles";

export const Nav = ({ handleOpenModal }) => {
  return (
    <Box sx={inline.navContainer}>
      <Divider />
      <TextButton text={"Portfolio"} onClick={handleOpenModal} />
      <TextButton text={"Bio"} onClick={() => console.log("Bio")} />
      <TextButton text={"Contact"} onClick={() => console.log("Contact")} />
    </Box>
  );
};
