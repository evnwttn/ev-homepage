import { createTheme } from "@mui/material";
import { palette } from "./palette";

export const theme = createTheme({
  palette: {
    primary: {
      main: palette._cream,
    },
    secondary: {
      main: palette._darkBlue,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          fontSize: "0.75vw",
          color: palette._orange,
        },
      },
    },
  },
});
