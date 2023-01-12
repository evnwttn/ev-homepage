import React from "react";
import { Modal, Box } from "@mui/material";

export const ModalBase = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(1.5px)" }}>
      <Box></Box>
    </Modal>
  );
};
