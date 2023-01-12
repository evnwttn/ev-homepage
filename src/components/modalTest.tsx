import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

export const modalTest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Modal open={modalOpen} onClose={handleClose}>
        <Box>Yo yo yo </Box>
      </Modal>
    </Box>
  );
};
