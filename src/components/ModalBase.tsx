import React from "react";
import Image from "next/image";
import { Modal, Box } from "@mui/material";

export const ModalBase = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(1.5px)" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "6vh",
            width: "70vw",
            height: "auto",
          }}
        >
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
