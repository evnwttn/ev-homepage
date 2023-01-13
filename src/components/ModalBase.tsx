import React from "react";
import { Modal, Box } from "@mui/material";
import { Portfolio } from "./Portfolio";
import { inline } from "../styles";

export const ModalBase = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(1.5px)" }}>
      <Box sx={inline.modalWrapper}>
        <Box sx={inline.modalImageBox}>
          <Portfolio />
        </Box>
      </Box>
    </Modal>
  );
};
