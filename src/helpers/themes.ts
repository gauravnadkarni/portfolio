import { createTheme, Theme } from "@mui/material";

export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: '#F5F5F5',
    },
    custom: {
      headerBackgroundColor: "#ffffff",
      homeTextColor: "#ffffff",
      footerBackground: "#a7caed",
    }
  },
});

export const darkTheme: Theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: '#494F55',
    },
    custom: {
      headerBackgroundColor: "#000000",
      homeTextColor: "#c0c0c0",
      footerBackground: "#000000",
    },
  },
});
