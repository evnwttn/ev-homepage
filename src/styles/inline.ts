import { palette } from "./palette";

// INDEX

export const indexContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

// COMPONENTS

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

// NAV

export const navContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  paddingTop: "30vh",
  paddingLeft: "0.38vw",
};

export const navFontSx = {
  mt: "-1.95vh",
  color: `${palette._cream}`,
  fontFamily: "forma-djr-display, sans-serif;",
  fontWeight: "800",
  fontSize: "4vh",
};
