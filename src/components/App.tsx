import React, { useState } from "react";
import { Box } from "@mui/material";
import { Nav, Ev, ModalBase } from "./index";
import { inline } from "../styles";

export const App = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={inline.appContainer}>
      <ModalBase open={modalOpen} onClose={handleCloseModal} />
      <Box sx={inline.appBoxLeft}>
        <Ev />
      </Box>
      <Box sx={inline.appBoxRight}>
        <Nav />
      </Box>
    </Box>
  );
};
