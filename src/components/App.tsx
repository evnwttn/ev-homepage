import React, { useState } from "react";
import { Box } from "@mui/material";
import { Nav, Ev, ModalBase } from "./index";
import { inline } from "../styles";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={inline.appContainer}>
      <ModalBase open={isModalOpen} onClose={handleCloseModal} />
      <Box sx={inline.appBoxLeft}>
        <Ev />
      </Box>
      <Box sx={inline.appBoxRight}>
        <Nav handleOpenModal={handleOpenModal} />
      </Box>
    </Box>
  );
};
