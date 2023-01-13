import React from "react";
import Image from "next/image";
import { Modal, Box } from "@mui/material";
import { inline } from "../styles";

export const ModalBase = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(1.5px)" }}>
      <Box sx={inline.modalWrapper}>
        <Box sx={inline.modalImageBox}>
          <Image
            src="../img/ao.png"
            alt="AO"
            width="1920"
            height="1992"
            style={{ height: "100%", width: "auto" }}
          />
          <Image
            src="../img/ptk.png"
            alt="AO"
            width="1920"
            height="1068"
            style={{ height: "100%", width: "auto" }}
          />
          <Image
            src="../img/tfu.png"
            alt="TFU"
            width="1920"
            height="1068"
            style={{ height: "100%", width: "auto" }}
          />
        </Box>
      </Box>
    </Modal>
  );
};
