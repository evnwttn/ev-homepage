import { palette } from "./palette";

// INDEX

export const indexContainer = {
  display: "flex",
  flexDirection: "vertical",
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
  height: "100%",
  width: "36.85vw",
  backgroundColor: palette._black,
};

export const appBoxRight = {
  height: "100%",
  width: "36.85vw",
  backgroundColor: palette._black,
};

// NAV

export const navContainer = {
  display: "flex",
  flexDirection: "vertical",
  alignItems: "start",
  justifyContent: "start",
  backgroundColor: "pink",
  paddingTop: "25vh",
  paddingLeft: "0.5vw",
};

export const navFontSx = {
  color: `${palette._cream}`,
  fontFamily: "forma-djr-display, sans-serif;",
  fontWeight: "800",
  fontSize: "4vh",
};
