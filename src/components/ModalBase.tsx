import React from "react";
import { Modal, Box } from "@mui/material";

export const ModalBase = ({ modalOpen, handleCloseModal }: any) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      sx={{ backdropFilter: "blur(1.5px)" }}
    >
      <Box>Yo yo yo </Box>
    </Modal>
  );
};
