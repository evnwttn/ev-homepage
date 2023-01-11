import { palette } from "./palette";

// INDEX

export const indexContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

// APP

export const appContainer = {
  display: "flex",
  flexDirection: "horizontal",
  alignItems: "center",
  justifyContent: "center",
  mt: "11.75vh",
  height: "72.5vh",
};

export const appBoxLeft = {
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  justifyContent: "center",
  height: "100%",
  width: "36.85vw",
};

export const appBoxRight = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  height: "100%",
  width: "36.85vw",
};

// DIVIDER

export const divider = {
  backgroundColor: palette._orange,
  height: "1px",
  width: "100%",
  mb: "1vh",
  ml: "0.04vw",
};

// NAV

export const navContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  paddingTop: "31.5vh",
  paddingLeft: "0.38vw",
};

// TEXTBUTTON

export const textButtonSx = {
  mt: "-1.95vh",
  color: `${palette._cream}`,
  fontFamily: "forma-djr-display, sans-serif;",
  fontWeight: "800",
  fontSize: "3.75vh",
  "&:hover": {
    color: `${palette._orange}`,
    cursor: "pointer",
  },
};
