import React from "react";
import { Modal, Box } from "@mui/material";

export const modalTest = ({ modalOpen, handleClose }: any) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(1.5px)" }}
    >
      <Box>Yo yo yo </Box>
    </Modal>
  );
};
