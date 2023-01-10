import React from "react";
import { Box } from "@mui/material";
import { inline } from "../styles";

export const Nav = () => {
  return (
    <Box sx={inline.navFontSx}>
      <>Portfolio</>
      <>Bio</>
      <>Contact</>
    </Box>
  );
};
